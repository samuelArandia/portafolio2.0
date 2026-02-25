"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaVuejs, FaPython, FaHtml5, FaReact, FaCss3Alt, FaAngular, FaJava, FaGithub } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiPostgresql, SiNestjs, SiSpringboot, SiTypescript, SiTailwindcss, SiDocker, SiJavascript } from 'react-icons/si';
import { TbBrandNextjs, TbBrandGolang } from 'react-icons/tb';
import { GrGraphQl } from 'react-icons/gr';

const techs = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: FaReact },
  { name: "Vue.js", Icon: FaVuejs },
  { name: "Next.js", Icon: TbBrandNextjs },
  { name: "Angular", Icon: FaAngular },
  { name: "Python", Icon: FaPython },
  { name: "Django", Icon: DiDjango },
  { name: "Go", Icon: TbBrandGolang },
  { name: "Java", Icon: FaJava },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "GraphQL", Icon: GrGraphQl },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "GitHub", Icon: FaGithub },
];

function TechMarquee() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.parentElement.scrollLeft;
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.parentElement.scrollLeft = scrollLeft.current - walk;
  }, [isDragging]);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    startX.current = e.touches[0].pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.parentElement.scrollLeft;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.parentElement.scrollLeft = scrollLeft.current - walk;
  }, [isDragging]);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseUp]);

  // Duplicate for seamless loop
  const allTechs = [...techs, ...techs];

  return (
    <div className="py-10 sm:py-14 border-y" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-6">
        <p className="text-xs sm:text-sm font-semibold font-display uppercase tracking-widest text-center" style={{ color: 'var(--accent-primary)' }}>
          Tecnologías con las que trabajo
        </p>
      </div>
      <div
        className="marquee-container select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          ref={trackRef}
          className={`marquee-track ${isDragging ? 'dragging' : ''}`}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {allTechs.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 px-6 sm:px-8 py-3 mx-2 rounded-full border whitespace-nowrap transition-all duration-200 hover:border-[var(--accent-primary)]/30"
              style={{ borderColor: 'var(--card-border)', background: 'var(--glass-bg)' }}
            >
              <tech.Icon className="text-base sm:text-lg flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-sm sm:text-base font-medium" style={{ color: 'var(--text-secondary)' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechMarquee;
