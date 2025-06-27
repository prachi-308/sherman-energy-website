import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center h-screen text-center bg-gray-700 bg-opacity-80"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="mb-4 text-5xl font-bold text-white md:text-7xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Sustainable Energy <span className="text-teal-300">Solutions</span>
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto mb-6 text-lg font-normal text-gray-200 md:text-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Sherman Energy Limited pioneers solar innovations for a cleaner planet, serving industries and homes with cutting-edge renewable energy solutions.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
      >
        <Link
          to="/services"
          className="flex items-center px-6 py-3 space-x-2 font-medium text-white transition-colors bg-teal-500 rounded-md hover:bg-teal-600"
        >
          <span>Discover Services</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
        alt="Background"
        loading="lazy"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />
    </motion.section>
  );
};

export default Hero;