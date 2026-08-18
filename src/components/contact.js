"use client"
import React, { useState } from "react"
import { BsFillSendCheckFill } from "react-icons/bs";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      alert(t('contact.error'));
      return;
    }

    setIsSubmitting(true);

    fetch(webhookUrl, {
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
        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-10 items-start">
          {/* Editorial contact info */}
          <div className="md:col-span-2">
            <span className="section-number">{t('contact.section')} {'//'}</span>
            <h2
              className="font-display font-semibold mt-2"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
            >
              <SplitText text={t('contact.title')} stagger={0.05} />
            </h2>
            <Reveal delay={0.1} className="mt-4 leading-relaxed max-w-sm" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)', color: 'var(--text-secondary)' }}>
              {t('contact.subtitle')}
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
              <MagneticButton
                as="a"
                href="mailto:samuelarandia@gmail.com"
                data-cursor-hover
                strength={0.25}
                className="inline-block font-display font-medium break-all"
                style={{ fontSize: 'clamp(1.25rem, 2.6vw, 1.9rem)', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-primary)' }}
              >
                samuelarandia@gmail.com
              </MagneticButton>
            </Reveal>

            <Reveal delay={0.28} className="mt-8 space-y-2 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
              <p>{t('contact.location')} — <span style={{ color: 'var(--text-secondary)' }}>{t('contact.locationValue')}</span></p>
              <p>
                <a href="https://www.linkedin.com/in/samuel-arandia/" target="_blank" rel="noopener noreferrer" data-cursor-hover className="hover:text-[var(--accent-primary)] transition-colors">/in/samuel-arandia</a>
                {' · '}
                <a href="https://github.com/samuelArandia" target="_blank" rel="noopener noreferrer" data-cursor-hover className="hover:text-[var(--accent-primary)] transition-colors">@samuelArandia</a>
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15} className="md:col-span-3">
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
                  data-cursor-hover
                  className="w-full py-3 rounded-xl font-medium text-sm text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ background: 'var(--accent-primary)' }}
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact;
