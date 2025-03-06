import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import FloatingButton from '../components/FloatingButton';
import '../css/LandingPage.css';
import 'animate.css';
import backgroundImage from '../images/background.png';

const LandingPage = () => {
  const animationRef = useRef(null);
  const buttonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Handle initial animations using useLayoutEffect
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (animationRef.current && buttonRef.current && !isLoading && !imageError) {
        const tl = gsap.timeline();
        tl.fromTo(animationRef.current, 
          { opacity: 0, y: 30, rotateX: -10 }, 
          { opacity: 1, y: 0, rotateX: 0, duration: 1.5, ease: 'power2.out' }
        )
        .fromTo(buttonRef.current, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.7)' }, 
          '-=0.7'
        );
      }
    });

    return () => ctx.revert(); // Cleanup
  }, [isLoading, imageError]);

  // Handle image loading
  useEffect(() => {
    const img = new Image();
    img.src = require('../images/background.png');
    
    img.onload = () => {
      setIsLoading(false);
      setImageError(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      setImageError(true);
      console.error('Failed to load background image');
    };
  }, []);

  const handleExploreClick = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="landing-page animate__animated animate__fadeIn" id="landing" role="main">
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : imageError ? (
        <div className="error-message">Failed to load image</div>
      ) : (
        <>
          <div 
            className="opening-animation" 
            ref={animationRef} 
            aria-hidden="true"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'translateZ(0)'
            }}
          ></div>
          <div className="opening-animation-content">
            <button 
              ref={buttonRef} 
              className="explore-button" 
              onClick={handleExploreClick}
              aria-label="Explore our Gallery"
            >
              Explore our Gallery
            </button>
          </div>
        </>
      )}
      <FloatingButton />
    </div>
  );
};

export default LandingPage;