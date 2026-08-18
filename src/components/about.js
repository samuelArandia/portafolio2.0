"use client"
import React, { useEffect, useState, useRef } from "react";
import { scrollToSection } from "@/components/motion/scrollToSection";
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import CodeWindow from "@/components/motion/CodeWindow";

function AnimatedCounter({ target, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display font-semibold counter-value" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}>
        {count}<span style={{ color: 'var(--accent-primary)' }}>{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm mt-1 font-mono" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}

function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16" id="About">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          {/* Text column */}
          <div className="flex-1 lg:max-w-xl">
            <span className="section-number">{t('about.section')} {'//'} {t('about.title')}</span>

            {/* Editorial opening statement */}
            <h2 className="font-display font-medium leading-[1.15] mt-4" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.75rem)', color: 'var(--text-primary)' }}>
              <SplitText text={t('about.p1')} stagger={0.012} duration={0.7} />
            </h2>

            <Reveal delay={0.1} className="mt-8 space-y-4 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.15vw, 1.05rem)', color: 'var(--text-secondary)' }}>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
              <p className="font-semibold" style={{ color: 'var(--accent-primary)' }}>{t('about.p4')}</p>
            </Reveal>

            {/* Counters */}
            <RevealGroup className="grid grid-cols-3 gap-6 sm:gap-10 mt-14 pt-10" stagger={0.12} style={{ borderTop: '1px solid var(--card-border)' }}>
              <RevealItem><AnimatedCounter target={3} label={t('about.yearsExp')} suffix="+" /></RevealItem>
              <RevealItem><AnimatedCounter target={5} label={t('about.projectsCompleted')} suffix="+" /></RevealItem>
              <RevealItem><AnimatedCounter target={15} label={t('about.technologies')} suffix="+" /></RevealItem>
            </RevealGroup>

            {/* CTA */}
            <Reveal delay={0.15} className="mt-10">
              <button
                onClick={() => scrollToSection('Contact')}
                data-cursor-hover
                className="px-6 py-3 rounded-full font-medium text-sm border hover:-translate-y-0.5 hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 cursor-pointer"
                style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
              >
                {t('about.tellMore')}
              </button>
            </Reveal>
          </div>

          {/* Code column */}
          <div className="lg:w-[400px] flex-shrink-0 lg:sticky lg:top-28">
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
