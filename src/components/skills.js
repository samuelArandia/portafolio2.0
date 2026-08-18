"use client"
import React, { useRef, useState, useCallback } from 'react';
import { FaVuejs, FaPython, FaHtml5, FaReact, FaCss3Alt, FaAngular, FaJava, FaGithub } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiPostgresql, SiNestjs, SiJetbrains, SiSpringboot, SiTypescript, SiAzuredevops, SiPostman, SiJavascript, SiMicrosoftazure, SiDocker } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { TbBrandVscode } from 'react-icons/tb';
import { GrGraphQl } from 'react-icons/gr';
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/constants";

const languages = [
  { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", Icon: FaPython, color: "#3776AB" },
  { name: "Java", Icon: FaJava, color: "#ED8B00" },
];

const frameworksList = [
  { name: "Vue.js", Icon: FaVuejs, color: "#4FC08D" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Angular", Icon: FaAngular, color: "#DD0031" },
  { name: "Django", Icon: DiDjango, color: "#092E20" },
  { name: "GraphQL", Icon: GrGraphQl, color: "#E10098" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
];

const toolsList = [
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Azure DevOps", Icon: SiAzuredevops, color: "#0078D7" },
  { name: "Microsoft Azure", Icon: SiMicrosoftazure, color: "#0089D6" },
  { name: "Git", Icon: BsGit, color: "#F05032" },
  { name: "VS Code", Icon: TbBrandVscode, color: "#007ACC" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "JetBrains", Icon: SiJetbrains, color: "#FE315D" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "GitHub", Icon: FaGithub, color: "#025939" },
];

const projectsUsing = (techName) =>
  projects.filter((p) => p.technologies.includes(techName)).map((p) => p.title);

function SkillMarquee({ items, direction = 'left', speed = '50s' }) {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.parentElement.scrollLeft;
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.parentElement.scrollLeft = scrollLeftRef.current - walk;
  }, [isDragging]);

  React.useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseUp]);

  const allItems = [...items, ...items];
  const animName = direction === 'left' ? 'marquee-scroll' : 'marquee-scroll-reverse';

  return (
    <div
      className="marquee-container select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={trackRef}
        className={`flex items-center w-max ${isDragging ? 'dragging' : ''}`}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          animation: `${animName} ${speed} linear infinite`,
          animationPlayState: isDragging ? 'paused' : 'running',
        }}
        onMouseEnter={(e) => { if (!isDragging) e.currentTarget.style.animationPlayState = 'paused'; }}
        onMouseLeave={(e) => { if (!isDragging) e.currentTarget.style.animationPlayState = 'running'; }}
      >
        {allItems.map((tech, i) => {
          const usedIn = projectsUsing(tech.name);
          return (
            <div
              key={`${tech.name}-${i}`}
              className="flex flex-col items-center mx-6 sm:mx-8 md:mx-10 lg:mx-12 flex-shrink-0 group"
            >
              <tech.Icon
                className="transition-all duration-300 group-hover:scale-[1.3]"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: tech.color,
                  filter: 'drop-shadow(0 0 0px transparent)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = `drop-shadow(0 0 16px ${tech.color}80)`; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)'; }}
              />
              <span
                className="mt-2.5 text-xs sm:text-sm font-medium transition-all duration-300 opacity-60 group-hover:opacity-100"
                style={{ color: 'var(--text-secondary)' }}
              >
                {tech.name}
              </span>
              <span
                className="mt-1 text-[10px] font-mono text-center leading-tight transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ color: 'var(--accent-primary)', height: '1.1em' }}
              >
                {usedIn.length > 0 ? `→ ${usedIn.join(', ')}` : ''}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className='py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16' id='Skills'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header — quiet, compact, left-aligned */}
        <Reveal className="flex items-baseline gap-3 mb-14 sm:mb-16">
          <span className="section-number">{t('skills.section')}</span>
          <h2
            className='font-display font-medium'
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', color: 'var(--text-primary)' }}
          >
            {t('skills.title')}
          </h2>
          <span className="hidden sm:block flex-1 h-px" style={{ background: 'var(--card-border)' }} />
          <p className="hidden md:block text-xs max-w-[220px] text-right" style={{ color: 'var(--text-muted)' }}>
            {t('skills.subtitle')}
          </p>
        </Reveal>

        <div className='space-y-12 sm:space-y-14 md:space-y-16'>
          {/* Languages */}
          <Reveal delay={0.05}>
            <h3 className='text-xs sm:text-sm font-semibold font-mono uppercase tracking-widest mb-6 sm:mb-8 text-center' style={{ color: 'var(--accent-primary)' }}>
              {t('skills.languages')}
            </h3>
            <SkillMarquee items={languages} direction="left" speed="30s" />
          </Reveal>

          {/* Frameworks */}
          <Reveal delay={0.1}>
            <h3 className='text-xs sm:text-sm font-semibold font-mono uppercase tracking-widest mb-6 sm:mb-8 text-center' style={{ color: 'var(--accent-primary)' }}>
              {t('skills.frameworks')}
            </h3>
            <SkillMarquee items={frameworksList} direction="right" speed="35s" />
          </Reveal>

          {/* Tools */}
          <Reveal delay={0.15}>
            <h3 className='text-xs sm:text-sm font-semibold font-mono uppercase tracking-widest mb-6 sm:mb-8 text-center' style={{ color: 'var(--accent-primary)' }}>
              {t('skills.tools')}
            </h3>
            <SkillMarquee items={toolsList} direction="left" speed="40s" />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
