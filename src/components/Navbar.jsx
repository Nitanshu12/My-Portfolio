import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Nitanshu</a>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="navbar-cta">Hire Me</a>
      </nav>
    </header>
  );
};

export default Navbar;
