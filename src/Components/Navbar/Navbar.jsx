import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="fixed top-0 z-40 flex items-center justify-between w-full h-16 px-4 transition-all duration-300 ease-in-out bg-white shadow-md md:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/src/assets/logo-sherman-energy-website-removebg-preview.png"
          alt="Sherman Energy Logo"
          className="object-contain h-12 w-38 sm:w-30 sm:h-19 md:w-60 md:h-60 lg:w-60 lg:h-60"
          loading="lazy"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:space-x-6">
        {["Home", "About Us", "Services", "Segments", "Projects", "Associates", "Blog"].map((item) => (
          item === "Services" ? (
            <div className="relative" key={item}>
              <button
                onClick={toggleServices}
                className="flex items-center font-medium text-gray-600 transition-colors hover:text-teal-500 focus:outline-none"
              >
                {item} <span className="ml-1 text-xs">{isServicesOpen ? '▲' : '▼'}</span>
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 z-10 w-48 py-1 mt-2 bg-white rounded-md shadow-lg">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    to="/services/epc"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    EPC - Engineering Procurement and Commissioning
                  </Link>
                  <Link
                    to="/services/omm"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    OMM - Operation and Maintenance
                  </Link>
                  <Link
                    to="/services/re-engineering"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Re-engineering and Redevelopment
                  </Link>
                  <Link
                    to="/services/turnkey"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Turnkey
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item}
              to={
                item === "Home" ? "/" :
                item === "About Us" ? "/about" :
                item === "Services" ? "/services" :
                item === "Segments" ? "/segments" :
                item === "Projects" ? "/projects" :
                item === "Associates" ? "/associates" : // Updated to link to /associates
                item === "Blog" ? "/blog" : "#"
              }
              className="font-medium text-gray-600 transition-colors hover:text-teal-500"
            >
              {item}
            </Link>
          )
        ))}
      </div>

      {/* Get in Touch Button (Desktop) */}
      <Link to="/contact" className="hidden px-3 py-2 text-sm font-medium text-white transition-colors bg-teal-500 rounded-md lg:block hover:bg-teal-600">
        Get in Touch
      </Link>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
          <div className="relative w-6 h-5">
            <span
              className={`absolute block w-full h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-45 top-2.5' : 'top-0'
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-gray-600 top-2.5 transition-opacity duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`absolute block w-full h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${
                isOpen ? '-rotate-45 top-2.5' : 'top-5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-10 flex flex-col items-center justify-center space-y-4 md:hidden lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute text-gray-600 top-4 right-4 hover:text-teal-500 focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Items */}
        {["Home", "About Us", "Services", "Segments", "Projects", "Associates", "Blog"].map((item) => (
          item === "Services" ? (
            <div className="relative" key={item}>
              <button
                onClick={toggleServices}
                className="flex items-center text-lg font-medium text-gray-600 transition-colors hover:text-teal-500 focus:outline-none"
              >
                {item} <span className="ml-1 text-xs">{isServicesOpen ? '▲' : '▼'}</span>
              </button>
              {isServicesOpen && (
                <div className="w-48 py-1 mt-2 bg-white rounded-md shadow-lg">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => { setIsServicesOpen(false); toggleMenu(); }}
                  >
                    All Services
                  </Link>
                  <Link
                    to="/services/epc"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => { setIsServicesOpen(false); toggleMenu(); }}
                  >
                    EPC - Engineering Procurement and Commissioning
                  </Link>
                  <Link
                    to="/services/omm"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => { setIsServicesOpen(false); toggleMenu(); }}
                  >
                    OMM - Operation and Maintenance
                  </Link>
                  <Link
                    to="/services/re-engineering"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => { setIsServicesOpen(false); toggleMenu(); }}
                  >
                    Re-engineering and Redevelopment
                  </Link>
                  <Link
                    to="/services/turnkey"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={() => { setIsServicesOpen(false); toggleMenu(); }}
                  >
                    Turnkey
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item}
              to={
                item === "Home" ? "/" :
                item === "About Us" ? "/about" :
                item === "Services" ? "/services" :
                item === "Segments" ? "/segments" :
                item === "Projects" ? "/projects" :
                item === "Associates" ? "/associates" : // Updated to link to /associates
                item === "Blog" ? "/blog" : "#"
              }
              onClick={toggleMenu}
              className="text-lg font-medium text-gray-600 transition-colors hover:text-teal-500"
            >
              {item}
            </Link>
          )
        ))}
        <Link
          to="/contact"
          onClick={toggleMenu}
          className="px-4 py-2 font-medium text-white transition-colors bg-teal-500 rounded-md hover:bg-teal-600"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;