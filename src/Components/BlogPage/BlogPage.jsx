import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogRef = useRef(null);
  const isBlogInView = useInView(blogRef, { once: true, amount: 0.2 });

  // Blog posts data with only one featured article
  const blogPosts = [
    {
      id: 1,
      title: "PM Surya Ghar Muft Bijli Yojana: Complete Guide",
      date: "June 26, 2024",
      excerpt: "As the world shifts towards cleaner energy solutions, solar power has become a popular choice for homeowners and businesses alike. If you've been searching for information on solar panel schemes, you're not alone! Many people are eager to understand how they can benefit from government incentives designed to promote solar energy. In this blog, we'll break down what you need to know and how you can take advantage of these schemes.",
      img: "/src/assets/blog2.jpg",
      category: "Government Schemes",
      tags: ["Solar Panels"],
      fullContent: `
        <h2>What Are PM Surya Ghar Muft Bijli Yojana Solar Panel Schemes?</h2>
        <p class="text-gray-600">Government-sponsored programs that provide financial incentives, subsidies, or rebates to encourage the adoption of solar energy. These schemes aim to make solar panels more affordable and accessible, helping reduce your electricity bills and environmental impact.</p>

        <h2 class="mt-6 text-2xl font-semibold text-teal-800" id="why-important">Why Are PM Surya Ghar Muft Bijli Yojana Important?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div class="p-4 bg-green-50 rounded-lg">
            <h3 class="text-lg font-semibold text-green-600">Cost Savings</h3>
            <p class="text-gray-600">Government schemes often include subsidies that can significantly lower the initial cost of installing solar panels.</p>
          </div>
          <div class="p-4 bg-blue-50 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-600">Environmental Benefits</h3>
            <p class="text-gray-600">By adopting solar energy, you reduce your reliance on fossil fuels and decrease your carbon footprint.</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-600">Energy Independence</h3>
            <p class="text-gray-600">Solar panels provide a renewable source of energy, reducing your dependence on the grid and enhancing energy security.</p>
          </div>
        </div>

        <h2 class="mt-6 text-2xl font-semibold text-teal-800">How Can You Benefit from PM Surya Ghar Muft Bijli Yojana?</h2>
        <p class="text-gray-600 mt-4">To get started, you need to explore the specific schemes available in your region. The Indian government, for example, has several programs designed to make solar energy more accessible. You can find detailed information about these schemes on the official government website.</p>
        <div class="p-4 bg-blue-50 rounded-lg mt-4">
          <h3 class="text-lg font-semibold text-blue-600">How We Can Help</h3>
          <p class="text-gray-600">Our team is here to support you through the process. We can provide expert advice on solar panel installation, recommend reputable contractors, and help you understand how to best take advantage of the incentives available.</p>
        </div>

        <h2 class="mt-6 text-2xl font-semibold text-teal-800" id="why-important">Why Are PM Surya Ghar Muft Bijli Yojana Important?</h2>
        <ul class="list-disc pl-5 mt-4 text-gray-600">
          <li><strong>Assess Your Needs:</strong> Determine how much energy you use and what type of solar system would be best for your home or business.</li>
          <li><strong>Research Incentives:</strong> Visit the government's PM SURYA GHAR MUFT BILJ YOJANA website to understand the schemes and eligibility criteria.</li>
          <li><strong>Consult with Experts:</strong> Reach out to our team for advice on installation and maintenance.</li>
        </ul>

        <div class="p-4 bg-teal-100 rounded-lg mt-6">
          <h3 class="text-lg font-semibold text-teal-600">Final Thoughts</h3>
          <p class="text-gray-600">Solar energy is a powerful tool for both saving money and protecting the environment. Government schemes make it easier than ever to invest in solar panels. For the most up-to-date information on these incentives and to check your eligibility, visit the PM SURYA GHAR MUFT BILJ YOJANA website. Feel free to contact us with any questions or for further assistance on your solar journey. We're here to help you make informed decisions and get the most out of your solar investment!</p>
        </div>
      `,
    },
  ];

  const [expandedPostId, setExpandedPostId] = useState(null);

  const handleReadMore = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with Online Reference Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden pt-16">
        <div className="absolute inset-0 z-10">
          <img
            src="/src/assets/blog1.jpg"
            alt="Solar Energy Hero"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-teal-900/60"></div>
        </div>
        <div className="relative z-20 flex items-center justify-center h-full px-4 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-7xl"
          >
            <h1 className="mb-6 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Solar Energy Blog
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-base md:text-xl lg:text-2xl text-teal-50">
              Stay updated with the latest trends, government schemes, and innovations in solar energy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <motion.section
        id="blog"
        className="px-4 py-12 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        ref={blogRef}
      >
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-emerald-800 md:text-4xl">Featured Article</h2>
          <div className="w-20 mx-auto mb-6 border-b-2 border-teal-600"></div>

          <AnimatePresence>
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col max-w-5xl gap-6 p-6 mx-auto mb-8 bg-white rounded-lg shadow-md md:flex-row"
              >
                <div className="w-full md:w-1/3">
                  <img src={post.img} alt={post.title} className="object-cover w-full h-48 rounded-lg" />
                </div>
                <div className="w-full md:w-2/3">
                  <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-green-600 bg-green-100 rounded-full">Featured</span>
                  <p className="text-sm text-gray-500">{post.date} | {post.category} | {post.tags.join(", ")}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-teal-800">{post.title}</h3>
                  <p className="mt-4 text-gray-600">{post.excerpt}</p>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#34D399" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleReadMore(post.id)}
                    className="px-4 py-2 mt-4 text-white transition-colors rounded bg-emerald-600 hover:bg-emerald-700"
                  >
                    Read Full Article
                  </motion.button>
                  {expandedPostId === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 mt-6 rounded-lg bg-gray-50"
                      dangerouslySetInnerHTML={{ __html: post.fullContent }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Back to Home Link */}
      <motion.section
        className="py-8 text-center bg-gradient-to-br from-teal-600 to-blue-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <Link
            to="/"
            className="px-6 py-3 text-teal-600 bg-white rounded hover:bg-gray-100"
          >
            Go to Home Page
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPage;