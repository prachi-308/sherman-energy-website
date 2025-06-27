import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AboveFooterSection = () => {
  return (
    <section className="relative py-20 text-white bg-gradient-to-br from-teal-500 to-blue-600">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1500&h=400&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.h1
          className="mb-6 text-4xl font-bold md:text-5xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Let's Make the Planet Cleaner
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto mb-8 text-lg md:text-xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join us in creating a sustainable future with clean, renewable energy solutions that benefit both your business and the environment.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="inline-block px-6 py-3 font-semibold text-teal-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboveFooterSection;