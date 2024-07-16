import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ jobsPerPage, totalJobs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`pagination-button ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  jobsPerPage: PropTypes.number.isRequired,
  totalJobs: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
