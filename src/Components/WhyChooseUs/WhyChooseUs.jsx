import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    { title: "No Compromise with Quality", desc: "Top-tier materials and standards for lasting performance.", icon: "🛡️" },
    { title: "Timely Delivery", desc: "On-schedule project completion you can rely on.", icon: "⏰" },
    { title: "Quick Troubleshooting", desc: "Fast and effective solutions to any issues.", icon: "🔧" },
    { title: "Round the Clock Assistance", desc: "24/7 support to meet your needs anytime.", icon: "🌙" },
    { title: "Dedicated Workforce", desc: "Skilled team committed to your success.", icon: "👥" },
    { title: "Quality Workmanship", desc: "Expert craftsmanship ensuring excellence.", icon: "🏅" },
    { title: "Industry Leading Expertise", desc: "Over 15 years of experience with certified professionals.", icon: "🌱" },
    { title: "Maximum Energy Efficiency", desc: "Up to 98% efficiency with cutting-edge technology.", icon: "⚡" },
  ];

  const stats = [
    { value: "200+", label: "Successful solar projects delivered" },
    { value: "15K+", label: "Employees powering our mission" },
    { value: "700+", label: "Installations across sectors" },
    { value: "5+MW", label: "Solar capacity connected" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className="mb-10 text-4xl font-bold text-center text-gray-900 md:text-5xl">Why Choose Us?</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mb-14">We’re your partners in delivering innovative, sustainable, and high-quality solutions with exceptional support and efficiency.</p>
        <div className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 text-center transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-3xl text-orange-500 sm:text-4xl">{feature.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800 sm:text-xl">{feature.title}</h3>
              <p className="text-sm text-gray-600 sm:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-2xl font-bold text-blue-600 sm:text-3xl">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;