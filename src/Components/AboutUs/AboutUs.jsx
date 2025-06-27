import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AboutUs = () => {
  const expertise = [
    "Renewable energy-focused smart energy provider",
    "Comprehensive solar services: design, construction, and management",
    "Solutions for both on-site and off-site installations",
    "Strong track record across public and private sectors",
    "Commitment to quality, innovation, and sustainability",
    "Expert team providing professional support and 24/7 assistance",
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  });

  const sectionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 200, friction: 30 },
  });

  const imageAnimation1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
    config: { tension: 220, friction: 32 },
    delay: inView ? 200 : 0,
  });

  const imageAnimation2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
    config: { tension: 220, friction: 32 },
    delay: inView ? 400 : 0,
  });

  const imageAnimation3 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
    config: { tension: 220, friction: 32 },
    delay: inView ? 600 : 0,
  });

  const imageAnimation4 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
    config: { tension: 220, friction: 32 },
    delay: inView ? 800 : 0,
  });

  // Function to scroll to top
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="px-4 py-16 md:px-6 lg:px-8 bg-gray-50">
      <animated.div style={sectionAnimation} className="flex flex-col gap-12 mx-auto max-w-7xl lg:flex-row lg:gap-24">
        {/* Text Content */}
        <div className="space-y-6 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            About <span className="text-teal-500">Sherman Energy</span>
          </h2>
          <p className="leading-relaxed text-gray-600">
            Sherman Energy Limited is a forward-thinking energy company delivering smart, world-class solutions that support global sustainable development. Focused on promoting the adoption of renewable energy, we offer complete services including the design, construction, and management of solar panel installations—both on-site and off-site. Our aim is to ensure a seamless and efficient experience through every stage, with a strong commitment to quality, innovation, and long-term sustainability.
          </p>
          <p className="leading-relaxed text-gray-600">
            With a successful portfolio spanning government, private, residential, and institutional sectors, we continue to strengthen our reputation through reliable delivery and constant improvement. Our expert team works with dedication to provide professional support and 24/7 assistance, ensuring every client receives dependable and future-ready energy solutions.
          </p>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Key Highlights:</h3>
            <ul className="space-y-2">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="mr-2 text-teal-500">🔧</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Replace button with Link with onClick handler */}
          <Link
            to="/about"
            onClick={handleNavigation}
            className="inline-block px-6 py-3 mt-4 font-medium text-white transition-colors bg-teal-500 rounded-md hover:bg-teal-600"
          >
            Learn More About Us →
          </Link>
        </div>

        {/* Images Section */}
        <div className="lg:w-1/2">
          <div className="relative max-w-[600px] mx-auto">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4">
              {/* Image 1 - First column, first row, shifted down */}
              <animated.div
                style={imageAnimation1}
                className="relative mt-6 group sm:mt-8 lg:mt-8"
              >
                <img
                  src="/src/assets/home-sec1-05.jpg"
                  alt="Solar Installation"
                  className="w-full h-[160px] sm:h-[200px] lg:h-[240px] object-cover rounded-2xl shadow-lg border-2 border-gray-100 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute px-3 py-1 text-sm font-semibold text-white bg-teal-500 rounded-lg shadow-md top-3 right-3">
                  5+ Years
                </div>
              </animated.div>

              {/* Image 2 - Second column, first row */}
              <animated.div
                style={imageAnimation2}
                className="relative group"
              >
                <img
                  src="/src/assets/home-sec1-02.jpeg"
                  alt="Renewable Energy"
                  className="w-full h-[160px] sm:h-[200px] lg:h-[240px] object-cover rounded-2xl shadow-lg border-2 border-gray-100 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </animated.div>

              {/* Image 3 - First column, second row, shifted down */}
              <animated.div
                style={imageAnimation3}
                className="relative mt-4 group sm:mt-8 lg:mt-4"
              >
                <img
                  src="/src/assets/home-sec1-04.jpeg"
                  alt="Solar Panels"
                  className="w-full h-[160px] sm:h-[200px] lg:h-[240px] object-cover rounded-2xl shadow-lg border-2 border-gray-100 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </animated.div>

              {/* Image 4 - Second column, second row */}
              <animated.div
                style={imageAnimation4}
                className="relative group"
              >
                <img
                  src="/src/assets/home-sec1-03.jpg"
                  alt="Sustainable Energy"
                  className="w-full h-[160px] sm:h-[200px] lg:h-[240px] object-cover rounded-2xl shadow-lg border-2 border-gray-100 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </animated.div>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default AboutUs;