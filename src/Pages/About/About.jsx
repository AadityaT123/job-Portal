import React from 'react';
import './About.css';
import PropTypes from 'prop-types';
import AppDownload from '../../Components/AppDownload/AppDownload';
import TextWrite from '../../Components/TextWrite/TextWrite';
import AboutContex from '../../Components/AboutContex/AboutContex';
import TeamMembers from '../../Components/TeamMember/TeamMember';

function About({ mode }) {
  return (
    <div>
    <br/><br/><br/>
      <TextWrite mode={mode} />
      <br/>
      <AboutContex mode={mode}/>
      <br/>
      <TeamMembers mode={mode}/>
      <br/>
      <AppDownload mode={mode} />
      <br/>
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default About;
