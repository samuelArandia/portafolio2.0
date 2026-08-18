"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialMedia } from "@/constants";
import { useLanguage } from '@/i18n/LanguageContext';
import { EASE_PREMIUM } from "@/lib/motion";
import { scrollToSection } from "@/components/motion/scrollToSection";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";

function RoleCycle({ roles, className, style }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [roles]);

  return (
    <div className={className} style={{ ...style, position: "relative", overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          style={{ display: "inline-block" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function Inicio() {
  const perfil = "/perfil.png";
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const roles = [t('hero.role1'), t('hero.role2'), t('hero.role3')];

  return (
    <section ref={sectionRef} className="min-h-[100dvh] flex items-center relative overflow-hidden" id="Inicio">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-24 pb-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting */}
            <span
              className="block font-body font-medium leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.5rem)', color: 'var(--text-secondary)' }}
            >
              {t('hero.greeting')}
            </span>
            <h1 style={{ marginTop: '0.25rem' }}>
              <SplitText
                text={t('hero.name')}
                as="span"
                className="block font-display font-semibold leading-[1.05]"
                style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.75rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
                stagger={0.06}
              />
            </h1>

            {/* Role cycle */}
            <div className="mt-5 flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full status-dot flex-shrink-0" style={{ background: 'var(--accent-primary)' }} />
              <RoleCycle
                roles={roles}
                className="font-mono font-medium"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)', color: 'var(--accent-primary)' }}
              />
            </div>

            {/* Badges */}
            <motion.div
              className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: EASE_PREMIUM }}
            >
              <span className="pill-badge">
                <span className="w-1.5 h-1.5 rounded-full status-dot" style={{ background: 'var(--accent-primary)' }} />
                {t('hero.status')}
              </span>
              <span className="pill-badge">TypeScript</span>
              <span className="pill-badge">NestJS</span>
            </motion.div>

            <motion.p
              className="mt-6 max-w-lg mx-auto md:mx-0 leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)', color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE_PREMIUM }}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE_PREMIUM }}
            >
              <MagneticButton
                as="button"
                onClick={() => window.open("https://drive.google.com/file/d/1J-t-qPOVP2hqq85CteBTIR49wG7bqWLn/view?usp=sharing", "_blank")}
                className="px-8 py-3.5 rounded-full font-medium text-sm text-white cursor-pointer"
                style={{ background: 'var(--accent-primary)' }}
              >
                {t('hero.downloadCV')}
              </MagneticButton>
              <button
                onClick={() => scrollToSection('Contact')}
                data-cursor-hover
                className="relative font-medium text-sm cursor-pointer group"
                style={{ color: 'var(--text-primary)' }}
              >
                {t('hero.writeMe')}
                <span
                  className="absolute left-0 -bottom-1 w-full h-px origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0"
                  style={{ background: 'var(--text-primary)' }}
                />
                <span
                  className="absolute left-0 -bottom-1 w-full h-px origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: 'var(--accent-primary)' }}
                />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE_PREMIUM }}
            >
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('hero.visitSocial')}
                  data-cursor-hover
                  className="text-lg transition-colors duration-200 hover:text-[var(--accent-primary)] cursor-pointer"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {social.id === "social-media-1" && <FaInstagram />}
                  {social.id === "social-media-2" && <FaFacebook />}
                  {social.id === "social-media-3" && <BsTwitterX />}
                  {social.id === "social-media-4" && <FaLinkedin />}
                  {social.id === "social-media-5" && <FaGithub />}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE_PREMIUM }}
          >
            <div className="relative">
              <Image
                src={perfil}
                alt={t('hero.profileAlt')}
                width={340}
                height={340}
                className="relative rounded-full w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover"
                style={{ boxShadow: '0 0 0 1px var(--card-border)' }}
                priority
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-mono text-xs whitespace-nowrap border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--glass-border)', color: 'var(--accent-primary)' }}
              >
                {t('hero.tagline')}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-10 overflow-hidden"
        style={{ background: 'var(--glass-border)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE_PREMIUM }}
      >
        <motion.span
          className="block w-px h-4"
          style={{ background: 'var(--accent-primary)' }}
          animate={{ y: [-16, 40] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: EASE_PREMIUM }}
        />
      </motion.div>
    </section>
  );
}

export default Inicio;
