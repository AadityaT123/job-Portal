import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Unlock your dream career with our tailored job matches and effortless application process.</h2>
        <p>Discover opportunities that match your skills and aspirations with our personalized job recommendations. Start your career journey with an easy and efficient application process.</p>
        <Link to="/jobs">
          <button className="custom-btn">Get a Job</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
