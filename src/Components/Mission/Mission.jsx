import React, { useEffect } from 'react';
import './Mission.css';

const Mission = () => {
  // Scroll animation with IntersectionObserver
  useEffect(() => {
    const missionContent = document.querySelectorAll('.mission-card');
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

    missionContent.forEach((card) => observer.observe(card));
    return () => {
      missionContent.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="mission">
      <div className="mission-container">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-description">
          At Sherman Energy, we are dedicated to revolutionizing the energy sector with sustainable, innovative solutions that empower communities and protect our planet for future generations.
        </p>
        <div className="mission-cards">
          <div className="mission-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2v2m0 16v2m-8-10H2m20 0h-2m-2.828-7.172L15.757 5.414m2.828 13.586l-1.414-1.414M5.414 15.757l-1.414 1.414m1.414-13.586L6.828 5.414M12 6a6 6 0 100 12 6 6 0 000-12z"/>
              </svg>
            </div>
            <h3 className="card-title">Solar Innovation</h3>
            <p className="card-description">
              Pioneering advanced solar technologies to maximize efficiency and accessibility for all.
            </p>
          </div>
          <div className="mission-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
              </svg>
            </div>
            <h3 className="card-title">Eco-Friendly Solutions</h3>
            <p className="card-description">
              Developing renewable energy solutions that minimize environmental impact.
            </p>
          </div>
          <div className="mission-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <h3 className="card-title">Global Impact</h3>
            <p className="card-description">
              Expanding access to clean energy worldwide to drive sustainable progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;