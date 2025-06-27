import React, { useEffect } from 'react';
import './Features.css';

const Features = () => {
  // Scroll animation with IntersectionObserver
  useEffect(() => {
    const featureCards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    featureCards.forEach((card) => observer.observe(card));
    return () => {
      featureCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Our Core Features</h2>
        <p className="features-subtitle">
          Discover how Sherman Energy drives sustainability with innovative solutions.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2v2m0 16v2m-8-10H2m20 0h-2m-2.828-7.172L15.757 5.414m2.828 13.586l-1.414-1.414M5.414 15.757l-1.414 1.414m1.414-13.586L6.828 5.414M12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
            </div>
            <h3 className="feature-title">Solar Innovation</h3>
            <p className="feature-description">
              Harness the power of the sun with our cutting-edge solar technology.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 00-8.34 15.16l1.41-1.41A8 8 0 1112 20v2a10 10 0 000-20zM2 12h2m16 0h2m-9-9v2m0 16v2" />
              </svg>
            </div>
            <h3 className="feature-title">Energy Efficiency</h3>
            <p className="feature-description">
              Optimize energy usage with smart, sustainable solutions.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l10 10-10 10L2 12l10-10zm0 4l-6 6 6 6 6-6-6-6z" />
              </svg>
            </div>
            <h3 className="feature-title">Eco-Friendly Design</h3>
            <p className="feature-description">
              Build a greener future with environmentally conscious technology.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 00-7 17.29l1.41-1.41A8 8 0 1112 20v2a10 10 0 000-20zM2 12h2m16 0h2m-9-9v2m0 16v2" />
              </svg>
            </div>
            <h3 className="feature-title">Smart Integration</h3>
            <p className="feature-description">
              Seamlessly integrate renewable energy into your daily life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;