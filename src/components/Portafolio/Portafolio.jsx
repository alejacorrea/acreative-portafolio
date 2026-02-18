import React from 'react';
import { Link } from 'react-router-dom';
import './Portafolio.css';
import portafolio1 from '../../assets/portafolio1.jpg';
import portafolio2 from '../../assets/portafolio2.jpg';
import portafolio3 from '../../assets/portafolio3.jpg';

const PORTFOLIO_ITEMS = [
  { id: 1, image: portafolio1, hasImage: true, alt: 'portafolio 1' },
  { id: 2, image: portafolio2, hasImage: true, alt: 'portafolio 2', featured: true },
  { id: 3, image: portafolio3, hasImage: true, alt: 'portafolio 3' },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portafolio">
      <div className="portfolio__divider" />

      <div className="portfolio__inner">
        <div className="portfolio__grid">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`portfolio__card ${item.featured ? 'portfolio__card--featured' : ''}`}
            >
              {item.hasImage ? (
                <img src={item.image} alt={item.alt} className="portfolio__card-img" />
              ) : (
                <div className="portfolio__card-placeholder">
                  <span className="material-symbols-outlined">image</span>
                </div>
              )}
              <div className="portfolio__card-fade" />
            </div>
          ))}
        </div>

        <div className="portfolio__footer">
          <h2 className="portfolio__title">MI PORTAFOLIO</h2>
          {/* Botón que navega a /proyectos */}
          <Link to="/proyectos" className="portfolio__cta">
            Ver más proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;