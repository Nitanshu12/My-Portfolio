import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enable smooth scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Nitanshu</a>
        </div>
        <ul className="navbar-links">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? 'active' : ''}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="navbar-cta">Hire Me</a>
      </nav>
    </header>
  );
};

export default Navbar;
