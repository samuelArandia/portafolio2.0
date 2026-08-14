"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from '@/i18n/LanguageContext';
import { EASE_PREMIUM } from "@/lib/motion";

const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_PREMIUM } },
};

const clipVariants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  show: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 1, ease: EASE_PREMIUM } },
};

const PortfolioCard = ({ imageSrc, title, subtitle, link, description, technologies, techNames, index }) => {
  const { t } = useLanguage();

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      className="group block rounded-2xl overflow-hidden transition-shadow duration-300 border"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--card-border)',
        boxShadow: 'var(--card-shadow)',
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <div className="flex flex-col md:flex-row">
        {/* Content side */}
        <motion.div variants={fadeVariants} className="md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
          {/* Project number */}
          <span className="font-mono text-xs mb-2" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>
            {String(index + 1).padStart(2, '0')} /
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--accent-primary)' }}>
            {subtitle}
          </p>
          <h3 className="font-display font-semibold text-xl sm:text-2xl md:text-3xl mb-3" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          <div className="w-10 h-0.5 rounded-full mb-3" style={{ background: 'var(--accent-primary)' }} />
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1.5 mb-5 font-mono text-xs">
            <span style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>stack:</span>
            {technologies.map((Icon, i) => (
              <span key={i} className="flex items-center gap-2.5">
                {i > 0 && <span style={{ color: 'var(--text-muted)', opacity: 0.4 }}>/</span>}
                <span className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                  <span className="tech-icon-accent flex items-center opacity-80"><Icon className="text-[13px]" /></span>
                  {techNames && techNames[i] && <span>{techNames[i]}</span>}
                </span>
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--accent-primary)]"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('portfolio.viewProject')} <FiExternalLink className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          variants={clipVariants}
          className="relative overflow-hidden md:w-1/2 h-[200px] sm:h-[240px] md:h-auto md:min-h-[300px] order-1 md:order-2"
        >
          <Image
            src={imageSrc || "/placeholder.png"}
            alt={`${t('portfolio.coverAlt')} ${title}`}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default PortfolioCard;
