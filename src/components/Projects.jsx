import { motion } from 'framer-motion';
import '../styles/Projects.css';
import React from 'react';
import image from '../assets/image.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image4 from '../assets/image4.png'

const projects = [
    {
        title: 'AI-image-generator',
        description: 'A web-based AI image generator that transforms text prompts into high-quality visuals instantly.',
        image: image1,
        demoLink: 'https://ai-image-generator-seven-ivory.vercel.app/',
        codeLink: 'https://github.com/Nitanshu12/Ai-image-generator'
    },
    {
        title: 'Stride-footwear',
        description: 'An e-commerce footwear site with product listings and a dynamic cart built using React and Tailwind.',
        image: image2,
        demoLink: 'https://stride-footwear-xx3h.vercel.app/',
        codeLink: 'https://github.com/Nitanshu12/Stride-footwear'
    },
    {
        title: 'Reliant Renewables',
        description: 'A solar solutions platform for Reliant Renewables, featuring project showcases, all built using React',
        image: image4,
        demoLink: 'https://www.reliantrenewables.in/',
        codeLink: 'https://github.com/Nitanshu12/reliant-solar'
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
                        <div className='buttons'>
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-card-cta-btn">Demo</a>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-card-cta-btn">Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;