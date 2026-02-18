import React, { useState } from 'react';
import './Hero.css';
import proyecto1 from '../../assets/proyecto1.jpg';
import proyecto2 from '../../assets/proyecto2.jpg';
import proyecto3 from '../../assets/proyecto3.jpg';
import proyecto4 from '../../assets/proyecto4.jpg';

const PROJECTS = [
  {
    id: 1,
    label: 'SOULMOVE',
    title: ['IDENTIDAD', 'DE MARCA'],
    category: 'Branding',
    image: proyecto1,
    hasImage: true,
  },
  {
    id: 2,
    label: 'CATALOGO INNOVATION 2026',
    title: ['DISEÑO', 'EDITORIAL'],
    category: 'Editorial Design',
    image: proyecto2,
    hasImage: true,
  },
  {
    id: 3,
    label: 'ARTES META ADS E INSTAGRAM',
    title: ['DISEÑO', 'DIGITAL'],
    category: 'Digital Design',
    image: proyecto3,
    hasImage: true,
  },
  {
    id: 4,
    label: 'ACDesarrollo – Juego de Mesa',
    title: ['PROYECTOS', 'ESPECIALES'],
    category: 'Product & Experience Design',
    image: proyecto4,
    hasImage: true,
  },
];

const SECTIONS = [
  {
    category: 'Branding',
    title: ['IDENTIDAD', 'DE MARCA'],
    description: 'Desarrollo identidades visuales alineadas a objetivos de negocio, asegurando coherencia, diferenciación y reconocimiento de marca.',
    cta: 'Ver Proyectos',
  },
  {
    category: 'Editorial Design',
    title: ['DISEÑO', 'EDITORIAL'],
    description: 'Desarrollo revistas, catálogos y publicaciones que combinan orden, narrativa y diseño estratégico.',
    cta: 'Ver Proyectos',
  },
  {
    category: 'Digital Design',
    title: ['DISEÑO', 'DIGITAL'],
    description: 'Diseño experiencias visuales digitales orientadas a impacto, claridad y rendimiento.',
    cta: 'Ver Proyectos',
  },
  {
    category: 'Product & Experience Design',
    title: ['PROYECTOS', 'ESPECIALES'],
    description: 'Creatividad aplicada a proyectos únicos y experienciales.',
    cta: 'Ver Proyectos',
  },
];

/* ── CARD ── */
const ProjectCard = ({ project, isActive }) => {
  return (
    <div className={`hero__card ${isActive ? 'hero__card--active' : 'hero__card--idle'}`}>
      {project.hasImage ? (
        <img src={project.image} alt={project.label} className="hero__card-img" />
      ) : (
        <div className="hero__card-bg" />
      )}
      <div className="hero__card-overlay">
        <div className="hero__card-overlay-line" />
        <p className="hero__card-project-label">{project.label}</p>
        <p className="hero__card-project-title">
          {project.title[0]}<br />{project.title[1]}
        </p>
      </div>
    </div>
  );
};

/* ── HERO ── */
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const total = PROJECTS.length;

  const sectionIndex = Math.min(current, SECTIONS.length - 1);
  const section = SECTIONS[sectionIndex];
  const activeProject = PROJECTS[current];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const orderedProjects = [
    ...PROJECTS.slice(current),
    ...PROJECTS.slice(0, current),
  ];

  const progressPercent = ((current + 1) / total) * 100;
  const slideLabel = String(current + 1).padStart(2, '0');

  return (
    <section className="hero" id="inicio">

      {/* ── FONDO DINÁMICO ── */}
      <div className="hero__bg-wrapper">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`hero__bg-slide ${project.id === activeProject.id ? 'hero__bg-slide--active' : ''}`}
          >
            {project.hasImage && (
              <img src={project.image} alt="" className="hero__bg-img" aria-hidden="true" />
            )}
          </div>
        ))}
        <div className="hero__bg-overlay" />
      </div>

      {/* ── CONTENIDO (igual que antes) ── */}
      <div className="hero__inner">
        <div className="hero__left">
          <div className="hero__category">
            <div className="hero__category-line" />
            <span className="hero__category-label">{section.category}</span>
          </div>
          <h1 className="hero__title" key={`title-${current}`}>
            {section.title[0]}<br />{section.title[1]}
          </h1>
          <p className="hero__description">{section.description}</p>
          <a href="#portafolio" className="hero__cta-btn">{section.cta}</a>
        </div>

        <div className="hero__carousel-wrapper">
          <div className="hero__carousel-track">
            {orderedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={index === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTROLES ── */}
      <div className="hero__controls">
        <button className="hero__arrow-btn" onClick={handlePrev} aria-label="Anterior">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button className="hero__arrow-btn" onClick={handleNext} aria-label="Siguiente">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <div className="hero__progress-bar-wrapper">
          <div className="hero__progress-bar" style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="hero__slide-counter">{slideLabel}</span>
      </div>
    </section>
  );
};

export default Hero;