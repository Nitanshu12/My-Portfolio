import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      let found = false;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            found = true;
            break;
          }
        }
      }
  
      // Special check for "Contact" at page bottom
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (Math.abs(scrollPosition - pageHeight) < 2) {
        current = 'contact';
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

  // Helper to scroll to section smoothly
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Close menu on navigation
  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    setActiveSection(sectionId);
    setTimeout(() => scrollToSection(sectionId), 0);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Nitanshu</a>
        </div>
        <button
          className="navbar-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <ul
          className={`navbar-links${menuOpen ? ' open' : ''}`}
          id="navbar-menu"
        >
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? 'active' : ''}
                aria-current={activeSection === section.id ? 'page' : undefined}
                onClick={() => handleNavClick(section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={`navbar-cta${menuOpen ? ' open' : ''}`} onClick={() => handleNavClick('contact')}>Download Resume</a>
      </nav>
    </header>
  );
};

export default Navbar;
