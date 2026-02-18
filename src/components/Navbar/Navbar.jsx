import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
        {/* Logo */}
        <a href="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="navbar__logo-img" />
        </a>

        {/* Nav Links — desktop */}
        <ul className="navbar__nav">
          <li><a href="#inicio"     className="navbar__nav-link active">Inicio</a></li>
          <li><a href="#servicios"  className="navbar__nav-link">Servicios</a></li>
          <li><a href="#portafolio" className="navbar__nav-link">Portafolio</a></li>
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          <button className="navbar__search-btn" aria-label="Buscar">
            <span className="material-symbols-outlined">search</span>
          </button>
          <a href="#contacto" className="navbar__cta" onClick={closeMenu}>Contáctame</a>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          <li><a href="#inicio"     onClick={closeMenu}>Inicio</a></li>
          <li><a href="#servicios"  onClick={closeMenu}>Servicios</a></li>
          <li><a href="#portafolio" onClick={closeMenu}>Portafolio</a></li>
          <li><a href="#contacto"   onClick={closeMenu} className="mobile-menu__cta">Contáctame</a></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="mobile-menu__backdrop" onClick={closeMenu} />
      )}
    </>
  );
};

export default Navbar;