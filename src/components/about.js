"use client"
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-scroll';

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
      <div className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">{label}</div>
    </div>
  );
}

function About() {
  const svg = "/Web Developer_Monochromatic.svg";

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section className="py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16" id="About">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2
            className="font-display font-bold text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Sobre mí
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Illustration */}
          <div className="md:w-5/12 flex-shrink-0" data-aos="fade-right" data-aos-duration="700">
            <Image
              src={svg}
              alt="Ilustración de desarrollador web"
              width={450}
              height={450}
              className="w-full max-w-[320px] sm:max-w-[400px] mx-auto"
            />
          </div>

          {/* Text */}
          <div className="md:w-7/12" data-aos="fade-left" data-aos-duration="700">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
              <p>
                ¡Hola! Soy desarrollador de software y resido en Santiago de Chile.
                Actualmente estudio Ingeniería en Computación e Informática en la Universidad Andrés Bello.
                También tengo formación en el instituto AIEP y me considero una persona autodidacta y comunicativa.
              </p>
              <p>
                Disfruto desarrollar proyectos y siempre estoy en la búsqueda de oportunidades para aprender nuevas habilidades y perfeccionar mis conocimientos.
                Me destaco en el trabajo en equipo, donde colaboro estrechamente con otros desarrolladores para resolver desafíos y compartir experiencias.
              </p>
              <p>
                Fuera del trabajo, disfruto leer, escuchar música y hacer ejercicio, especialmente ir al GYM y salir a trotar.
                También me encanta la música rap y alternativa.
              </p>
              <p className="font-semibold text-[var(--accent-primary)]">¿Qué tipo de música te gusta?</p>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 mt-8 p-5 rounded-xl glass" data-aos="fade-up" data-aos-delay="200">
              <AnimatedCounter target={3} label="Años de experiencia" suffix="+" />
              <AnimatedCounter target={5} label="Proyectos completados" suffix="+" />
              <AnimatedCounter target={15} label="Tecnologías" suffix="+" />
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
                Cuéntame más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
