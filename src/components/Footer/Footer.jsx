import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { label: 'Behance',   href: 'https://behance.net',  icon: 'palette' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'photo_camera' },
    { label: 'LinkedIn',  href: 'https://linkedin.com',  icon: 'work' },
  ];

  const links = [
    { label: 'Inicio',     href: '#inicio' },
    { label: 'Servicios',  href: '#servicios' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Contacto',   href: '#contacto' },
  ];

  return (
    <footer className="footer">

      {/* ── FRANJA SUPERIOR ── */}
      <div className="footer__top">
        <div className="footer__inner">

          {/* Logo + tagline */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <img src={logo} alt="aCreative Designs" className="footer__logo-img" />
            </a>
            <p className="footer__tagline">
              Diseño que comunica,<br />identidades que perduran.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social-btn"
                  aria-label={s.label}
                >
                  <span className="material-symbols-outlined">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div className="footer__nav">
            <p className="footer__nav-title">Navegación</p>
            <ul>
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer__nav-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer__nav">
            <p className="footer__nav-title">Servicios</p>
            <ul>
              {['Identidad de Marca', 'Diseño Editorial', 'Diseño Digital', 'Proyectos Especiales'].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="footer__nav-link">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="footer__cta-block">
            <p className="footer__nav-title">¿Empezamos?</p>
            <p className="footer__cta-text">
              Cuéntame tu idea y construyamos algo memorable juntos.
            </p>
            <a href="#contacto" className="footer__cta-btn">
              <span>Escríbeme</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

        </div>
      </div>

      {/* ── FRANJA INFERIOR ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © {year} ACreative Designs. Todos los derechos reservados.
          </p>
          <p className="footer__made">
            Diseñado & desarrollado con
            <span className="material-symbols-outlined footer__heart">favorite</span>
            en Colombia
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;