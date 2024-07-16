import React, { useState } from 'react';
import './AdminPortal.css';
import PropTypes from 'prop-types';


export let initialJobsData = [
  { title: 'Web Developer', company: 'Accenture', description: 'Responsible for developing and maintaining web applications.', category: 'Web Development', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Full Time' },
  { title: 'UI Designer', company: 'Google', description: 'Designing user interfaces for various applications.', category: 'UI Design', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Part Time' },
  { title: 'Software Developer', company: 'TCS', description: 'Develop and maintain software applications.', category: 'Software Development', experience: '3-6 years', salary: '1 Lakh - 2 Lakhs', type: 'Full Time' },
  { title: 'Marketing Specialist', company: 'Google', description: 'Handling marketing campaigns and sales.', category: 'Marketing/Sales', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Remote' },
  { title: 'Project Manager', company: 'Accenture', description: 'Managing projects and teams.', category: 'Project Work', experience: 'More than 6 years', salary: 'Above 2 Lakhs', type: 'Full Time' },
  { title: 'Graphic Designer', company: 'Adobe', description: 'Create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.', category: 'Creative Design', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Freelancer' },
  { title: 'Front-End Developer', company: 'Google', description: 'Building and maintaining the front end of web applications.', category: 'Web Development', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Full Time' },
  { title: 'SEO Specialist', company: 'Meta', description: 'Optimize web pages for search engines to increase traffic.', category: 'Marketing/Sales', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Part Time' },
  { title: 'Backend Developer', company: 'MicroSoft', description: 'Develop server-side logic and APIs for web applications.', category: 'Web Development', experience: '3-6 years', salary: '1 Lakh - 2 Lakhs', type: 'Full Time' },
  { title: 'Business Analyst', company: 'Oracle', description: 'Analyze business requirements and processes to improve efficiency.', category: 'Project Work', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Remote' },
  { title: 'Content Writer', company: 'Adobe', description: 'Create written content for marketing and communication.', category: 'Marketing/Sales', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Freelancer' },
  { title: 'UX Researcher', company: 'Google', description: 'Conduct research to understand user needs and improve user experience.', category: 'UI Design', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Part Time' },
  { title: 'Software Tester', company: 'TCS', description: 'Test software applications for bugs and quality assurance.', category: 'Software Development', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Full Time' },
  { title: 'Digital Marketer', company: 'Meta', description: 'Develop and execute online marketing strategies to increase brand awareness.', category: 'Marketing/Sales', experience: '3-6 years', salary: '1 Lakh - 2 Lakhs', type: 'Remote' },
  { title: 'UI Developer', company: 'Oracle', description: 'Develop and design user interfaces for applications.', category: 'UI Design', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Freelancer' },
  { title: 'Database Administrator', company: 'MicroSoft', description: 'Manage and maintain database systems for performance and security.', category: 'Software Development', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Full Time' },
  { title: 'DevOps Engineer', company: 'Accenture', description: 'Implement and manage CI/CD pipelines and cloud infrastructure.', category: 'Software Development', experience: '3-6 years', salary: '1 Lakh - 2 Lakhs', type: 'Full Time' },
  { title: 'Graphic Designer', company: 'Adobe', description: 'Create visual concepts and designs for various media.', category: 'Creative Design', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Part Time' },
  { title: 'Data Scientist', company: 'Google', description: 'Analyze large datasets to derive insights and support decision-making.', category: 'Software Development', experience: 'More than 6 years', salary: 'Above 2 Lakhs', type: 'Full Time' },
  { title: 'Technical Writer', company: 'Meta', description: 'Create and maintain technical documentation and manuals.', category: 'Project Work', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Freelancer' },
  { title: 'Social Media Manager', company: 'Oracle', description: 'Manage social media accounts and develop engagement strategies.', category: 'Marketing/Sales', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Remote' },
  { title: 'Full Stack Developer', company: 'MicroSoft', description: 'Work on both front-end and back-end development for web applications.', category: 'Web Development', experience: '3-6 years', salary: '1 Lakh - 2 Lakhs', type: 'Full Time' },
  { title: 'Marketing Coordinator', company: 'Meta', description: 'Coordinate marketing campaigns and events.', category: 'Marketing/Sales', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Part Time' },
  { title: 'Frontend Engineer', company: 'Oracle', description: 'Develop user interfaces and improve web application performance.', category: 'Web Development', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Freelancer' },
  { title: 'Project Coordinator', company: 'Adobe', description: 'Support project managers in planning and executing projects.', category: 'Project Work', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Part Time' },
  { title: 'Cloud Solutions Architect', company: 'Accenture', description: 'Design and implement cloud computing solutions for clients.', category: 'Software Development', experience: 'More than 6 years', salary: 'Above 2 Lakhs', type: 'Full Time' },
  { title: 'Customer Support Specialist', company: 'TCS', description: 'Provide support to customers and resolve their issues.', category: 'Marketing/Sales', experience: 'Freshers', salary: '10,000 - 50,000', type: 'Remote' },
  { title: 'Mobile App Developer', company: 'Google', description: 'Develop mobile applications for Android and iOS platforms.', category: 'Software Development', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Full Time' },
  { title: 'Creative Director', company: 'Adobe', description: 'Lead creative projects and oversee design teams.', category: 'Creative Design', experience: 'More than 6 years', salary: 'Above 2 Lakhs', type: 'Full Time' },
  { title: 'IT Support Specialist', company: 'Meta', description: 'Provide technical support for IT systems and users.', category: 'Software Development', experience: '1-2 years', salary: '10,000 - 50,000', type: 'Freelancer' },
  { title: 'E-commerce Specialist', company: 'MicroSoft', description: 'Manage and optimize e-commerce platforms and sales channels.', category: 'Marketing/Sales', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Remote' },
  { title: 'Software Engineer Intern', company: 'TCS', description: 'Assist in the development and testing of software applications.', category: 'Software Development', experience: 'Freshers', salary: '10,000 - 50,000', type: 'Part Time' },
  { title: 'Research Scientist', company: 'Google', description: 'Conduct research in emerging technologies and applications.', category: 'Software Development', experience: 'More than 6 years', salary: 'Above 2 Lakhs', type: 'Full Time' },
  { title: 'Web Designer', company: 'Meta', description: 'Design and develop websites for various clients.', category: 'Web Development', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Freelancer' },
  { title: 'DevOps Engineer', company: 'Oracle', description: 'Manage deployment pipelines and automate workflows.', category: 'Software Development', experience: '2-3 years', salary: '50,000 - 100,000', type: 'Remote' },
  { title: 'IT Consultant', company: 'Adobe', description: 'Provide expert advice on IT strategies and solutions.', category: 'Project Work', experience: 'More than 6 years', salary: 'Above 2 Lakhs', type: 'Full Time' }

];

const AdminPortal = ({ mode }) => {
  const [jobs, setJobs] = useState(initialJobsData);
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    description: '',
    category: '',
    experience: '',
    salary: '',
    type: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    initialJobsData = updatedJobs; 
    setNewJob({
      title: '',
      company: '',
      description: '',
      category: '',
      experience: '',
      salary: '',
      type: ''
    });
  };

  const handleDeleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    initialJobsData = updatedJobs; 
  };

  return (
    <div className={`admin-portal ${mode}`}>
      <h2>Admin Portal</h2>
      <form onSubmit={handleAddJob}>
        <input
          type="text"
          name="title"
          value={newJob.title}
          onChange={handleInputChange}
          placeholder="Job Title"
          required
        />
        <input
          type="text"
          name="company"
          value={newJob.company}
          onChange={handleInputChange}
          placeholder="Company"
          required
        />
        <textarea
          name="description"
          value={newJob.description}
          onChange={handleInputChange}
          placeholder="Job Description"
          required
        ></textarea>
        <select name="category" value={newJob.category} onChange={handleInputChange} required>
          <option value="" disabled>Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Software Development">Software Development</option>
          <option value="Marketing/Sales">Marketing/Sales</option>
          <option value="Project Work">Project Work</option>
          <option value="UI Design">UI Design</option>
          <option value="Creative Design">Creative Design</option>
        </select>
        <select name="experience" value={newJob.experience} onChange={handleInputChange} required>
          <option value="" disabled>Select Experience</option>
          <option value="1-2 years">1-2 years</option>
          <option value="2-3 years">2-3 years</option>
          <option value="3-6 years">3-6 years</option>
          <option value="More than 6 years">More than 6 years</option>
          <option value="Freshers">Freshers</option>
        </select>
        <input
          type="text"
          name="salary"
          value={newJob.salary}
          onChange={handleInputChange}
          placeholder="Salary"
          required
        />
        <select name="type" value={newJob.type} onChange={handleInputChange} required>
          <option value="" disabled>Select Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Remote">Remote</option>
        </select>
        <button type="submit">Add Job</button>
      </form>
      <div className="posted-jobs">
        <h3>Posted Jobs</h3>
        {jobs.length === 0 ? (
          <p>No jobs posted yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Description</th>
                <th>Category</th>
                <th>Experience</th>
                <th>Salary</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index}>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.description}</td>
                  <td>{job.category}</td>
                  <td>{job.experience}</td>
                  <td>{job.salary}</td>
                  <td>{job.type}</td>
                  <td>
                    <button onClick={() => handleDeleteJob(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

AdminPortal.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default AdminPortal;
