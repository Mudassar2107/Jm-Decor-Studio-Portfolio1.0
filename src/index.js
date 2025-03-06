import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  ScrollRestoration
} from 'react-router-dom';
import App from './App';
import './index.css';

// Error boundary component for route errors
const RouteErrorBoundary = () => {
  return (
    <div className="error-container">
      <h1>Oops! Something went wrong</h1>
      <p>We're sorry, but there was an error loading this page.</p>
      <a href="/" className="error-home-link">Return to Home</a>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="*"
      element={
        <>
          <App />
          <ScrollRestoration />
        </>
      }
      errorElement={<RouteErrorBoundary />}
    />
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    },
    // Add basename if your app is not hosted at the root
    // basename: '/your-subdirectory',
    
    // Custom scroll behavior
    scrollBehavior: "smooth"
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);