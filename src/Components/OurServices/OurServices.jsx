import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const OurServices = () => {
  const services = [
    { title: "Engineering, Procurement, Construction", desc: "Smart, reliable solar EPC—design to delivery, done right.", image: "../assets/service-01.jpeg" },
    { title: "Operation and Maintenance", desc: "Regular solar maintenance for maximum efficiency and long-term savings.", image: "../assets/ONM2.jpg" },
    { title: "Re-engineering and Redevelopment", desc: "Innovative redesigns for better solar performance, cost-efficiency, and sustainability.", image: "../assets/service-03.png" },
    { title: "Turnkey Projects", desc: "Efficient turnkey solar plants—optimized design, expert delivery, maximum returns.", image: "../assets/service-04.png" },
  ];

  return (
    <section className="py-16 text-white bg-gray-900">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-10 text-4xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="overflow-hidden bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={service.image} alt={service.title} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/services"
            className="inline-block px-6 py-3 mt-8 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
          >
            See More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;