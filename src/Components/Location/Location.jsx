import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Location.css';
import PropTypes from 'prop-types';

const Location = ({ mode }) => {
  return (
    <>
      <h2 className={`location-title ${mode}`}>Our Office</h2>
      <div className={`location-container ${mode}`}>
        <div className="map-container">
          <iframe
            title='Location'
            width='100%'
            height='450'
            loading='lazy'
            allowFullScreen
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.845245951631!2d75.80940951534475!3d22.71832778510437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397efd99a11371a5%3A0x34b9dbfac5b22047!2sAirport%20Road%2C%20Indore%2C%20Madhya%20Pradesh%20452003!5e0!3m2!1sen!2sin!4v1626303629901!5m2!1sen!2sin'
          ></iframe>
        </div>
        <div className="contact-details">
          <div className="detail-item">
            <FaMapMarkerAlt className="icon" />
            <p>Airport Road, Indore, Madhya Pradesh, India</p>
          </div>
          <div className="detail-item">
            <FaPhoneAlt className="icon" />
            <p>9340458559</p>
          </div>
          <div className="detail-item">
            <FaEnvelope className="icon" />
            <p>aadityatrivedi3124@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

Location.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Location;
