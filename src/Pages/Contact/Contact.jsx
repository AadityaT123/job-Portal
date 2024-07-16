import React from 'react'
import './Contact.css'
import ContactForm from '../../Components/Contactform/ContactForm'
import Location from '../../Components/Location/Location'
import PropTypes from 'prop-types';

function Contact({mode}) {
  return (
    <div className='contact-page'>
    <ContactForm mode={mode}/>
    <br/><br/>
    <Location mode={mode} />
    <br/>
      
    </div>
  )
}


Contact.propTypes = {
  mode: PropTypes.string.isRequired,
};


export default Contact
