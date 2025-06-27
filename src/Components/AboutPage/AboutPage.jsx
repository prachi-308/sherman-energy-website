import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';

// Counter Animation Logic with Sequence-wise Effect and Fallback
const Counter = ({ from, to, duration, sectionRef, delay = 0 }) => {
  const counter = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isSectionInView && counter.current && sectionRef.current) {
      let currentValue = from;
      console.log(`Counter triggered for section ${sectionRef.current.id || 'no-id'}, inView: ${isSectionInView}`);
      const startAnimation = () => {
        try {
          const animation = animate(from, to, {
            delay,
            duration: duration,
            onUpdate: (latest) => {
              currentValue = Math.floor(latest);
              if (counter.current) counter.current.textContent = currentValue > to ? to : currentValue;
            },
          });
          return () => animation.stop(); // Cleanup animation
        } catch (error) {
          console.error(`Animation failed for section ${sectionRef.current?.id || 'no-id'}:`, error);
          if (counter.current) counter.current.textContent = to; // Fallback to static value
        }
      };
      const timeoutId = setTimeout(startAnimation, delay * 1000);
      return () => clearTimeout(timeoutId); // Cleanup timeout
    } else if (counter.current && !isSectionInView) {
      counter.current.textContent = from; // Reset if not in view
    }
  }, [isSectionInView, from, to, duration, delay]);

  return <span ref={counter}>{from}</span>;
};

const AboutPage = () => {
  const navigate = useNavigate();
  const innovationRef = useRef();
  const ourStoryRef = useRef();
  const milestoneRef1 = useRef();
  const milestoneRef2 = useRef();
  const milestoneRef3 = useRef();
  const achievementRef1 = useRef();
  const achievementRef2 = useRef();
  const achievementRef3 = useRef();
  const achievementRef4 = useRef();
  const ourMissionRef = useRef();

  const navigateToProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden pt-16" style={{ paddingTop: '4rem' }}>
        <div className="absolute inset-0 z-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              renderBullet: (_, className) => `<span class="${className} inline-block w-3 h-3 bg-teal-300 hover:bg-teal-500 rounded-full transition-colors"></span>`,
            }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Slide 1"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-teal-900/60"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Slide 2"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-teal-900/60"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Slide 3"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-teal-900/60"></div>
            </SwiperSlide>
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
              Empowering a Sustainable Future
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-base md:text-xl lg:text-2xl text-teal-50">
              Join us on a journey to revolutionize energy with innovation, excellence, and cutting-edge solutions.
            </p>
            <motion.button
              onClick={navigateToProjects}
              whileHover={{ scale: 1.1, backgroundColor: "#2dd4bf", boxShadow: "0 0 15px rgba(45, 212, 191, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative z-20 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 bg-teal-600 rounded-full shadow-lg md:px-8 md:py-3 hover:bg-teal-700 md:text-base"
            >
              Discover Our Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Innovation at the Core */}
      <section id="innovation" className="scroll-mt-24 py-8 px-4 md:py-16 md:px-8 bg-white min-h-[200px] lg:min-h-[300px]" ref={innovationRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto text-center max-w-7xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-teal-900 md:text-3xl lg:text-4xl">Innovation at the Core</h2>
          <div className="w-12 h-1 mx-auto mb-4 rounded-full md:mb-8 bg-gradient-to-r from-teal-500 to-teal-600 md:w-16"></div>
          <p className="max-w-2xl mx-auto mb-6 text-sm text-gray-600 md:text-base lg:text-lg">
            Pioneering the future of renewable energy with groundbreaking solutions
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="p-4 transition-all duration-300 bg-white border border-teal-100 rounded-lg shadow-md md:p-6 hover:shadow-xl hover:bg-teal-50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-teal-500 md:mb-4">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-solar-panel"></i>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-teal-900 md:text-xl">Cutting-edge Technology</h3>
              <p className="text-xs text-center text-gray-600 md:text-sm">Latest solar panel technology with smart grid integration</p>
            </motion.div>
            <motion.div
              className="p-4 transition-all duration-300 bg-white border border-teal-100 rounded-lg shadow-md md:p-6 hover:shadow-xl hover:bg-teal-50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-teal-600 md:mb-4">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-certificate"></i>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-teal-900 md:text-xl">Quality Assurance</h3>
              <p className="text-xs text-center text-gray-600 md:text-sm">ISO certified processes with 25-year warranty</p>
            </motion.div>
            <motion.div
              className="p-4 transition-all duration-300 bg-white border border-teal-100 rounded-lg shadow-md md:p-6 hover:shadow-xl hover:bg-teal-50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-teal-600 md:mb-4">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-leaf"></i>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-teal-900 md:text-xl">Environmental Impact</h3>
              <p className="text-xs text-center text-gray-600 md:text-sm">Contributing to a sustainable and carbon-neutral future</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="scroll-mt-24 py-8 px-4 md:py-16 md:px-8 bg-gradient-to-b from-white to-gray-50 min-h-[200px] lg:min-h-[300px]" ref={ourStoryRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto text-center max-w-7xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-teal-900 md:text-3xl lg:text-4xl">Our Story</h2>
          <p className="max-w-xl mx-auto mb-4 text-sm italic text-gray-600 md:text-base lg:text-lg">
            "A transition to clean energy is about making an investment in our future" - Gloria Reuben (Environmentalist)
          </p>
          <div className="flex flex-col items-start gap-4 md:gap-8 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left md:w-1/2"
            >
              <h3 className="mb-2 text-xl font-semibold text-teal-900 md:text-2xl">"Pioneering Clean and Affordable Energy Solutions"</h3>
              <p className="mb-2 text-sm text-gray-600 md:text-base">
                Sherman Energy Ltd is an EPC that was established in 2016. Since its inception, the company has been focused on providing clean, affordable and abundant energy solutions to its clients. Being an electrical engineer himself, Director and General Manager of Sherman Group, Sumeet Issar was always fascinated by the renewable energy sector.
              </p>
              <p className="mb-2 text-sm text-gray-600 md:text-base">
                He envisioned his goal of creating abundant energy through upcoming technology and innovative research. After closely working in the energy sector with various foreign companies in the past, he decided to start his own venture. Today we are associated with various FMCGs, Textile, educational institutions and Real estate developers.
              </p>
              <p className="mb-2 text-sm text-gray-600 md:text-base">
                It is one of the fastest growing companies in the energy sector and wishes to enter new markets around the globe.
              </p>
              <motion.button
                onClick={navigateToProjects}
                whileHover={{ scale: 1.1, backgroundColor: "#2dd4bf", boxShadow: "0 0 15px rgba(45, 212, 191, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="px-4 py-2 mt-2 text-xs font-semibold text-white bg-teal-600 rounded-full shadow-md md:mt-4 md:text-sm"
              >
                View Our Projects
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Our Story Background"
                className="rounded-xl shadow-lg w-full h-auto object-cover min-h-[200px] md:min-h-[400px] lg:min-h-[500px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Key Milestones */}
      <section id="key-milestones" className="scroll-mt-24 py-8 px-4 md:py-16 md:px-8 bg-gray-900 text-white min-h-[200px] lg:min-h-[300px]" ref={milestoneRef1}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto text-center max-w-7xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-teal-200 md:text-3xl lg:text-4xl">Key Milestones</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="p-4 transition-all duration-300 bg-gray-800 border border-teal-800 rounded-lg shadow-md md:p-6 hover:shadow-xl hover:bg-teal-800/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              ref={milestoneRef1}
            >
              <div className="mb-2 text-teal-400 md:mb-4">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-solar-panel"></i>
              </div>
              <p className="text-2xl font-bold text-white md:text-3xl">
                <Counter from={0} to={20} duration={2} sectionRef={milestoneRef1} delay={0} />+
              </p>
              <p className="text-sm text-teal-200 md:text-base">MW Solar Installed</p>
              <p className="text-xs text-teal-300 md:text-sm">Successfully across India</p>
            </motion.div>
            <motion.div
              className="p-4 transition-all duration-300 bg-gray-800 border border-teal-800 rounded-lg shadow-md md:p-6 hover:shadow-xl hover:bg-teal-800/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              ref={milestoneRef2}
            >
              <div className="mb-2 text-teal-400 md:mb-4">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-calendar-alt"></i>
              </div>
              <p className="text-2xl font-bold text-white md:text-3xl">
                <Counter from={0} to={7} duration={2} sectionRef={milestoneRef2} delay={0.2} />+
              </p>
              <p className="text-sm text-teal-200 md:text-base">Years of Excellence</p>
              <p className="text-xs text-teal-300 md:text-sm">Since 2017 in renewable energy</p>
            </motion.div>
            <motion.div
              className="p-4 transition-all duration-300 bg-gray-800 border border-teal-800 rounded-lg shadow-md md:p-6 hover:shadow-xl hover:bg-teal-800/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              ref={milestoneRef3}
            >
              <div className="mb-2 text-teal-400 md:mb-4">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-users"></i>
              </div>
              <p className="text-2xl font-bold text-white md:text-3xl">
                <Counter from={0} to={100} duration={2} sectionRef={milestoneRef3} delay={0.4} />+
              </p>
              <p className="text-sm text-teal-200 md:text-base">Happy Clients</p>
              <p className="text-xs text-teal-300 md:text-sm">Across various sectors</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section id="our-mission" className="scroll-mt-24 py-8 px-4 md:py-16 md:px-8 bg-gradient-to-b from-teal-50 to-teal-100 min-h-[200px] lg:min-h-[300px]" ref={ourMissionRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto text-center max-w-7xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-teal-900 md:text-3xl lg:text-4xl">Our Mission</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="p-4 transition-all duration-300 bg-white border border-teal-100 shadow-md md:p-6 rounded-xl hover:shadow-lg hover:bg-teal-50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              toolbar={{ once: true }}
            >
              <div className="mb-2 mb-4 text-teal-600 md:">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-globe"></i>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-teal-900 md:text-xl">Priority of the Company</h3>
              <p className="text-xs text-center text-gray-600 md:text-sm">We prioritize environmental sustainability in all our operations and solutions.</p>
            </motion.div>
            <motion.div
              className="p-4 transition-all duration-300 bg-white border border-teal-100 shadow-md md:p-6 rounded-xl hover:shadow-lg hover:bg-teal-50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-teal-600 md:mb-4">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-clock"></i>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-teal-900 md:text-xl">Time to Save the Planet</h3>
              <p className="text-xs text-center text-gray-600 md:text-sm">Innovative clean energy solutions for a sustainable future.</p>
            </motion.div>
            <motion.div
              className="p-4 transition-all duration-300 bg-white border border-teal-100 shadow-md md:p-6 rounded-xl hover:shadow-lg hover:bg-teal-50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-teal-600 md:mb-4">
                <i className="mx-auto text-3xl md:text-5xl lg:text-6xl fas fa-hands-helping"></i>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-teal-900 md:text-xl">Support Local Communities</h3>
              <p className="text-xs text-center text-gray-600 md:text-sm">Empowering communities through accessible renewable energy solutions.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Achievements */}
      <section id="achievements" className="scroll-mt-24 py-8 px-4 md:py-16 md:px-8 bg-white min-h-[200px] lg:min-h-[300px]" ref={achievementRef1}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-center text-teal-900 md:text-4xl lg:text-5xl font-poppins">Our Achievements</h2>
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <motion.div
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Achievements Background"
                className="rounded-xl shadow-lg w-full h-auto object-cover min-h-[200px] md:min-h-[400px]"
              />
            </motion.div>
            <div className="relative w-full md:w-2/3 perspective-1000">
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-br from-teal-200/50 to-teal-300/50 opacity-10 blur-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div
                  className="p-6 transition-all duration-300 border border-teal-300 shadow-md bg-gradient-to-br from-teal-200 to-teal-300 rounded-xl hover:shadow-xl transform-style-preserve-3d hover:rotate-2 hover:scale-105"
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  ref={achievementRef1}
                >
                  <p className="text-3xl font-bold text-teal-900 md:text-4xl font-poppins">
                    🔹 <Counter from={0} to={200} duration={2} sectionRef={achievementRef1} delay={0} />+
                  </p>
                  <p className="text-base text-gray-900 md:text-lg font-poppins">Projects powering solar adoption nationwide</p>
                </motion.div>
                <motion.div
                  className="p-6 transition-all duration-300 border border-teal-300 shadow-md bg-gradient-to-br from-teal-200 to-teal-300 rounded-xl hover:shadow-xl transform-style-preserve-3d hover:-rotate-2 hover:scale-105"
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  ref={achievementRef2}
                >
                  <p className="text-3xl font-bold text-teal-900 md:text-4xl font-poppins">
                    🔹 <Counter from={0} to={15000} duration={2} sectionRef={achievementRef2} delay={0.2} />+
                  </p>
                  <p className="text-base text-gray-900 md:text-lg font-poppins">Employees driving solar excellence</p>
                </motion.div>
                <motion.div
                  className="p-6 transition-all duration-300 border border-teal-300 shadow-md bg-gradient-to-br from-teal-200 to-teal-300 rounded-xl hover:shadow-xl transform-style-preserve-3d hover:rotate-2 hover:scale-105"
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  ref={achievementRef3}
                >
                  <p className="text-3xl font-bold text-teal-900 md:text-4xl font-poppins">
                    🔹 <Counter from={0} to={700} duration={2} sectionRef={achievementRef3} delay={0.4} />+
                  </p>
                  <p className="text-base text-gray-900 md:text-lg font-poppins">Solar sites, homes to industries</p>
                </motion.div>
                <motion.div
                  className="p-6 transition-all duration-300 border border-teal-300 shadow-md bg-gradient-to-br from-teal-200 to-teal-300 rounded-xl hover:shadow-xl transform-style-preserve-3d hover:-rotate-2 hover:scale-105"
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  ref={achievementRef4}
                >
                  <p className="text-3xl font-bold text-teal-900 md:text-4xl font-poppins">
                    🔹 <Counter from={0} to={5} duration={2} sectionRef={achievementRef4} delay={0.6} />+ MW
                  </p>
                  <p className="text-base text-gray-900 md:text-lg font-poppins">Solar energy delivered nationwide</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;