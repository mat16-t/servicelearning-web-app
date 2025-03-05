// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="slide-up"
    >
      <h2>Contact Us</h2>
      <p>This page provides contact information.</p>
    </motion.div>
  );
};

export default Contact;
