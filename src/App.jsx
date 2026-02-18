import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

// Página principal
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portafolio from './components/Portafolio/Portafolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Página de proyectos acreative
import Projects from './pages/Projects';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portafolio />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;