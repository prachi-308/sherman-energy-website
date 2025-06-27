import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] md:h-[60vh] overflow-hidden pt-16"
      >
        <div className="absolute inset-0 z-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Contact Hero"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-teal-900/60"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center md:px-8"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-6xl" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-teal-50 md:text-xl">
            Ready to transform your energy future? Let's discuss how Sherman Energy can help you achieve your sustainability goals.
          </p>
        </motion.div>
      </section>

      {/* Contact Information Section */}
      <motion.section
        ref={contactRef}
        className="px-4 py-12 md:px-8 bg-blue-50"
        initial={{ opacity: 0, y: 50 }}
        animate={isContactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800 md:text-4xl">Contact Information</h2>
          <div className="w-20 mx-auto mb-8 border-b-2 border-teal-600"></div>
          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-4">
            <motion.div
              className="p-4 overflow-hidden bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">Visit Us</h3>
              <p className="mt-2 text-center text-gray-600 break-words">13/9 Padam Singh Chowk, Ajmal Khan Road<br />Karol Bagh, New Delhi-110005</p>
            </motion.div>
            <motion.div
              className="p-4 overflow-hidden bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">Call Us</h3>
              <p className="mt-2 text-center text-gray-600 break-words">01142131317<br />9810189839<br /></p>
            </motion.div>
            <motion.div
              className="p-4 overflow-hidden bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">Email Us</h3>
              <p className="mt-2 text-center text-gray-600 break-words">info@shermanenergyltd.com</p>
            </motion.div>
            <motion.div
              className="p-4 overflow-hidden bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-full">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">Business Hours</h3>
              <p className="mt-2 text-center text-gray-600 break-words">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Form and Services Section */}
      <section className="px-4 py-12 md:px-8">
        <div className="container grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isContactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-2 mt-1 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full p-2 mt-1 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full p-2 mt-1 border rounded"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full p-2 mt-1 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject"
                    className="w-full p-2 mt-1 border rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full h-32 p-2 mt-1 border rounded"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#2ecc71" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 text-white bg-green-600 rounded hover:bg-green-700"
              >
                Send Message <span className="ml-2">➤</span>
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isContactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Our Services</h2>
            <div className="p-4 rounded-lg bg-green-50">
              <h3 className="text-lg font-semibold text-green-600">What We Offer</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>Solar Panel Installation</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>EPC Services</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>Maintenance & Support</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>Re-engineering Solutions</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>Turnkey Projects</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>Energy Consulting</li>
              </ul>
            </div>
            <div className="p-4 mt-4 rounded-lg bg-green-50">
              <h3 className="text-lg font-semibold text-green-600">Why Choose Sherman Energy?</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>8+ years of experience in renewable energy</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>ISO 9001:2015 certified quality management</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>25-year warranty on solar panels</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>24/7 technical support and maintenance</li>
                <li className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>End-to-end project implementation</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submission Confirmation Box */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              className="p-6 bg-white rounded-lg shadow-lg"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p className="text-lg font-semibold text-gray-800">Thank you for your message!</p>
              <p className="mt-2 text-gray-600">We will get back to you soon.</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="px-4 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Home Link */}
      <motion.section
        className="py-8 text-center bg-gradient-to-br from-teal-600 to-blue-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <Link
            to="/"
            className="px-6 py-3 text-teal-600 bg-white rounded hover:bg-gray-100"
          >
            Go to Home Page
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;