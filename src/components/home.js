"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialMedia } from "@/constants";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { useLanguage } from '@/i18n/LanguageContext';

function Inicio() {
  const perfil = "/perfil.png";
  const { locale, t } = useLanguage();

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const contactId = "Contact";

  return (
    <section className="min-h-[100dvh] flex items-center relative overflow-hidden" id="Inicio">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full opacity-[0.04] blur-[100px] pointer-events-none" style={{ background: 'var(--accent-primary)' }} />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full opacity-[0.04] blur-[100px] pointer-events-none" style={{ background: 'var(--accent-secondary)' }} />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-24 pb-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="font-display font-extrabold text-accent-gradient leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {t('hero.greeting')}
            </h1>

            <div className="mt-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
              <TypeAnimation
                key={locale}
                sequence={[
                  t('hero.role1'), 1500,
                  t('hero.role2'), 1500,
                  t('hero.role3'), 1500,
                ]}
                className="font-display font-semibold"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', color: 'var(--text-secondary)' }}
                cursor={true}
                repeat={Infinity}
              />
            </div>

            <p
              className="mt-5 max-w-lg mx-auto md:mx-0 leading-relaxed"
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)', color: 'var(--text-muted)' }}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row justify-center md:justify-start gap-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1J-t-qPOVP2hqq85CteBTIR49wG7bqWLn/view?usp=sharing", "_blank")}
                className="px-7 py-3 rounded-xl font-medium text-sm text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                style={{ background: 'var(--accent-gradient)', boxShadow: '0 8px 30px rgba(224, 64, 251, 0.25)' }}
              >
                {t('hero.downloadCV')}
              </button>
              <Link
                to={contactId}
                smooth={true}
                duration={500}
                offset={-80}
                className="px-7 py-3 rounded-xl font-medium text-sm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center border"
                style={{ borderColor: 'var(--card-border)', color: 'var(--accent-primary)' }}
              >
                {t('hero.writeMe')}
              </Link>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('hero.visitSocial')}
                  className="p-2.5 rounded-xl border text-lg transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--accent-primary)] cursor-pointer"
                  style={{ borderColor: 'var(--card-border)', color: 'var(--text-muted)' }}
                >
                  {social.id === "social-media-1" && <FaInstagram />}
                  {social.id === "social-media-2" && <FaFacebook />}
                  {social.id === "social-media-3" && <BsTwitterX />}
                  {social.id === "social-media-4" && <FaLinkedin />}
                  {social.id === "social-media-5" && <FaGithub />}
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full animate-glow-pulse" style={{ background: 'var(--accent-gradient)', opacity: 0.15, filter: 'blur(30px)' }} />
              <div className="absolute -inset-1 rounded-full opacity-20" style={{ background: 'var(--accent-gradient)' }} />
              <Image
                src={perfil}
                alt={t('hero.profileAlt')}
                width={300}
                height={300}
                className="relative rounded-full w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover shadow-2xl"
                style={{ boxShadow: '0 0 0 2px var(--card-border)' }}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Inicio;
