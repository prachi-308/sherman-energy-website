import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
              <a href="https://facebook.com/shermanenergy" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/shermanenergy" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/shermanenergy" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com/company/shermanenergy" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white"><i className="fab fa-linkedin-in"></i></a>
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
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-white">Services</Link></li>
              <li><Link to="/projects" className="transition-colors hover:text-white">Projects</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-white">Contact</Link></li>
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
              <li><Link to="/services/epc" className="transition-colors hover:text-white">Engineering, Procurement, Construction</Link></li>
              <li><Link to="/services/omm" className="transition-colors hover:text-white">Operation and Maintenance</Link></li>
              <li><Link to="/services/re-engineering" className="transition-colors hover:text-white">Re-engineering and Redevelopment</Link></li>
              <li><Link to="/services/turnkey" className="transition-colors hover:text-white">Turnkey</Link></li>
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
            <Link to="/privacy" className="text-sm transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm transition-colors hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="text-sm transition-colors hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
