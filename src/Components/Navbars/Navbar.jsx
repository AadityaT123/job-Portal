import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ mode, togglemode, setShowLogin }) => {
  const location = useLocation();
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setNavbarScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <div className={`navbar ${navbarScrolled ? 'scrolled' : ''} navbar-${mode}`}>
      <div className="logo-container">
        <img src={assets.file} alt="Logo" className="logo-main" />
      </div>
      <h1 className={`mobile-menu-toggle mobile-menu-toggle-${mode}`} onClick={toggleMobileMenu}>
        ☰
      </h1>
      <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''} ${mode === 'dark' ? 'dark' : ''}`}>
        <NavLink exact to="/" className={isActive("/")} onClick={closeMobileMenu}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className={isActive("/about")} onClick={closeMobileMenu}>
          <li>About</li>
        </NavLink>
        <NavLink to="/jobs" className={isActive("/jobs")} onClick={closeMobileMenu}>
          <li>Jobs</li>
        </NavLink>
        <NavLink to="/contact" className={isActive("/contact")} onClick={closeMobileMenu}>
          <li>Contact Us</li>
        </NavLink>
        <li className="theme-toggle-mobile">
          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              onClick={togglemode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={mode === 'dark'}
              readOnly // to ensure the checkbox doesn't change state without user interaction
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {`Enable ${mode === 'light' ? 'dark' : 'light'} mode`}
            </label>
          </div>
        </li>
      </ul>
      <div className="navbar-right">
        <button
          className="navbar-button"
          onClick={() => {
            closeMobileMenu();
            setShowLogin(true);
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  togglemode: PropTypes.func.isRequired,
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
