import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import { assets } from '../../assets/assets'; 
import { FaPhone, FaEnvelope } from 'react-icons/fa'; 

const TeamMembers = ({ mode }) => {
  const team = [
    { name: 'Aaditya Trivedi', role: 'Developer', contact: 'Aadityatrivedi3124@gmail.com', mobile: '123-456-7890', image: assets.Profile1 },
    { name: 'Aaditya Trivedi', role: 'Developer', contact: 'Aadityatrivedi3124@gmail.com', mobile: '987-654-3210', image: assets.Profile2 },
    { name: 'Aaditya Trivedi', role: 'Developer', contact: 'Aadityatrivedi3124@gmail.com', mobile: '123-456-7890', image: assets.Profile1 },
    { name: 'Aaditya Trivedi', role: 'Developer', contact: 'Aadityatrivedi3124@gmail.com', mobile: '987-654-3210', image: assets.Profile2 },
  ];

  return (
    <div className={`team-members ${mode}`}>
      <h2 className={`team-members-title ${mode}`}>Meet Our Team</h2><br/><br/>
      <div className="team-grid">
        {team.map((member, index) => (
          <div className={`team-member-card ${mode}`} key={index}>
            <div className="card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p className={`role ${mode}`}>{member.role}</p>
              <p className={`contact-info ${mode}`}>
                <FaEnvelope className={`icon ${mode}`} /> {member.contact}
              </p>
              <p className={`contact-info ${mode}`}>
                <FaPhone className={`icon ${mode}`} /> {member.mobile}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TeamMembers.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default TeamMembers;
