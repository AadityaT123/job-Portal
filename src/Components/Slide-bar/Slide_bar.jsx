import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillBriefcaseFill, BsClockFill, BsBuilding, BsCurrencyRupee } from 'react-icons/bs';
import './Slide_bar.css';

function Slide_bar({ mode, onCategoryChange, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['Web Development', 'Software Development', 'Marketing/Sales', 'Project Work'];
  const experience = ['1-2 years', '2-3 years', '3-6 years', 'More than 6 years', 'Freshers'];
  const salary = ['10,000 - 50,000', '50,000 - 100,000', '1 Lakh - 2 Lakhs', 'Above 2 Lakhs'];
  const jobTypes = ['Full Time', 'Part Time', 'Freelancer', 'Remote'];
  const company = ['Google', 'MicroSoft', 'Meta', 'TCS', 'Accenture', 'Oracle', 'Adobe'];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={`sidebar ${mode}`}>
      <div className="sidebar-section">
        <h3>Search</h3>
        <input
          type="text"
          className={`form-control-${mode}`}
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search jobs..."
        />
      </div>
      <div className="sidebar-section">
        <h3>Job Type</h3>
        {jobTypes.map((type, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={type}
              id={type}
              onChange={() => onCategoryChange(type, 'type')}
            />
            <label className="form-check-label" htmlFor={type}>
              <span className="checkbox-icon"><BsFillBriefcaseFill /></span>
              {type}
            </label>
          </div>
        ))}
      </div>
      <div className="sidebar-section">
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={exp}
              id={exp}
              onChange={() => onCategoryChange(exp, 'experience')}
            />
            <label className="form-check-label" htmlFor={exp}>
              <span className="checkbox-icon"><BsClockFill /></span>
              {exp}
            </label>
          </div>
        ))}
      </div>
      <div className="sidebar-section">
        <h3>Salary</h3>
        {salary.map((sal, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={sal}
              id={sal}
              onChange={() => onCategoryChange(sal, 'salary')}
            />
            <label className="form-check-label" htmlFor={sal}>
              <span className="checkbox-icon"><BsCurrencyRupee /></span>
              {sal}
            </label>
          </div>
        ))}
      </div>
      <div className="sidebar-section">
        <h3>Job Domains</h3>
        {categories.map((category, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={category}
              id={category}
              onChange={() => onCategoryChange(category, 'category')}
            />
            <label className="form-check-label" htmlFor={category}>
              <span className="checkbox-icon"><BsBuilding /></span>
              {category}
            </label>
          </div>
        ))}
      </div>
      <div className="sidebar-section">
        <h3>Companies</h3>
        {company.map((comp, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={comp}
              id={comp}
              onChange={() => onCategoryChange(comp, 'company')}
            />
            <label className="form-check-label" htmlFor={comp}>
              <span className="checkbox-icon"><BsBuilding /></span>
              {comp}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

Slide_bar.propTypes = {
  mode: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Slide_bar;
