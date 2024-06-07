// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="../../assets/images/klogo.png" alt="KujaLink" className="logo" />

      </div>
      <div className="navbar-links">
        <Link to='about'>About</Link>
        <Link to='events'>Events</Link>
        <Link to='video-gallery'>Video Gallery</Link>
        <Link to='org-search'>Org Search</Link>
        <Link to='people'>People</Link>
      </div>
      <div className="navbar-actions">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
