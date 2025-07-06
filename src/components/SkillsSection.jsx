import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skillssection.css';

const skillsGrid = [
  {
    title: 'Programming Languages',
    icons: [
      { icon: 
        <i class="devicon-html5-plain-wordmark colored"></i>
      , label: 'HTML5' },
      { icon: <i className="devicon-css3-plain-wordmark colored" />, label: 'CSS3' },
      { icon: <i className="devicon-javascript-plain colored" />, label: 'JavaScript' },
      { icon: <i className="devicon-python-plain-wordmark colored" />, label: 'Python' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icons: [
      { icon: <i className="devicon-react-original-wordmark colored" />, label: 'React' },
      { icon: <i className="devicon-bootstrap-plain-wordmark colored" />, label: 'Bootstrap' },
      { icon: <i className="devicon-tailwindcss-plain-wordmark colored" />, label: 'Tailwind CSS' },
      { icon: 
        <i class="devicon-nextjs-original-wordmark colored"></i>
      , label: 'Next.js' },
    ]
  },
  {
    title: 'Databases & Cloud',
    icons: [
      { icon: <i className="devicon-firebase-plain colored" />, label: 'Firebase' },
      { icon: 
        <i class="devicon-vercel-original-wordmark colored" color='white'></i>
      , label: 'Vercel' },
    ]
  },
  {
    title: 'Development Tools',
    icons: [
      { icon: <i className="devicon-git-plain colored" />, label: 'Git' },
      { icon: <i className="devicon-github-original colored" />, label: 'GitHub' },
      { icon: <i className="devicon-vscode-plain colored" />, label: 'VSCode' },
    ]
  },
  {
    title: 'Design Tools',
    icons: [
      { icon: <i className="devicon-figma-plain colored" />, label: 'Figma' },
      { icon: 
        
        <i class="devicon-framermotion-original-wordmark colored"></i>
      , label: 'Framer' },

    ]
  },
  {
    title: 'Soft Skills',
    icons: [
      { icon: <span role="img" aria-label="Teamwork">🤝</span>, label: 'Teamwork' },
      { icon: <span role="img" aria-label="Communication">💬</span>, label: 'Communication' },
      { icon: <span role="img" aria-label="Problem Solving">🧠</span>, label: 'Problem Solving' },
    ]
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.7,
    },
  },
};

const SkillsSection = () => (
  <section className="skills-section section-container">
    <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="assist-title">
      Skills & Expertise
    </motion.h2>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="assist-subtitle">
      A diverse toolkit for creating exceptional digital experiences
    </motion.p>
    <motion.div
      className="skills-grid"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skillsGrid.map((category) => (
        <motion.div
          className="skills-grid-card"
          key={category.title}
          variants={cardVariants}
        >
          <h3 className="skills-grid-title">{category.title}</h3>
          <div className="skills-grid-icons">
            {category.icons.map((item) => (
              <div className="skills-grid-icon" key={item.label} title={item.label}>
                {item.icon}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
)

export default SkillsSection;