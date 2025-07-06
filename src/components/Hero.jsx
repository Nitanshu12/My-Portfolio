import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/logo.jpeg';
import { IoDiamond } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="available-badge">
          <IoDiamond />
          <span>Available for new projects</span>
        </div>
        <h1 className="hero-title">
          Hello, I'm <span className="highlight">Nitanshu Goyal</span>
        </h1>
        <p className="hero-subtitle">
        Web Developer | UI/UX Enthusiast | Societal Change-Maker | Passionate About Innovation | Volleyball Player
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Let's Work Together
          </a>
          <a href="#projects" className="btn btn-secondary">
            View My Work
          </a>
        </div>
        <div className="hero-social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Sarah" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero; 