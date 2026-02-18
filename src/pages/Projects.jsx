import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import PROJECTS_DATA from '../Data/projects';
import ProjectModal from '../components/ProjectModal/ProjectModal';
import logo from '../assets/logo.png';
import Footer from '../components/Footer/Footer';

const CATEGORIES = ['Todos', 'Branding', 'Editorial Design', 'Digital Design', 'Product & Experience Design'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // Animación de entrada
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const filtered = activeCategory === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className={`projects-page ${visible ? 'projects-page--visible' : ''}`}>

      {/* ── NAVBAR SIMPLE ── */}
      <nav className="projects-nav">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <img src={logo} alt="aCreative Designs" className="projects-nav__logo" />
        </a>
        <button
          className="projects-nav__back"
          onClick={() => navigate('/')}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Volver
        </button>
      </nav>

      {/* ── HEADER ── */}
      <div className="projects-header">
        <div className="projects-header__left">
          <div className="projects-header__line" />
          <span className="projects-header__label">Portafolio</span>
          <h1 className="projects-header__title">MIS<br />PROYECTOS</h1>
          <p className="projects-header__sub">
            {PROJECTS_DATA.length} proyectos — diseño que comunica e identidades que perduran.
          </p>
        </div>
      </div>

      {/* ── FILTROS ── */}
      <div className="projects-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`projects-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            {cat !== 'Todos' && (
              <span className="projects-filter-count">
                {PROJECTS_DATA.filter(p => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── GRID DE PROYECTOS ── */}
      <div className="projects-grid">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className="projects-card"
            style={{ animationDelay: `${index * 0.08}s` }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Imagen */}
            <div className="projects-card__img-wrap">
              <img
                src={project.image}
                alt={project.label}
                className="projects-card__img"
              />
              <div className="projects-card__overlay">
                <span className="material-symbols-outlined projects-card__zoom">open_in_full</span>
              </div>
            </div>

            {/* Info */}
            <div className="projects-card__info">
              <div className="projects-card__meta">
                <span className="projects-card__category">{project.category}</span>
                <span className="projects-card__year">{project.year}</span>
              </div>
              <h3 className="projects-card__title">{project.title}</h3>
              <p className="projects-card__label">{project.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── MODAL ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />   {/* ← agregar aquí */}
    </div>
  );
};

export default Projects;