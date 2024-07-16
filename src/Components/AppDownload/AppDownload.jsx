import React from 'react';
import PropTypes from 'prop-types';
import './AppDownload.css';
import { assets } from '../../assets/assets';

function AppDownload({ mode }) {
  return (
    <div className={`app-download ${mode}`} id='app-download'>
      <h2 className={`download-title ${mode}`}>Download</h2><br/>
      <p className={`download-text-${mode}`}>
        For a Better Experience, Download Fare Jobs App
      </p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt='Play Store'/>
        <img src={assets.app_store} alt='App Store'/>
      </div>
    </div>
  );
}

AppDownload.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default AppDownload;
