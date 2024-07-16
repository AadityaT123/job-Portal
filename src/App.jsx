import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbars/Navbar';
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AdminPortal from "./Pages/AdminPortal/AdminPortal";
import Footer from './Components/Footer/Footer';
import Loginpopup from './Components/Loginpopup/Loginpopup';

const App = () => {
  const [mode, setMode] = useState('light');
  const [isJobsActive, setIsJobsActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsJobsActive(location.pathname === '/jobs');
  }, [location]);

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#2b2f32';
      document.body.style.color = 'white';
    }
  };

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <Loginpopup setShowLogin={setShowLogin} mode={mode} />}
      <div className={`app ${isJobsActive ? 'jobs-active' : ''}`}>
        <Navbar mode={mode} togglemode={togglemode} setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home mode={mode} />} />
          <Route path='/about' element={<About mode={mode} />} />
          <Route path='/jobs' element={<Jobs mode={mode} />} />
          <Route path='/contact' element={<Contact mode={mode} />} />
          <Route path='/admin' element={<AdminPortal mode={mode} />} />
        </Routes>
      </div>
      <Footer mode={mode} />
    </>
  );
};

export default App;
