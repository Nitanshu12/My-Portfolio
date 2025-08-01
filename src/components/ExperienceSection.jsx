import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/ExperienceSection.css';

const experiences = [
  {
    title: 'Computer-Science Degree',
    location: 'Delhi, India',
    institution: 'Newton School of Technology',
    description: `I have recently started my journey in computer engineering and am currently in my freshman year. I'm eager to learn, explore new technologies, and build a strong foundation in this field. Excited for the challenges and opportunities ahead!`,
    date: '2024 - Present',
  },
  {
    title: 'Internship',
    location: 'Sonipat, Haryana',
    institution: 'Rishihood University',
    description: `Completed a hands-on internship at Indic Summer School, contributing to program planning, execution, and on-ground coordination. Gained valuable experience in organizing events, collaborating with teams, and supporting successful student programs.`,
    date: 'March-June 2025',
  },
  {
    title: 'Internship',
    location: 'Pune, Maharashtra',
    institution: 'Reliant Renewables Pvt Ltd',
    description: `Recently began my journey in computer engineering and joined Reliant Renewables as a Web Developer & UI/UX Intern. I’m eager to learn, explore new technologies, and build a strong foundation in software development and design. Excited for the challenges and opportunities ahead!`,
    date: 'May-Aug 2025',
  },
  // Add more experiences here if needed
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dotY = useTransform(scrollYProgress, [0, 1], [0, 400]); // Adjust 400 for timeline height

  return (
    <section className="experience-section section-container" id="experience" ref={ref}>
      <h2 className="experience-title">My Experience</h2>
      <div className="timeline-container">
        <motion.div className="timeline-dot" style={{ y: dotY }} />
        <div className="timeline-line" />
        <div className="timeline-cards">
          {experiences.map((exp, idx) => (
            <div className="timeline-card" key={idx}>
              <h3>{exp.title}</h3>
              <div className="timeline-meta">
                <span>{exp.location}</span>
                <span>{exp.institution}</span>
              </div>
              <p className="timeline-desc">{exp.description}</p>
              <div className="timeline-date">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 