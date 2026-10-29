"use client"
import React, { useRef, useState } from "react"
import { FiCheck, FiAlertCircle, FiX } from "react-icons/fi";
import ExternalArrow from "@/components/ExternalArrow";
import { EMAIL, socialMedia } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const professionalLinks = socialMedia.filter((s) => s.name === 'LinkedIn' || s.name === 'GitHub');

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const submitRef = useRef(null);
  const { t } = useLanguage();
  const isSubmitting = status === "sending";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    // Webhook URL (with its SAS signature) comes from the environment; see .env.local.example.
    const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      setStatus("error");
      return;
    }

    setStatus("sending");

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
        setStatus("success");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        setStatus("error");
      }
    })
    .catch(() => {
      setStatus("error");
    });
  }

  return (
    <section id="Contact" aria-labelledby="contact-title" className="pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="container-page">
        <SectionHeading index={t('contact.section')} title={t('contact.title')} titleId="contact-title">
          {t('contact.subtitle')}
        </SectionHeading>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5" amount={0.2}>
            <p className="kicker">{t('contact.emailLabelShort')}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="link-underline mt-3 inline-block break-all text-[clamp(1.375rem,3vw,2rem)] font-medium tracking-[-0.02em] text-fg"
            >
              {EMAIL}
            </a>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              {professionalLinks.map((social) => (
                <div key={social.id} className="flex items-center justify-between gap-4 py-3">
                  <dt className="kicker">{social.name}</dt>
                  <dd>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-[2.75rem] items-center gap-1.5 font-mono text-sm text-fg-2 transition-colors hover:text-fg"
                    >
                      {social.handle}
                      <ExternalArrow />
                      <span className="sr-only">{t('common.newTab')}</span>
                    </a>
                  </dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="kicker">{t('contact.location')}</dt>
                <dd className="flex min-h-[2.75rem] items-center font-mono text-sm text-fg-2">{t('contact.locationValue')}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08} amount={0.15}>
            <div className="rounded-lg border border-line bg-surface p-6 sm:p-8" style={{ boxShadow: 'var(--shadow)' }}>
              <h3 id="contact-form-title" className="text-lg font-semibold tracking-tight">{t('contact.formTitle')}</h3>
              <form onSubmit={handleSubmit} aria-labelledby="contact-form-title" className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-fg-2">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="field"
                    placeholder={t('contact.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-fg-2">{t('contact.emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="field"
                    placeholder={t('contact.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-fg-2">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="field resize-y"
                    placeholder={t('contact.messagePlaceholder')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {/* aria-disabled instead of disabled keeps keyboard focus on the button while sending */}
                <button ref={submitRef} type="submit" aria-disabled={isSubmitting} className="btn btn-primary w-full sm:w-auto">
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>

                <div role="status" aria-live="polite">
                  {status === "sending" && <span className="sr-only">{t('contact.sending')}</span>}
                  {status === "success" && (
                    <div className="flex items-start gap-3 rounded-md border border-line-strong px-4 py-3 text-sm text-fg" style={{ background: 'var(--accent-soft)' }}>
                      <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span className="flex-1">{t('contact.success')}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setStatus("idle");
                          submitRef.current?.focus();
                        }}
                        aria-label={t('contact.closeNotification')}
                        className="-m-2 flex h-8 w-8 items-center justify-center rounded-md text-fg-2 hover:text-fg"
                      >
                        <FiX className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-start gap-3 rounded-md border border-line-strong px-4 py-3 text-sm text-fg">
                      <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-fg-2" aria-hidden="true" />
                      <span>
                        {t('contact.error')}{' '}
                        <a href={`mailto:${EMAIL}`} className="link-underline">{EMAIL}</a>.
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact;
