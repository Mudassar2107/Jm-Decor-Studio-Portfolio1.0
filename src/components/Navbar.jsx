import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsOpen(false);
    
    // If we're not on the home page, first navigate to home
    if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
      return;
    }

    // If we're already on the home page, just scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-toggle" onClick={toggleMenu} aria-expanded={isOpen} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#landing" onClick={(e) => { e.preventDefault(); handleLinkClick('landing'); }}>Home</a>
        </li>
        <li>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); handleLinkClick('gallery'); }}>Gallery</a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}>About</a>
        </li>
        {/*<li>
          <a href="#footer" onClick={(e) => { e.preventDefault(); handleLinkClick('footer'); }}>Contact</a>
        </li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
