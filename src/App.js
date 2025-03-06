import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import FloatingButton from './components/FloatingButton';
import './App.css';

// Lazy load components for better performance
const LandingPage = React.lazy(() => import('./components/LandingPage'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const About = React.lazy(() => import('./components/About'));

// Loading component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner">Loading...</div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Home route with all sections */}
            <Route path="/" element={
              <>
                <LandingPage />
                <Gallery />
                <About />
              </>
            } />
            
            {/* Individual section routes */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            
            {/* 404 route */}
            <Route path="*" element={
              <div className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      {/* Only show FloatingButton on certain routes */}
      {location.pathname === '/' && <FloatingButton />}
    </div>
  );
}

export default App;
