import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SegmentsPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const segmentsRef = useRef(null);
  const isSegmentsInView = useInView(segmentsRef, { once: true, amount: 0.2 });

  const carouselImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] overflow-hidden pt-16"
      >
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 flex items-center justify-center h-full px-4 text-center md:px-8"
        >
          <div className="max-w-7xl">
            <h1 className="mb-6 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Segments
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-base text-teal-50 md:text-xl lg:text-2xl">
              Comprehensive solar solutions across all sectors - from residential to industrial applications
            </p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#34D399", boxShadow: "0 0 15px rgba(52, 211, 153, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-2 text-sm font-semibold text-white rounded-full shadow-lg md:px-8 md:py-3 bg-emerald-600 hover:bg-emerald-700 md:text-base"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Segments Section */}
      <section
        ref={segmentsRef}
        id="segments"
        className="px-4 py-12 md:px-8"
      >
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isSegmentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 text-3xl font-bold text-center text-emerald-800 md:text-4xl"
          >
            Our Market Segments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isSegmentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 text-center text-gray-600"
          >
            Tailored solar energy solutions for every sector and application
          </motion.p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Residential */}
            <motion.div
              className="p-6 transition-shadow bg-white border border-pink-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start mb-4">
                <span className="p-5 mr-4 bg-pink-100 rounded-full">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-teal-800">Residential</h3>
                  <p className="mb-4 text-gray-600">Save on your electricity bills by an easy process of creating solar energy from your roof and reducing your carbon footprint.</p>
                  <ul className="mb-4 text-gray-600 list-disc list-inside">
                    <li>Roof top solar installations</li>
                    <li>Energy storage solutions</li>
                    <li>Net metering support</li>
                    <li>25-year warranty</li>
                  </ul>
                  <a href="#" className="inline-block px-4 py-2 text-white bg-pink-600 rounded hover:bg-pink-700">Learn More →</a>
                </div>
              </div>
            </motion.div>

            {/* Commercial Solutions */}
            <motion.div
              className="p-6 transition-shadow bg-white border border-blue-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start mb-4">
                <span className="p-5 mr-4 bg-blue-100 rounded-full">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-teal-800">Commercial Solutions</h3>
                  <p className="mb-4 text-gray-600">Make smart decisions and investments for your future and fulfill your corporate social responsibility.</p>
                  <ul className="mb-4 text-gray-600 list-disc list-inside">
                    <li>Large-scale installations</li>
                    <li>Energy management systems</li>
                    <li>ROI optimization</li>
                    <li>Compliance support</li>
                  </ul>
                  <a href="#" className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Learn More →</a>
                </div>
              </div>
            </motion.div>

            {/* Institutions */}
            <motion.div
              className="p-6 transition-shadow bg-white border border-green-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start mb-4">
                <span className="p-5 mr-4 bg-green-100 rounded-full">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V17a2 2 0 01-2 2z"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-teal-800">Institutions</h3>
                  <p className="mb-4 text-gray-600">Have a control on your costs and be energy independent and help change the way our world is powered.</p>
                  <ul className="mb-4 text-gray-600 list-disc list-inside">
                    <li>Educational campuses</li>
                    <li>Hospital power systems</li>
                    <li>Religious institutions</li>
                    <li>Government buildings</li>
                  </ul>
                  <a href="#" className="inline-block px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">Learn More →</a>
                </div>
              </div>
            </motion.div>

            {/* PSUs */}
            <motion.div
              className="p-6 transition-shadow bg-white border border-orange-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start mb-4">
                <span className="p-5 mr-4 bg-orange-100 rounded-full">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-teal-800">PSUs</h3>
                  <p className="mb-4 text-gray-600">Apply advanced technologies and create an impact while being sustainable.</p>
                  <ul className="mb-4 text-gray-600 list-disc list-inside">
                    <li>Public sector projects</li>
                    <li>Infrastructure development</li>
                    <li>Smart city solutions</li>
                    <li>Sustainable initiatives</li>
                  </ul>
                  <a href="#" className="inline-block px-4 py-2 text-white bg-orange-600 rounded hover:bg-orange-700">Learn More →</a>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              className="p-6 transition-shadow bg-white border border-purple-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start mb-4">
                <span className="p-5 mr-4 bg-purple-100 rounded-full">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 114 0 2 2 0 01-4 0z"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-teal-800">Social</h3>
                  <p className="mb-4 text-gray-600">Save on your electricity bills and forget worrying about power grids.</p>
                  <ul className="mb-4 text-gray-600 list-disc list-inside">
                    <li>Community solar projects</li>
                    <li>Social impact programs</li>
                    <li>Rural electrification</li>
                    <li>Micro-grid solutions</li>
                  </ul>
                  <a href="#" className="inline-block px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Learn More →</a>
                </div>
              </div>
            </motion.div>

            {/* Rural */}
            <motion.div
              className="p-6 transition-shadow bg-white border border-green-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-start mb-4">
                <span className="p-5 mr-4 bg-green-100 rounded-full">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-teal-800">Rural</h3>
                  <p className="mb-4 text-gray-600">Reaching remote places has never been easier and now you never have to worry about power going out.</p>
                  <ul className="mb-4 text-gray-600 list-disc list-inside">
                    <li>Off-grid solutions</li>
                    <li>Agricultural applications</li>
                    <li>Remote area access</li>
                    <li>Sustainable development</li>
                  </ul>
                  <a href="#" className="inline-block px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">Learn More →</a>
                </div>
              </div>
            </motion.div>

            {/* Industrial */}
            <motion.div
              className="p-6 transition-shadow bg-white border border-red-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-start mb-4">
                <span className="p-5 mr-4 bg-red-100 rounded-full">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-teal-800">Industrial</h3>
                  <p className="mb-4 text-gray-600">Get your own solar plants and procure contracts to offer it to others for a sustainable living as a business partner.</p>
                  <ul className="mb-4 text-gray-600 list-disc list-inside">
                    <li>Manufacturing facilities</li>
                    <li>Process optimization</li>
                    <li>Energy-intensive industries</li>
                    <li>Power purchase agreements</li>
                  </ul>
                  <a href="#" className="inline-block px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">Learn More →</a>
                </div>
              </div>
            </motion.div>

            {/* Government */}
            <motion.div
              className="p-6 transition-shadow bg-white border border-blue-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-start mb-4">
                <span className="p-5 mr-4 bg-blue-100 rounded-full">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-teal-800">Government</h3>
                  <p className="mb-4 text-gray-600">A step in the right direction towards a better future, get secure and reliable source of energy to focus on building the communities and enriching the future.</p>
                  <ul className="mb-4 text-gray-600 list-disc list-inside">
                    <li>Policy implementation</li>
                    <li>Public infrastructure</li>
                    <li>Smart governance</li>
                    <li>Sustainable development goals</li>
                  </ul>
                  <a href="#" className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Learn More →</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 text-center bg-gradient-to-br from-teal-600 to-blue-700">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Transform Your Energy Future?</h2>
          <p className="mb-8 text-lg text-teal-50 md:text-xl">Contact us today to discover the perfect solar solution for your segment</p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#34D399", boxShadow: "0 0 15px rgba(52, 211, 153, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-2 text-sm font-semibold text-white rounded-full shadow-lg md:px-8 md:py-3 bg-emerald-600 hover:bg-emerald-700 md:text-base"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SegmentsPage;