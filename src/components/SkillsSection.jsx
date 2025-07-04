import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skillssection.css';
import { FaPaintBrush, FaCode } from 'react-icons/fa';

const skills = [
    {
        name: 'UI/UX Design',
        description: 'Creating intuitive, visually appealing interfaces that enhance user engagement',
        icon: <FaPaintBrush size={36} />
    },
    {
        name: 'Figma Design',
        description: 'Design and Prototyping',
        icon: <FaPaintBrush size={36} />
    },
    {
        name: 'Web Development',
        description: 'Building responsive, user-friendly websites using modern technologies',
        icon: <FaCode size={36} />
    },
]
const skillVariants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.3,
            duration: 0.8
        }
    }
}

            const SkillsSection = () => (
                <section className="skills-section section-container">
                    <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="assist-title">
                        Skills & Expertise
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="assist-subtitle">
                        A diverse toolkit for creating exceptional digital experiences
                    </motion.p>
                    <div className="skills-cards">
                        {skills.map((skill, i) => (
                            <motion.div
                                className="skills-card"
                                key={skill.title}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={skillVariants}
                                transition={{ delay: 0.1 * i }}
                            >
                                <div className={`skills-card-icon ${skill.gradient}`}>{skill.icon}</div>
                                <h3>{skill.title}</h3>
                                <p>{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            )

export default SkillsSection;