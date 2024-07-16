import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Loginpopup.css';
import { assets } from '../../assets/assets';

const Loginpopup = ({ setShowLogin, mode }) => {
    const [currState, setCurrState] = useState('Sign Up');
    const [cv, setCv] = useState(null);
    const [cvName, setCvName] = useState('');

    const handleCvUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCv(file);
            setCvName(file.name);
        } else {
            setCv(null);
            setCvName('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (cv) {
            formData.append('cv', cv);
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Registration successful');
                setShowLogin(false);
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration');
        }
    };

    return (
        <div className={`login-popup login-popup-${mode}`}>
            <form onSubmit={handleSubmit} className={`login-popup-container-${mode}`}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt="Close"
                        className="login-popup-close-icon"
                    />
                </div>
                <div className={`login-popup-input login-popup-input-${mode}`}>
                    {currState === 'Sign Up' && (
                        <>
                            <input type="text" name="name" placeholder="Your name" required />
                            <div className={`upload-cv-section upload-cv-section-${mode}`}>
                                <label htmlFor="cv-upload" className="upload-cv-label">
                                    <div className="upload-cv-content">
                                        <div className="upload-cv-icon">📎</div>
                                        <div className="upload-cv-text">
                                            <p>Upload your CV</p>
                                            <small>Drag & drop your CV or click to browse</small>
                                        </div>
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleCvUpload}
                                    id="cv-upload"
                                    name="cv"
                                    className="upload-cv-input"
                                />
                                <p>{cvName || 'No CV uploaded'}</p>
                            </div>
                            <br />
                        </>
                    )}
                    <input type="email" name="email" placeholder="Your email" required />
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                <button type="submit">
                    {currState === 'Sign Up' ? 'Create account' : 'Login'}
                </button>
                <div className="login-popup-condition">
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === 'Login' ? (
                    <p>
                        Create a new account?{' '}
                        <span onClick={() => setCurrState('Sign Up')}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{' '}
                        <span onClick={() => setCurrState('Login')}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

Loginpopup.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default Loginpopup;
