"use client"
import React, { useState, useEffect } from "react"
import { BsFillSendCheckFill } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    fetch('https://prod-00.brazilsouth.logic.azure.com:443/workflows/3918c47902ab4a9fb53a8893cb2cdcd2/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=02rKDvooNdj6W46NG7_tO3No8ZK7nh54JCn_eIHlX_Q', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        correoNombre: name,
        correoDestinatario: email,
        correoMensaje: message
      })
    })
    .then(response => {
      if (response.ok) {
        setShowAlert(true);
        setEmail("");
        setName("");
        setMessage("");
      } else {
        alert('Error al enviar el correo electrónico');
      }
    })
    .catch(() => {
      alert('Error al enviar el correo electrónico');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  }

  return (
    <section className="py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16" id="Contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            Contáctame
          </h2>
          <div className="section-divider mx-auto mt-3 mb-5" />
          <p className="max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)', color: 'var(--text-secondary)' }}>
            ¿Tienes un proyecto en mente o quieres colaborar? No dudes en escribirme.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-4" data-aos="fade-right" data-aos-duration="600">
            <div className="flex items-start gap-4 p-5 rounded-2xl transition-shadow duration-200"
              style={{ background: 'var(--bg-card)', boxShadow: 'var(--card-shadow)' }}
            >
              <div className="p-2.5 rounded-xl" style={{ background: 'rgba(224, 64, 251, 0.1)' }}>
                <FaEnvelope className="text-lg" style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold font-display" style={{ color: 'var(--text-primary)' }}>Email</h3>
                <a href="mailto:samuelarandia@gmail.com" className="text-sm hover:text-[var(--accent-primary)] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  samuelarandia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl transition-shadow duration-200"
              style={{ background: 'var(--bg-card)', boxShadow: 'var(--card-shadow)' }}
            >
              <div className="p-2.5 rounded-xl" style={{ background: 'rgba(224, 64, 251, 0.1)' }}>
                <FaMapMarkerAlt className="text-lg" style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold font-display" style={{ color: 'var(--text-primary)' }}>Ubicación</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Santiago, Chile</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl transition-shadow duration-200"
              style={{ background: 'var(--bg-card)', boxShadow: 'var(--card-shadow)' }}
            >
              <div className="p-2.5 rounded-xl" style={{ background: 'rgba(224, 64, 251, 0.1)' }}>
                <FaLinkedin className="text-lg" style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold font-display" style={{ color: 'var(--text-primary)' }}>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/samuel-arandia/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent-primary)] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  /in/samuel-arandia
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl transition-shadow duration-200"
              style={{ background: 'var(--bg-card)', boxShadow: 'var(--card-shadow)' }}
            >
              <div className="p-2.5 rounded-xl" style={{ background: 'rgba(224, 64, 251, 0.1)' }}>
                <FaGithub className="text-lg" style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold font-display" style={{ color: 'var(--text-primary)' }}>GitHub</h3>
                <a href="https://github.com/samuelArandia" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent-primary)] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  @samuelArandia
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3" data-aos="fade-left" data-aos-duration="600">
            <div className="rounded-2xl p-6 sm:p-8"
              style={{ background: 'var(--bg-card)', boxShadow: 'var(--card-shadow)' }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium font-display" style={{ color: 'var(--text-primary)' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 text-sm rounded-xl transition-all duration-200"
                    style={{ background: 'var(--glass-bg)', color: 'var(--text-primary)', border: 'none' }}
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium font-display" style={{ color: 'var(--text-primary)' }}>
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 text-sm rounded-xl transition-all duration-200"
                    style={{ background: 'var(--glass-bg)', color: 'var(--text-primary)', border: 'none' }}
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium font-display" style={{ color: 'var(--text-primary)' }}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 text-sm rounded-xl transition-all duration-200 resize-none"
                    style={{ background: 'var(--glass-bg)', color: 'var(--text-primary)', border: 'none' }}
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-medium text-sm text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ background: 'var(--accent-gradient)', boxShadow: '0 8px 30px rgba(224, 64, 251, 0.2)' }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {showAlert && (
                  <div className="alert-success bg-green-500/10 text-green-400 px-4 py-4 rounded-xl" role="status">
                    <div className="flex items-center justify-center gap-3">
                      <BsFillSendCheckFill className="text-green-400 text-xl flex-shrink-0" />
                      <span className="text-sm">El correo electrónico ha sido enviado exitosamente.</span>
                    </div>
                    <button onClick={() => setShowAlert(false)} className="mt-2 text-xs text-green-500 hover:text-green-300 transition-colors cursor-pointer block mx-auto" aria-label="Cerrar notificación">
                      Cerrar
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
