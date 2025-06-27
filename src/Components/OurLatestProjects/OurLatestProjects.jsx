import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OurLatestProjects = () => {
  const projects = [
    { title: "100 kW Solar Grid Tied System", desc: "Location: Delhi", image: "/src/assets/PROJECT1.jpg" },
    { title: "1 MW Solar Grid Tied System", desc: "Location: Panipat, Haryana", image: "/src/assets/PROJECT2.jpg" },
    { title: "250 kW Solar Grid Tied System", desc: "Location: Haryana", image: "/src/assets/PROJECT3.jpg" },
    { title: "350 kW Solar Grid Tied System", desc: "Location: Haryana", image: "/src/assets/PROJECT4.jpg" },
    { title: "100 kW Solar Grid Tied System", desc: "Location: Delhi", image: "/src/assets/PROJECT5.jpg" },
    { title: "100 kW Solar Grid Tied System", desc: "Location: Delhi", image: "/src/assets/PROJECT6.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjects = 1; // One project visible at a time
  const slideInterval = 5000; // Auto-slide every 5 seconds

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container max-w-full px-4 mx-auto sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex flex-col items-center justify-between mb-6 sm:flex-row">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold text-green-800 sm:text-3xl md:text-4xl">Our Latest Projects</h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">The company has a track record that speaks for itself with smart customized service solutions.</p>
          </div>
          <div className="flex space-x-2">
            <motion.button
              onClick={prevSlide}
              className="flex items-center justify-center w-8 h-8 text-gray-800 transition-colors bg-gray-200 rounded-full sm:w-10 sm:h-10 hover:bg-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="flex items-center justify-center w-8 h-8 text-gray-800 transition-colors bg-gray-200 rounded-full sm:w-10 sm:h-10 hover:bg-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </motion.button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full px-2 sm:px-3"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96" 
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="mb-1 text-base font-semibold text-gray-800 sm:text-lg md:text-xl">{project.title}</h3>
                    <p className="text-sm text-gray-600 sm:text-base">{project.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center mt-4 space-x-2 sm:mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? 'bg-green-600' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLatestProjects;