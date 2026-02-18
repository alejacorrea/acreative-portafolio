import React, { useState } from 'react';
import './Services.css';

const SERVICES = [
  {
    id: 1,
    category: 'Branding',
    title: ['IDENTIDAD', 'DE MARCA'],
    description: 'Desarrollo identidades visuales estratégicas que construyen reconocimiento y coherencia de marca.',
    icon: 'design_services',
  },
  {
    id: 2,
    category: 'Editorial Design',
    title: ['DISEÑO', 'EDITORIAL'],
    description: 'Diseño piezas editoriales claras y estructuradas que comunican información con estética y orden.',
    icon: 'menu_book',
  },
  {
    id: 3,
    category: 'Digital Design',
    title: ['DISEÑO', 'DIGITAL'],
    description: 'Creo experiencias visuales digitales modernas, funcionales y enfocadas en el usuario.',
    icon: 'web',
  },
  {
    id: 4,
    category: 'Product & Experience Design',
    title: ['PROYECTOS', 'ESPECIALES'],
    description: 'Desarrollo proyectos creativos e innovadores que combinan concepto, diseño y experiencia.',
    icon: 'rocket_launch',
  },
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="services" id="servicios">
      {/* Separador superior */}
      <div className="services__divider" />

      <div className="services__inner">
        {/* ── HEADER ── */}
        <div className="services__header">
          <div className="services__header-top">
            <div className="services__category-line" />
            <span className="services__category-label">Services</span>
          </div>
          <h2 className="services__title">Servicios</h2>
        </div>

        {/* ── CARDS ── */}
        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`services__card ${active === index ? 'services__card--active' : ''}`}
              onClick={() => setActive(index)}
            >
              {/* Icono */}
              <div className="services__card-icon">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>

              {/* Categoría */}
              <p className="services__card-category">{service.category}</p>

              {/* Título */}
              <h3 className="services__card-title">
                {service.title[0]}<br />{service.title[1]}
              </h3>

              {/* Descripción */}
              <p className="services__card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;