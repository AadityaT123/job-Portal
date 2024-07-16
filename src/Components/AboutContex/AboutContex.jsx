import React from 'react';
import PropTypes from 'prop-types';
import './AboutContex.css';

const AboutContex = ({ mode }) => {
  return (
    <div>
      <div className={`about-us-container ${mode}`}>
        <h2 className={`about-us-title ${mode}`}>About Us</h2>
        <p className={`about-us-description ${mode}`}>
          Welcome to our job portal! We are a dedicated team of professionals passionate about connecting talented individuals with great job opportunities. Our mission is to create a seamless and user-friendly platform where job seekers can find their dream jobs, and employers can discover top talent to drive their success. We are committed to providing you with the best experience possible through innovative features, quality service, and a focus on your needs. Thank you for being a part of our community and letting us help you achieve your career goals!
        </p>
        <p className={`about-us-vision ${mode}`}>
          <strong>Our Vision:</strong> To be the leading job portal in the industry by continuously improving our platform, expanding our network, and fostering a positive and inclusive environment for both job seekers and employers.
        </p>
      </div>
    </div>
  );
}

AboutContex.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default AboutContex;
