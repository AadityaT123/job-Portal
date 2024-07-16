import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from '../../Components/Header/Header';
import Countup from '../../Components/Countup/Countup';
import LogoSlider from '../../Components/LogoSlider/LogoSlider';

const Home = ({ mode }) => {
  return (
    <div>
      <Header />
      <br/>
      <h1>We Help To Get The Best Job And Find Talent</h1>
      <h2>Tips to Get a Job</h2>
      <div className={`hom-${mode}`}>
      <p>&#128073; Network effectively: Attend industry events and connect with professionals in your field.</p>
      <p>&#128073; Customize your resume and cover letter for each application to highlight relevant skills and experience.</p>
      <p>&#128073; Prepare for interviews by researching the company and practicing common interview questions.</p>
      <p>👉 Leverage LinkedIn: Optimize your LinkedIn profile to showcase your skills, experience, and professional interests. Connect with recruiters and join relevant groups to expand your network.</p>
      </div>
      <br/>
      <br/>     
      <div className="countup-section">
      <Countup mode={mode} />
      </div>
<br/><br/>
<LogoSlider/>
    </div>
  );
}

Home.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Home;
