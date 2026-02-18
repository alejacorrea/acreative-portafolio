import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const images = project?.images || [project?.image];
  const total = images.length;

  const handlePrev = () => setCurrentImg((p) => (p === 0 ? total - 1 : p - 1));
  const handleNext = () => setCurrentImg((p) => (p === total - 1 ? 0 : p + 1));

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft')  handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [currentImg]);

  if (!project) return null;

  // Portal → se renderiza en document.body, independiente del scroll
  return ReactDOM.createPortal(
    <div className="pmodal">
      <div className="pmodal__backdrop" onClick={onClose} />

      <div className="pmodal__panel">
        {/* ── IMAGEN ── */}
        <div className="pmodal__img-wrap">
          <div
            className="pmodal__slider"
            style={{ transform: `translateX(-${currentImg * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="pmodal__slide">
                <img src={img} alt={`${project.label} ${i + 1}`} className="pmodal__img" />
                <div className="pmodal__img-overlay" />
              </div>
            ))}
          </div>

          <button className="pmodal__close" onClick={onClose} aria-label="Cerrar">
            <span className="material-symbols-outlined">close</span>
          </button>

          <span className="pmodal__badge">{project.category}</span>

          {total > 1 && (
            <div className="pmodal__slider-controls">
              <button className="pmodal__slider-btn" onClick={handlePrev}>
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div className="pmodal__slider-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`pmodal__dot ${i === currentImg ? 'pmodal__dot--active' : ''}`}
                    onClick={() => setCurrentImg(i)}
                  />
                ))}
              </div>
              <button className="pmodal__slider-btn" onClick={handleNext}>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          )}
        </div>

        {/* ── INFO ── */}
        <div className="pmodal__info">
          <div className="pmodal__meta">
            <span className="pmodal__year">{project.year}</span>
            <span className="pmodal__label">{project.label}</span>
          </div>
          <h2 className="pmodal__title">{project.title}</h2>
          <p className="pmodal__desc">{project.description}</p>
          <div className="pmodal__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="pmodal__tag">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body // ← renderiza fuera del árbol, pegado al body
  );
};

export default ProjectModal;