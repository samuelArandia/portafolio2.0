"use client"
import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-scroll';
import { useLanguage } from '@/i18n/LanguageContext';

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
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold font-display text-accent-gradient counter-value">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}

function About() {
  const { t } = useLanguage();

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section className="py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16" id="About">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span className="section-number">{t('about.section')} {'//'}</span>
          <h2
            className="font-display font-bold mt-2"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            {t('about.title')}
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Terminal card */}
          <div className="md:w-5/12 flex-shrink-0" data-aos="fade-right" data-aos-duration="700">
            <div className="rounded-2xl overflow-hidden w-full max-w-[380px] mx-auto" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', boxShadow: 'var(--card-shadow)' }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="font-mono text-[11px] ml-2" style={{ color: 'var(--text-muted)' }}>~/samuel.dev</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-loose space-y-1">
                <p><span style={{ color: 'var(--accent-primary)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>whoami</span></p>
                <p style={{ color: 'var(--text-primary)' }}>Samuel Arandia</p>
                <p className="mt-2"><span style={{ color: 'var(--accent-primary)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>cat role.txt</span></p>
                <p style={{ color: 'var(--text-primary)' }}>Full Stack Developer</p>
                <p className="mt-2"><span style={{ color: 'var(--accent-primary)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>echo $LOCATION</span></p>
                <p style={{ color: 'var(--text-primary)' }}>Santiago, Chile</p>
                <p className="mt-2"><span style={{ color: 'var(--accent-primary)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>ls skills/</span></p>
                <p style={{ color: 'var(--text-secondary)' }}>React &nbsp;Vue &nbsp;Next.js &nbsp;Go &nbsp;Django</p>
                <p className="mt-2"><span style={{ color: 'var(--accent-primary)' }}>$</span> <span className="inline-block w-2 h-4 animate-pulse" style={{ background: 'var(--accent-primary)' }} /></p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:w-7/12" data-aos="fade-left" data-aos-duration="700">
            <div className="space-y-4 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)', color: 'var(--text-secondary)' }}>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
              <p className="font-semibold" style={{ color: 'var(--accent-primary)' }}>{t('about.p4')}</p>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 mt-8 p-5 rounded-2xl gradient-border-top" style={{ background: 'var(--bg-card)', boxShadow: 'var(--card-shadow)' }} data-aos="fade-up" data-aos-delay="200">
              <AnimatedCounter target={3} label={t('about.yearsExp')} suffix="+" />
              <AnimatedCounter target={5} label={t('about.projectsCompleted')} suffix="+" />
              <AnimatedCounter target={15} label={t('about.technologies')} suffix="+" />
            </div>

            {/* CTA */}
            <div className="flex justify-center md:justify-start mt-7" data-aos="fade-up" data-aos-delay="300">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-6 py-3 rounded-xl font-medium text-sm border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] hover:-translate-y-0.5 hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 cursor-pointer"
              >
                {t('about.tellMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
