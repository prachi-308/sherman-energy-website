import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaTh, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ProjectsPage = () => {
  const [isGridView, setIsGridView] = useState(true);
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.2 });

  // Projects data with online images
  const projects = [
    { id: 1, title: "250 KW Solar grid tied system", desc: "Haryana, 2023 - Large-scale commercial solar installation with advanced grid integration technology.", img: "../assets/PROJECT1.jpg", tags: ["Grid-tied system", "High efficiency panels", "Remote monitoring", "25-year warranty"] },
    { id: 2, title: "250 KW solar grid tied system", desc: "Haryana, 2023 - Industrial solar installation for manufacturing facility with smart energy management.", img: "../assets/PROJECT2.jpg", tags: ["Grid-tied system", "ROI optimization", "Energy storage", "Load balancing"] },
    { id: 3, title: "1 MW Solar grid tied system", desc: "Panipat, Haryana, 2022 - Mega-scale utility solar installation contributing to grid stability and renewable energy goals.", img: "../assets/PROJECT3.jpg", tags: ["Utility scale", "Grid stability", "CAD/A system", "Environmental compliance"] },
    { id: 4, title: "100 KW Solar grid tied system", desc: "Delhi, 2023 - Urban commercial solar installation with space-optimized design for maximum efficiency.", img: "../assets/PROJECT4.jpg", tags: ["Space-optimized", "Smart inverters", "Urban installation", "Net metering"] },
    { id: 5, title: "100 KW Solar grid tied system", desc: "Delhi, 2022 - Institutional solar project promoting sustainable energy awareness.", img: "../assets/PROJECT5.jpg", tags: ["Educational focus", "Research integration", "Student learning", "Community benefit"] },
    { id: 6, title: "100 KW Solar grid tied system", desc: "Delhi, 2023 - Large residential complex solar installation with community energy sharing.", img: "../assets/PROJECT6.jpg", tags: ["Residential complex", "Community sharing", "Reduced electricity bills", "Green living"] },
  ];

  // Carousel images
  const carouselImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Hero Section with Swiper Carousel */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden pt-16">
        <div className="absolute inset-0 z-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              renderBullet: (_, className) => `<span class="${className} inline-block w-3 h-3 bg-teal-300 hover:bg-teal-500 rounded-full transition-colors cursor-pointer"></span>`,
            }}
            className="w-full h-full"
          >
            {carouselImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-teal-900/60"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative z-20 flex items-center justify-center h-full px-4 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-7xl"
          >
            <h1 className="mb-6 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Our Solar Projects
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-base md:text-xl lg:text-2xl text-teal-50">
              Explore our transformative solar installations driving sustainability across India, from residential to utility-scale projects.
            </p>
            <motion.button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.1, backgroundColor: "#34D399", boxShadow: "0 0 15px rgba(52, 211, 153, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative z-20 px-6 py-2 text-sm font-semibold text-white rounded-full shadow-lg md:px-8 md:py-3 bg-emerald-600 hover:bg-emerald-700 md:text-base"
            >
              Explore Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="px-4 py-12 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        ref={projectsRef}
      >
        <div className="container px-4 mx-auto md:px-8">
          <motion.div
            className="flex items-center justify-between mb-8 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isProjectsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold md:text-4xl text-emerald-800">Our Projects</h2>
            <div className="space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsGridView(true)}
                className={`p-2 rounded-full ${isGridView ? 'bg-emerald-600 text-white' : 'bg-gray-200'} hover:bg-emerald-700 transition-colors`}
              >
                <FaTh />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsGridView(false)}
                className={`p-2 rounded-full ${!isGridView ? 'bg-emerald-600 text-white' : 'bg-gray-200'} hover:bg-emerald-700 transition-colors`}
              >
                <FaList />
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {isGridView ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: project.id * 0.1 }}
                    className="relative w-full overflow-hidden bg-white rounded-lg shadow-md group"
                  >
                    <div className="relative">
                      <img src={project.img} alt={project.title} className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-teal-900/50 to-transparent group-hover:opacity-100"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-teal-800">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 text-xs text-green-600 bg-green-100 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#34D399", boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => alert(`View details for ${project.title}`)}
                        className="px-4 py-2 mt-4 text-white transition-colors rounded bg-emerald-600 hover:bg-emerald-700"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 20 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-md group"
                  >
                    <div className="relative">
                      <img src={project.img} alt={project.title} className="object-cover w-full h-64 transition-transform duration-300 rounded-t-lg group-hover:scale-110" />
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-teal-900/50 to-transparent group-hover:opacity-100"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-emerald-800">{project.title}</h3>
                      <p className="text-base text-gray-700">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 text-xs text-green-600 bg-green-100 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#34D399", boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => alert(`View details for ${project.title}`)}
                        className="px-6 py-2 mt-4 text-white transition-colors rounded-full bg-emerald-600 hover:bg-emerald-700"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        className="py-8 text-center text-white bg-gradient-to-br from-teal-600 to-blue-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg md:text-xl">Join our growing list of satisfied clients and get in touch to start your solar journey.</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Link to="/contact" className="px-6 py-3 text-teal-600 bg-white rounded hover:bg-gray-100">
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;