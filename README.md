# JM Decor Studio – Portfolio Website

A responsive React website for JM Decor Studio. It showcases landing content, a rich gallery with multiple categories, and an about section with clients and machinery details.

## Features

- **Landing page** with background image and entry animations (`src/components/LandingPage.jsx`).
- **Gallery** with categories and image sliders (`src/components/Gallery.jsx`).
- **About** with founder section, clients grid, and machines details (`src/components/About.jsx`).
- **Smooth navigation** and in-page scrolling from a **responsive navbar** (`src/components/Navbar.jsx`).
- **Lazy-loaded routes** and **error boundary** for resilience and performance (`src/App.js`, `src/components/ErrorBoundary.jsx`).
- **Floating action button** on the home page (`src/components/FloatingButton.jsx`).

## Tech Stack

- React 18, React Router DOM 6
- Bootstrap 5, React Bootstrap, Bootstrap Icons
- GSAP, Animate.css, Framer Motion (animations)
- React Slick + Slick Carousel (sliders)
- React Icons

See `package.json` for full dependencies and versions.

## Routes

- `/` – Home (renders `LandingPage`, `Gallery`, `About` on a single page)
- `/gallery` – Gallery only
- `/about` – About only

## Project Structure (key files)

- `src/App.js` – Routes, lazy loading, layout
- `src/components/Navbar.jsx` – Navigation + smooth scroll to sections
- `src/components/LandingPage.jsx` – Hero/landing animations
- `src/components/Gallery.jsx` – Categories, sliders, toggles
- `src/components/About.jsx` – Founder, clients, machines
- `src/css/` – Component styles
- `src/images/` – App images (e.g., `background.png`, `owner.jpg`)

## Quick Start

1) Install dependencies
```bash
npm install
```

2) Start the dev server
```bash
npm start
```
Open http://localhost:3000 in your browser.

3) Build for production
```bash
npm run build
```
Outputs to the `build/` folder.

## Available Scripts

- `npm start` – Start dev server
- `npm test` – Run tests in watch mode
- `npm run build` – Create production build
- `npm run eject` – Eject CRA configuration (irreversible)

## Notes

- The gallery in `Gallery.jsx` references images under `/images/...` paths. Place those assets under `public/images/...` so they can be served at runtime. Component-specific images imported via JS live in `src/images/`.
- Smooth scrolling uses element IDs (`landing`, `gallery`, `about`). Ensure those IDs exist on the target sections.

## License

Private project. All rights reserved.

