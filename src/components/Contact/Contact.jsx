import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectas tu backend, EmailJS, Formspree, etc.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' });
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__divider" />

      <div className="contact__inner">

        {/* ── LADO IZQUIERDO ── */}
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

          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="contact__info-label">E-mail</p>
                <a href="mailto:hola@acreative.com" className="contact__info-value">
                  alejandracp63@gmail.com
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <div>
                <p className="contact__info-label">WhatsApp</p>
                <a
                  href="https://wa.me/573105354605"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__info-value"
                >
                  +57 310 535 46 05
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── LADO DERECHO: FORMULARIO ── */}
        <div className="contact__right">
          <div className="contact__form-card">
            <h3 className="contact__form-title">SOLICITAR COTIZACIÓN</h3>

            {submitted ? (
              <div className="contact__success">
                <span className="material-symbols-outlined">check_circle</span>
                <p>¡Mensaje enviado! Me pondré en contacto pronto.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                {/* Nombre + Correo en fila */}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="contact__input"
                    />
                    <label htmlFor="nombre" className="contact__label">Nombre</label>
                    <span className="contact__input-line" />
                  </div>

                  <div className="contact__field">
                    <input
                      type="email"
                      name="correo"
                      id="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="contact__input"
                    />
                    <label htmlFor="correo" className="contact__label">Correo</label>
                    <span className="contact__input-line" />
                  </div>
                </div>

                {/* Asunto */}
                <div className="contact__field">
                  <input
                    type="text"
                    name="asunto"
                    id="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="contact__input"
                  />
                  <label htmlFor="asunto" className="contact__label">Asunto</label>
                  <span className="contact__input-line" />
                </div>

                {/* Mensaje */}
                <div className="contact__field contact__field--textarea">
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="contact__input contact__textarea"
                    rows={4}
                  />
                  <label htmlFor="mensaje" className="contact__label">Mensaje</label>
                  <span className="contact__input-line" />
                </div>

                <button type="submit" className="contact__submit">
                  <span>Enviar</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;