import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AssociatesPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const partnersRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const isPartnersInView = useInView(partnersRef, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-gray-100 to-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] overflow-hidden pt-16 bg-teal-700"
      >
        <div className="absolute inset-0 z-10 bg-teal-700/60"></div>
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            filter: "brightness(50%)",
          }}
        ></div>
        <motion.div
          className="relative z-20 flex items-center justify-center h-full px-4 text-center md:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl">
            <motion.h1
              className="mb-6 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Valued Associates
            </motion.h1>
            <motion.p
              className="max-w-3xl mx-auto mb-8 text-base text-teal-100 md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sherman Energy Limited collaborates with leading industry partners to deliver innovative and sustainable energy solutions worldwide.
            </motion.p>
            <motion.button
              className="px-6 py-2 text-sm font-semibold text-white transition-all duration-300 bg-teal-500 rounded-full md:px-8 md:py-3 hover:bg-teal-600 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Connect with Us
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section
        ref={contentRef}
        className="px-4 py-12 md:px-8"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
            <motion.div
              className="mb-6 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isContentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center justify-center w-12 h-12 mb-4 text-white bg-teal-600 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </span>
              <motion.h2
                className="text-2xl font-bold text-teal-900"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our Partners in Success
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                At Sherman Energy Limited, we partner with a network of trusted associates, including technology providers, equipment manufacturers, and industry experts, to enhance our service offerings and ensure top-tier renewable energy solutions.
              </motion.p>
              <motion.ul
                className="mt-4 space-y-2 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-teal-600">✔</span> Collaboration with global technology leaders</li>
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-teal-600">✔</span> Partnerships with certified manufacturers</li>
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-teal-600">✔</span> Joint ventures with industry specialists</li>
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-teal-600">✔</span> Support from local and international experts</li>
              </motion.ul>
            </motion.div>
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              animate={isContentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Associates Collaboration"
                className="transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Highlight Section */}
      <section
        ref={partnersRef}
        className="py-12 bg-gray-200"
      >
        <div className="container px-4 mx-auto md:px-8 max-w-7xl">
          <motion.h2
            className="mb-8 text-3xl font-bold text-center text-teal-800"
            initial={{ opacity: 0, y: 50 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Featured Partners
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={isPartnersInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.div
              className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow hover:shadow-xl hover:bg-teal-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-teal-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-teal-900">Tech Innovate</h3>
              <p className="mt-2 text-gray-700">Leading provider of solar technology solutions.</p>
            </motion.div>
            <motion.div
              className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow hover:shadow-xl hover:bg-teal-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-teal-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-teal-900">Green Power Co.</h3>
              <p className="mt-2 text-gray-700">Specialists in renewable energy equipment.</p>
            </motion.div>
            <motion.div
              className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow hover:shadow-xl hover:bg-teal-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-teal-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-teal-900">Eco Solutions Inc.</h3>
              <p className="mt-2 text-gray-700">Experts in sustainable project management.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AssociatesPage;