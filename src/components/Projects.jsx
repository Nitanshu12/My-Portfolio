import { motion } from 'framer-motion';
import '../styles/Projects.css';
import React from 'react';
import image from '../assets/image.png'

const projects = [
    {
        title: 'Project 1',
        description: 'Description 1',
        image: image
    },
    {
        title: 'Project 2',
        description: 'Description 2',
        image: image
    },
    {
        title: 'Project 3',
        description: 'Description 3',
        image: image
    }
]

const Projects = () => {
    return (
        <section id="projects" className="projects-section section-container">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="assist-title">
            Featured Projects
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="assist-subtitle">
            A collection of work that showcases my passion for beautiful, functional design
            </motion.p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button className="project-card-cta-btn">View Project</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;