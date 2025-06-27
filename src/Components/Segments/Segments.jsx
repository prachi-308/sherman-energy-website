import React from 'react';
import { motion } from 'framer-motion';

const Segments = () => {
  const segments = [
    {
      title: 'Residential',
      description: 'Provide appropriate solutions for your home with smart environment of creating and managing loads with efficient energy sources.',
      icon: '🏠',
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
      borderHover: 'border-pink-600',
    },
    {
      title: 'Industrial',
      description: 'For your industrial needs such as converting electrical energy to offer it as different types of alternative energy.',
      icon: '🏭',
      color: 'bg-red-100',
      textColor: 'text-red-600',
      borderHover: 'border-red-600',
    },
    {
      title: 'Institutions',
      description: 'Ideal for all educational institutions for children education with fully efficient energy for children.',
      icon: '🏫',
      color: 'bg-green-100',
      textColor: 'text-green-600',
      borderHover: 'border-green-600',
    },
    {
      title: 'PSUs',
      description: 'Using clean environment energy creates an instant online environment that provides solutions.',
      icon: '🏢',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      borderHover: 'border-yellow-600',
    },
    {
      title: 'Social',
      description: 'Being in our products for society and community regarding efficient power systems.',
      icon: '👥',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      borderHover: 'border-blue-600',
    },
    {
      title: 'Rural',
      description: 'Reaching up change rural areas with make better energy solution that they never have in past years.',
      icon: '🌳',
      color: 'bg-lime-100',
      textColor: 'text-lime-600',
      borderHover: 'border-lime-600',
    },
    {
      title: 'Commercial solutions',
      description: 'All type of commercial projects in the context of projects of electrical and transmission line sections and built at ease.',
      icon: '🏬',
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
      borderHover: 'border-teal-600',
    },
    {
      title: 'Government',
      description: 'A being in the right direction through efficient and power equipment for the government sectors.',
      icon: '🏛️',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      borderHover: 'border-purple-600',
    },
  ];

  return (
    <section className="px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"> {/* Added padding on left and right */}
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-4xl font-bold text-gray-800">SEGMENTS</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              className={`p-6 bg-white rounded-lg shadow-md border border-transparent hover:${segment.borderHover} hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`text-4xl mb-4 ${segment.textColor}`}>{segment.icon}</div>
              <h3 className={`text-lg font-semibold mb-2 ${segment.textColor}`}>{segment.title}</h3>
              <p className="text-sm text-gray-600">{segment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;