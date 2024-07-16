import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css'; // Ensure this line is present
import { assets } from '../../assets/assets';

function Footer({ mode }) {
  return (
    <div className={`footer-${mode}`} id='footer'>
      <div className="Footer-content">
        <div className="footer-content-left">
          <img src={assets.file} alt="" className="footer-image" />
          <p className={`p-${mode}`}>This is a footer with code and</p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sample Resume</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@farejobs.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={`footer-copyright-${mode}`}>Copyright 2024 by Aaditya Tivedi. All rights reserved.</p>
    </div>
  );
}

Footer.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
};

export default Footer;
