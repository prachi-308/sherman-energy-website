import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FooterSection from './Components/FooterSection/FooterSection';
import AboutPage from './Components/AboutPage/AboutPage';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import SegmentsPage from './Components/SegmentsPage/SegmentsPage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import EPCPage from './Components/EPCPage/EPCPage';
import ONMPage from './Components/ONMPage/ONMPage';
import BlogPage from './Components/BlogPage/BlogPage';
import ContactPage from './Components/ContactPage/ContactPage';

import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import OurServices from './Components/OurServices/OurServices';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import OurLatestProjects from './Components/OurLatestProjects/OurLatestProjects';
import Segments from './Components/Segments/Segments';
import AboveFooterSection from './Components/AboveFooterSection/AboveFooterSection';
import RNRPage from './Components/RNRPage/RNRPage';
import TurnkeyPage from './Components/TurnkeyPage/TurnkeyPage'; // Using the provided import path
import AssociatesPage from './Components/AssociatesPage/AssociatesPage'; // Including AssociatesPage

// ScrollToTop component to handle navigation reset
const ScrollToTop = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    // Reset scroll position to top without animation
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger on route change

  return children;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Hero /><AboutUs /><OurServices /><WhyChooseUs /><OurLatestProjects /><Segments /><AboveFooterSection /></>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/epc" element={<EPCPage />} />
            <Route path="/services/omm" element={<ONMPage />} />
            <Route path="/services/re-engineering" element={<RNRPage/>} />
            <Route path="/services/turnkey" element={<TurnkeyPage />} /> {/* Linked to TurnkeyPage */}
            <Route path="/segments" element={<SegmentsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/associates" element={<AssociatesPage />} /> {/* Linked to AssociatesPage */}
          </Routes>
          <FooterSection />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;