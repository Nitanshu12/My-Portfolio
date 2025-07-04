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

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">NJ</a>
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
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`} id="navbar-menu">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? 'active' : ''}
                aria-current={activeSection === section.id ? 'page' : undefined}
                onClick={handleNavClick}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={`navbar-cta${menuOpen ? ' open' : ''}`} onClick={handleNavClick}>Hire Me</a>
      </nav>
    </header>
  );
};

export default Navbar;
