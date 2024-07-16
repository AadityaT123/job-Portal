import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Contactform.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ mode }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "fc8f702f-f785-47f1-9516-fa5ec15b1069");
    formData.append("redirect", "https://your-redirect-url.com");
    formData.append("email_to", "aadityatrivedi31245@gmail.com");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await res.json();
      if (data.success) {
        console.log("Success", data);
        toast.success("Your response submitted successfully!");
        event.target.reset(); // Optionally reset the form fields
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setSubmitError('Failed to submit the form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`contact-form-container ${mode}`}>
      <h2 className={`contact-form-title ${mode}`}>Contact Us</h2>
      <form onSubmit={onSubmit} method="POST" className="contact-form">
        <div className="formbold-input-flex">
          <div>
            <label htmlFor="firstname" className={`formbold-form-label ${mode}`}>First name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              className={`formbold-form-input ${mode}`}
            />
          </div>
          <div>
            <label htmlFor="lastname" className={`formbold-form-label ${mode}`}>Last name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              className={`formbold-form-input ${mode}`}
            />
          </div>
        </div>

        <div className="formbold-input-flex">
          <div>
            <label htmlFor="email" className={`formbold-form-label ${mode}`}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example123@gmail.com"
              className={`formbold-form-input ${mode}`}
            />
          </div>
          <div>
            <label htmlFor="phone" className={`formbold-form-label ${mode}`}>Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="0000011111"
              className={`formbold-form-input ${mode}`}
            />
          </div>
        </div>

        <div className="formbold-input-radio-wrapper">
          <label className={`formbold-form-label ${mode}`}>What are you looking for?</label>
          <div className="formbold-radio-flex">
            {["Web Design", "Graphics Design", "Logo Design", "Others"].map((job, index) => (
              <div key={index} className="formbold-radio-group">
                <label className={`formbold-radio-label ${mode}`}>
                  <input 
                    className="formbold-input-radio" 
                    type="radio" 
                    name="jobtitle" 
                    value={job} 
                  />
                  {job}
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className={`formbold-form-label ${mode}`}>Message</label>
          <textarea
            rows="6"
            name="message"
            id="message"
            placeholder="Type your message"
            className={`formbold-form-input ${mode}`}
          ></textarea>
        </div>

        {submitError && (
          <div className="form-error">
            <p className={`form-error-message ${mode}`}>{submitError}</p>
          </div>
        )}

        <button type="submit" className="formbold-btn" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

ContactForm.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default ContactForm;
