import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  return (
    <footer className="py-12 text-gray-300 bg-gray-900">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 mb-10 md:grid-cols-4">
          {/* Company Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-4 md:justify-start">
              <span className="mr-2 text-2xl text-teal-400">S</span>
              <h3 className="text-xl font-semibold text-white">Sherman Energy Limited</h3>
            </div>
            <p className="mb-4 text-sm">
              Pioneering sustainable energy solutions for a cleaner, greener future. Your trusted partner in solar innovation.
            </p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <a href="#" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="#about" className="transition-colors hover:text-white">About Us</a></li>
              <li><a href="#services" className="transition-colors hover:text-white">Services</a></li>
              <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
              <li><a href="#blog" className="transition-colors hover:text-white">Blog</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#epc" className="transition-colors hover:text-white">Engineering, Procurement, Construction</a></li>
              <li><a href="#oandm" className="transition-colors hover:text-white">Operation and Maintenance</a></li>
              <li><a href="#reeng" className="transition-colors hover:text-white">Re-engineering and Redevelopment</a></li>
              <li><a href="#turnkey" className="transition-colors hover:text-white">Turnkey</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">Contact Info</h4>
            <p className="text-sm">13/9 Padam Singh Chowk, Ajmal Khan Road, Karol Bagh, New Delhi-110005</p>
            <p className="flex items-center justify-center mt-2 text-sm md:justify-end"><i className="mr-2 fas fa-phone"></i> 01142131317 / 9810189839</p>
            <p className="flex items-center justify-center mt-1 text-sm md:justify-end"><i className="mr-2 fas fa-envelope"></i> <a href="mailto:info@shermanenergyltd.com" className="hover:text-white">info@shermanenergyltd.com</a></p>
          </motion.div>
        </div>
        <div className="pt-6 text-center border-t border-gray-700">
          <p className="mb-2 text-sm">© 2025 Sherman Energy Limited. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#privacy" className="text-sm transition-colors hover:text-white">Privacy Policy</a>
            <a href="#terms" className="text-sm transition-colors hover:text-white">Terms of Service</a>
            <a href="#cookies" className="text-sm transition-colors hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;