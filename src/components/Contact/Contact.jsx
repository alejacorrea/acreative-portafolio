import React from 'react';
import './Contact.css';

const Contact = () => {
  const waMessage = encodeURIComponent("Hola Alejandra, me interesa cotizar un proyecto");

  return (
    <section className="contact" id="contacto">
      <div className="contact__divider" />

      <div className="contact__inner">

        {/* LADO IZQUIERDO */}
        <div className="contact__left">
          <div className="contact__header">
            <div className="contact__category-line" />
            <span className="contact__category-label">Contact</span>
          </div>
          <h2 className="contact__title">CONTÁCTAME</h2>
          <p className="contact__subtitle">
            ¿Tienes un proyecto en mente?<br />
            Conversemos y construyamos algo<br />
            sólido y estratégico.
          </p>
        </div>

        {/* LADO DERECHO: CTA CARD */}
        <div className="contact__right">
          <div className="contact__cta-card">

            <div className="contact__cta-top">
              <span className="contact__cta-icon material-symbols-outlined">chat</span>
              <h3 className="contact__cta-title">¿LISTO PARA<br />EMPEZAR?</h3>
              <p className="contact__cta-text">
                Escríbeme directamente por WhatsApp y cuéntame
                tu idea. Te respondo rápido y sin rodeos.
              </p>
            </div>

            <div className="contact__cta-bottom">
              <a
                href={`https://wa.me/573105354605?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="contact__cta-btn"
              >
                <span className="material-symbols-outlined">send</span>
                <span>Escribir por WhatsApp</span>
              </a>

              <div className="contact__cta-info">
                <a href="mailto:alejandracp63@gmail.com" className="contact__cta-email">
                  <span className="material-symbols-outlined">mail</span>
                  alejandracp63@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;