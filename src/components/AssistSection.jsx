import React from 'react';
import { FaCode, FaPaintBrush, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/AssistSection.css';


const cards = [
  {
    icon: <FaComments size={36} />, title: 'UX Research', desc: 'Unlock valuable user insights and feedback to make your product truly intuitive and effective. I help you validate ideas, identify pain points, and shape user-centered solutions for better results.',
    gradient: 'card-icon-gradient3'
  },
  {
    icon: <FaPaintBrush size={36} />, title: 'UI Design', desc: 'Turn your concepts into visually striking, on-brand interfaces that delight users at every step. From wireframes to high-fidelity mockups, I ensure your product looks polished and feels seamless.',
    gradient: 'card-icon-gradient2'
  },
  
  {
    icon: <FaCode size={36} />, title: 'Web Development', desc: 'Transform ideas into fast, responsive, and scalable websites that work beautifully on any device. I build secure, high-performance sites tailored to your business goals ready to launch and grow.',
    gradient: 'card-icon-gradient1'
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } }
};

const AssistSection = () => (
  <section className="assist-section section-container">
    <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="assist-title">
      How Can I Assist You?
    </motion.h2>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="assist-subtitle">
      Looking for a developer for your next project? Need a UI/UX designer?<br />I'm here to help bring your vision to life!
    </motion.p>
    <div className="assist-cards">
      {cards.map((card, i) => (
        <motion.div
          className="assist-card"
          key={card.title}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          transition={{ delay: 0.1 * i }}
        >
          <div className={`assist-card-icon ${card.gradient}`}>{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </motion.div>
      ))}
    </div>
    <motion.a
      href="#contact"
      className="assist-cta-btn"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      Let's Talk! <span className="arrow">→</span>
    </motion.a>
  </section>
);
export default AssistSection;
