import React from 'react';
import PropTypes from 'prop-types';
import './Job.css';

const Job = ({ title, company, description, category, mode }) => {
  const handleApply = () => {
    // Logic for applying to the job goes here
    console.log(`Applying to ${title} at ${company}`);
  };

  return (
    <div className={`job-card-${mode}`}>
      <div className={`theme-${mode}`}>
        <h4 className="job-title">{title}</h4>
        <p className="job-company"><strong>Company:</strong> {company}</p>
        <p className="job-description">{description}</p>
        <p className="job-category"><strong>Category:</strong> {category}</p>
        <hr/>
        <div className="apply-button-container">
          <button className={`button-${mode}`} onClick={handleApply}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Job;
