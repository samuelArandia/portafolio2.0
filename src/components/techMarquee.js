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

  const allTechs = [...techs, ...techs];

  return (
    <div className="py-8 sm:py-10">
      <div
        className="marquee-container select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          ref={trackRef}
          className={`marquee-track items-center ${isDragging ? 'dragging' : ''}`}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {allTechs.map((tech, i) => (
            <tech.Icon
              key={`${tech.name}-${i}`}
              className="mx-6 sm:mx-8 md:mx-10 flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--text-muted)',
                opacity: 0.45,
              }}
              aria-label={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechMarquee;
