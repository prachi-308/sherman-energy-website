import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ONMPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const whyChooseRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] overflow-hidden pt-16 bg-gradient-to-br from-blue-800 to-blue-600"
      >
        <div className="absolute inset-0 z-10 bg-blue-800/60"></div>
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
              Operations and Maintenance
            </motion.h1>
            <motion.p
              className="max-w-3xl mx-auto mb-8 text-base text-white md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sherman Energy Limited offers expert operations and maintenance services to ensure the longevity and efficiency of your energy projects. Trust us to keep your systems running smoothly.
            </motion.p>
            <motion.button
              className="px-6 py-2 text-sm font-semibold text-white transition-all duration-300 bg-blue-700 rounded-full md:px-8 md:py-3 hover:bg-blue-800 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Get Quote
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
              <span className="inline-flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-800 rounded-full">
                <i className="text-white fas fa-wrench"></i>
              </span>
              <motion.h2
                className="text-2xl font-bold text-blue-800"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Comprehensive Operations and Maintenance Services
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Sherman Energy Limited provides top-tier operations and maintenance services to optimize the performance of your solar and energy systems. Our services include routine inspections, preventive maintenance, and rapid response to ensure maximum uptime and efficiency.
              </motion.p>
              <motion.ul
                className="mt-4 space-y-2 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-green-500">✔</span> Routine inspections and monitoring</li>
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-green-500">✔</span> Preventive maintenance programs</li>
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-green-500">✔</span> Rapid repair and fault resolution</li>
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-green-500">✔</span> Performance optimization</li>
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-green-500">✔</span> 24/7 technical support</li>
                <li className="flex items-start"><span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-green-500">✔</span> Compliance with safety standards</li>
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
                alt="Solar Maintenance"
                className="transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyChooseRef}
        className="py-12 bg-gray-100"
      >
        <div className="container px-4 mx-auto md:px-8 max-w-7xl">
          <motion.h2
            className="mb-8 text-3xl font-bold text-center text-blue-800"
            initial={{ opacity: 0, y: 50 }}
            animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Why Choose Our Operations and Maintenance Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={isWhyChooseInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.div
              className="p-4 text-center transition-all duration-300 bg-white rounded-lg shadow hover:shadow-xl hover:bg-blue-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white transition-colors duration-300 bg-blue-800 rounded-full hover:bg-blue-700">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Proactive Maintenance</h3>
              <p className="mt-2 text-gray-600">Prevent issues before they arise with regular check-ups</p>
            </motion.div>
            <motion.div
              className="p-4 text-center transition-all duration-300 bg-white rounded-lg shadow hover:shadow-xl hover:bg-blue-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white transition-colors duration-300 bg-blue-800 rounded-full hover:bg-blue-700">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800">24/7 Support</h3>
              <p className="mt-2 text-gray-600">Round-the-clock assistance for your peace of mind</p>
            </motion.div>
            <motion.div
              className="p-4 text-center transition-all duration-300 bg-white rounded-lg shadow hover:shadow-xl hover:bg-blue-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white transition-colors duration-300 bg-blue-800 rounded-full hover:bg-blue-700">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Expert Technicians</h3>
              <p className="mt-2 text-gray-600">Skilled professionals dedicated to your systems</p>
            </motion.div>
            <motion.div
              className="p-4 text-center transition-all duration-300 bg-white rounded-lg shadow hover:shadow-xl hover:bg-blue-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white transition-colors duration-300 bg-blue-800 rounded-full hover:bg-blue-700">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Maximized Uptime</h3>
              <p className="mt-2 text-gray-600">Ensure continuous operation with our expertise</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ONMPage;