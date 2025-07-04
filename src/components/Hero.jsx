import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/logo.jpeg';
import { IoDiamond } from "react-icons/io5";

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
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Sarah" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero; 