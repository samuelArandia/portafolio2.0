"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

const techs = [
  "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Angular",
  "Python", "Django", "Go", "Java", "NestJS", "Spring Boot",
  "GraphQL", "Tailwind CSS", "PostgreSQL", "Docker", "HTML5", "CSS3", "GitHub"
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
          className={`marquee-track ${isDragging ? 'dragging' : ''}`}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {allTechs.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display font-semibold whitespace-nowrap px-6 sm:px-8 md:px-10"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                color: 'var(--text-muted)',
                opacity: 0.6,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechMarquee;
