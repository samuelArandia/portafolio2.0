"use client"
import React, { useState, useEffect } from "react"
import { BsFillSendCheckFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLanguage } from '@/i18n/LanguageContext';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

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
        alert(t('contact.error'));
      }
    })
    .catch(() => {
      alert(t('contact.error'));
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
          <span className="section-number">{t('contact.section')} {'//'}</span>
          <h2
            className="font-display font-bold mt-2"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            {t('contact.title')}
          </h2>
          <div className="section-divider mx-auto mt-3 mb-5" />
          <p className="max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)', color: 'var(--text-secondary)' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-stretch">
          {/* Contact info — terminal card, matching the ~/samuel.dev identity from About */}
          <div className="md:col-span-2" data-aos="fade-right" data-aos-duration="600">
            <div className="rounded-2xl overflow-hidden h-full" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', boxShadow: 'var(--card-shadow)' }}>
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="font-mono text-[11px] ml-2" style={{ color: 'var(--text-muted)' }}>~/contact</span>
              </div>
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-loose">
                <p>
                  <span style={{ color: 'var(--accent-primary)' }}>$</span>{' '}
                  <span style={{ color: 'var(--text-muted)' }}>cat contact.json</span>
                </p>
                <div className="mt-2" style={{ color: 'var(--text-secondary)' }}>
                  <p>{'{'}</p>
                  <p className="pl-4">
                    &quot;email&quot;: <a href="mailto:samuelarandia@gmail.com" className="hover:underline break-all" style={{ color: 'var(--accent-primary)' }}>&quot;samuelarandia@gmail.com&quot;</a>,
                  </p>
                  <p className="pl-4">
                    &quot;location&quot;: <span style={{ color: 'var(--accent-primary)' }}>&quot;{t('contact.locationValue')}&quot;</span>,
                  </p>
                  <p className="pl-4">
                    &quot;linkedin&quot;: <a href="https://www.linkedin.com/in/samuel-arandia/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent-primary)' }}>&quot;/in/samuel-arandia&quot;</a>,
                  </p>
                  <p className="pl-4">
                    &quot;github&quot;: <a href="https://github.com/samuelArandia" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent-primary)' }}>&quot;@samuelArandia&quot;</a>
                  </p>
                  <p>{'}'}</p>
                </div>
                <p className="mt-3">
                  <span style={{ color: 'var(--accent-primary)' }}>$</span>{' '}
                  <span className="inline-block w-2 h-4 align-middle animate-pulse" style={{ background: 'var(--accent-primary)' }} />
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3" data-aos="fade-left" data-aos-duration="600">
            <div className="rounded-2xl p-6 sm:p-8 gradient-border-top h-full"
              style={{ background: 'var(--bg-card)', boxShadow: 'var(--card-shadow)' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-1.5 mb-2 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact-field w-full bg-transparent border-0 border-b py-2 text-sm transition-colors"
                    style={{ borderBottomColor: 'var(--glass-border)', color: 'var(--text-primary)' }}
                    placeholder={t('contact.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="flex items-center gap-1.5 mb-2 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-field w-full bg-transparent border-0 border-b py-2 text-sm transition-colors"
                    style={{ borderBottomColor: 'var(--glass-border)', color: 'var(--text-primary)' }}
                    placeholder={t('contact.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="flex items-center gap-1.5 mb-2 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>&gt;</span> {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="contact-field w-full bg-transparent border-0 border-b py-2 text-sm transition-colors resize-none"
                    style={{ borderBottomColor: 'var(--glass-border)', color: 'var(--text-primary)' }}
                    placeholder={t('contact.messagePlaceholder')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-medium text-sm text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ background: 'var(--accent-gradient)', boxShadow: '0 8px 30px rgba(3, 166, 60, 0.2)' }}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>

                {showAlert && (
                  <div className="alert-success bg-green-500/10 text-green-400 px-4 py-4 rounded-xl" role="status">
                    <div className="flex items-center justify-center gap-3">
                      <BsFillSendCheckFill className="text-green-400 text-xl flex-shrink-0" />
                      <span className="text-sm">{t('contact.success')}</span>
                    </div>
                    <button onClick={() => setShowAlert(false)} className="mt-2 text-xs text-green-500 hover:text-green-300 transition-colors cursor-pointer block mx-auto" aria-label={t('contact.closeNotification')}>
                      {t('contact.close')}
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
