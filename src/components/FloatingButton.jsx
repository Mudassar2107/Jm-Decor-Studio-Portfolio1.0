import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'; // Added Instagram icon
import '../css/FloatingButton.css';

const FloatingButton = () => {
  const location = useLocation();
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get all main sections
      const landingSection = document.getElementById('landing');
      const gallerySection = document.getElementById('gallery');
      const aboutSection = document.getElementById('about');
      const footerSection = document.getElementById('footer');

      if (!landingSection) return;

      // Get the positions of each section
      const landingRect = landingSection.getBoundingClientRect();
      
      // Show buttons when in landing section (either at top or partially visible)
      const isInLanding = (window.scrollY < landingSection.offsetHeight) || 
                         (landingRect.top <= 0 && landingRect.bottom > 0);

      // Check if other sections are in view
      const isInOtherSection = [gallerySection, aboutSection, footerSection].some(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      });

      setShowButtons(isInLanding && !isInOtherSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919635555693', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919635555693';
  };

  const handleLocationClick = () => {
    window.open('https://g.co/kgs/g5DFuSq', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/jmdecorstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  // Only show on the landing page path AND when showButtons is true
  if (location.pathname !== '/' || !showButtons) return null;

  return (
    <div className="floating-buttons-container">
      <div
        className="floating-button whatsapp"
        onClick={handleWhatsAppClick}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </div>
      <div
        className="floating-button call"
        onClick={handleCallClick}
        aria-label="Call"
      >
        <FaPhone />
      </div>
      <div
        className="floating-button location"
        onClick={handleLocationClick}
        aria-label="Location"
      >
        <FaMapMarkerAlt />
      </div>
      <div
        className="floating-button instagram"
        onClick={handleInstagramClick}
        aria-label="Instagram"
      >
        <FaInstagram />
      </div>
    </div>
  );
};

export default FloatingButton;
