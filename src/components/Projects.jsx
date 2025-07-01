import { motion } from 'framer-motion';
import '../styles/Projects.css';
import React from 'react';

const Projects = () => {
    return (
        <section className="projects-section section-container">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="assist-title">
            Featured Projects
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="assist-subtitle">
            A collection of work that showcases my passion for beautiful, functional design
            </motion.p>
        </section>
    )
}

export default Projects;