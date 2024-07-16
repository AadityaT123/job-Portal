import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slide_bar from '../../Components/Slide-bar/Slide_bar';
import Job from '../../Components/Job/Job';
import Pagination from '../../Components/Pagination/Pagination'; 

import './jobs.css';
import { initialJobsData } from '../../Pages/AdminPortal/AdminPortal';

const jobData = initialJobsData


function Jobs({ mode }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; 

  const handleCategoryChange = (category, type) => {
    if (type === 'category') {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((cat) => cat !== category)
          : [...prev, category]
      );
    } else if (type === 'experience') {
      setSelectedExperience((prev) =>
        prev.includes(category)
          ? prev.filter((exp) => exp !== category)
          : [...prev, category]
      );
    } else if (type === 'salary') {
      setSelectedSalary((prev) =>
        prev.includes(category)
          ? prev.filter((sal) => sal !== category)
          : [...prev, category]
      );
    } else if (type === 'type') {
      setSelectedType((prev) =>
        prev.includes(category)
          ? prev.filter((typ) => typ !== category)
          : [...prev, category]
      );
    } else if (type === 'company') {
      setSelectedCompanies((prev) =>
        prev.includes(category)
          ? prev.filter((comp) => comp !== category)
          : [...prev, category]
      );
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredJobs = jobData.filter((job) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(job.experience);
    const matchesSalary = selectedSalary.length === 0 || selectedSalary.includes(job.salary);
    const matchesType = selectedType.length === 0 || selectedType.includes(job.type);
    const matchesCompany = selectedCompanies.length === 0 || selectedCompanies.includes(job.company);
    const matchesSearchTerm = searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesExperience && matchesSalary && matchesType && matchesCompany && matchesSearchTerm;
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="main" style={{ marginTop: 0, background: 'transparent' }}>
        <Slide_bar mode={mode} onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
        <div className="body-text">
          {currentJobs.length === 0 && <p>No jobs found</p>}
          {currentJobs.map((job, index) => (
            <Job
              key={index}
              title={job.title}
              company={job.company}
              description={job.description}
              category={job.category}
              mode={mode} 
              className="job-card" 
            />
          ))}
        </div>
      </div>
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={filteredJobs.length}
        paginate={paginate}
        currentPage={currentPage} 
      />
    </>
  );
}

Jobs.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Jobs;
