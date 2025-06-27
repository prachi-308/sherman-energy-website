import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Initialize Font Awesome library with solid icons
library.add(fas);

const ServicesPage = () => {
  // Core Services Data with New Online Images and Icons
  const coreServices = [
    {
      title: "Engineering, Procurement, Construction",
      desc: "Expert design and execution of solar projects with top-quality materials.",
      items: ["Complete project design", "Quality procurement", "Professional installation", "Testing & commissioning"],
      img: "/src/assets/EPC3.jpg",
      icon: "fa-tools",
      buttonText: "Learn More About EPC"
    },
    {
      title: "Operation and Maintenance",
      desc: "Ongoing support for maximum solar panel performance with 24/7 care.",
      items: ["24/7 monitoring", "Preventive maintenance", "Performance optimization", "Technical support"],
      img: "/src/assets/ONM1.jpg",
      icon: "fa-wrench",
      buttonText: "Explore O&M Services"
    },
    {
      title: "Re-engineering and Redevelopment",
      desc: "Innovative upgrades to enhance efficiency with cutting-edge technology.",
      items: ["System analysis", "Technology upgrades", "Performance enhancement", "Cost optimization"],
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      icon: "fa-redo",
      buttonText: "Discover Redevelopment"
    },
    {
      title: "Turnkey Projects",
      desc: "End-to-end solar solutions for large-scale projects with expert execution.",
      items: ["Large scale projects", "Complete EPC solutions", "Immediate operation", "Professional execution"],
      img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      icon: "fa-building",
      buttonText: "View Turnkey Projects"
    },
  ];

  // Additional Services Data with Font Awesome Icons
  const additionalServices = [
    { title: "Solar Panel Installation & Maintenance", icon: "fa-solar-panel" },
    { title: "Grid-Tied Solar Systems", icon: "fa-network-wired" },
    { title: "Off-Grid Solar Solutions", icon: "fa-battery-full" },
    { title: "Solar Water Heating Systems", icon: "fa-water" },
    { title: "Energy Auditing Services", icon: "fa-chart-line" },
    { title: "Power Purchase Agreements (PPAs)", icon: "fa-handshake" },
    { title: "Solar Financing Solutions", icon: "fa-dollar-sign" },
    { title: "Government Subsidy Assistance", icon: "fa-landmark" },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with Improved Carousel */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
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
            {coreServices.map((service, index) => (
              <SwiperSlide key={index}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent"></div>
                <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-8 text-center text-white">
                  <div className="max-w-3xl mx-auto space-y-4">
                    <h3 className="text-3xl font-bold md:text-5xl">{service.title}</h3>
                    <p className="text-base md:text-xl">{service.desc}</p>
                    <button className="px-6 py-3 text-lg font-semibold text-teal-600 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100">
                      {service.buttonText}
                    </button>
                  </div>
                </div>
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
            <div className="flex justify-center">
              <button className="px-6 py-3 text-lg font-semibold text-teal-600 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100 md:px-8 md:py-4">
                Request a Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="px-8 py-12 md:px-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-emerald-800 md:text-4xl">Our Core Services</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="absolute flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full -top-4 left-6">
                  <FontAwesomeIcon icon={['fas', service.icon]} className="w-6 h-6 text-teal-600" />
                </div>
                <img src={service.img} alt={service.title} className="object-cover w-full h-48 mb-4 rounded-t-lg" />
                <h3 className="mt-4 text-xl font-semibold text-teal-800">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
                <ul className="mt-4 space-y-2 text-green-600">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center"><span className="w-2 h-2 mr-2 bg-green-600 rounded-full"></span>{item}</li>
                  ))}
                </ul>
                <button className="px-4 py-2 mt-4 text-white rounded bg-emerald-600 hover:bg-emerald-700">Read More →</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="px-8 py-12 md:px-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-emerald-800 md:text-4xl">Additional Services</h2>
          <p className="mb-8 text-gray-600">Beyond our core offerings, we provide a comprehensive range of solar energy services</p>
          <div className="grid grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-lg sm:grid-cols-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="p-4 transition-colors rounded-lg shadow bg-teal-50 hover:bg-teal-100"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex justify-center mb-2">
                  <FontAwesomeIcon icon={['fas', service.icon]} className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-teal-800">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Go Solar Section */}
      <section className="py-12 text-center text-white bg-gradient-to-br from-teal-600 to-blue-700">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Go Solar?</h2>
          <p className="mt-4 text-lg md:text-xl">Contact our experts today for a free consultation and customized solar solution</p>
          <div className="flex justify-center mt-6">
            <button className="px-6 py-3 text-lg font-semibold text-teal-600 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100 md:px-8 md:py-4">
              Request a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;