import { useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/AssistSection.css';

const ContactSection = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="contact-section section-container">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let's Create Something Amazing
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="contact-subtitle"
      >
        Ready to bring your vision to life? I'd love to hear about your project.
      </motion.p>
      <motion.form
        ref={formRef}
        className="contact-form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        action="https://formspree.io/f/mldnkork"
        method="POST"
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <div className="contact-row">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            aria-label="Your Name" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            aria-label="Your Email" 
          />
        </div>
        <textarea 
          name="message" 
          placeholder="Tell me about your project..." 
          required 
          aria-label="Project Details" 
          rows={5} 
        />
        <motion.button
          type="submit"
          className="contact-send-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message <span role="img" aria-label="send">🚀</span>
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactSection;