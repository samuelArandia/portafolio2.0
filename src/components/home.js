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

function Inicio() {
  const perfil = "/perfil.png";

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const contactId = "Contact";

  return (
    <section className="min-h-[100dvh] flex items-center relative overflow-hidden" id="Inicio">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-[var(--accent-primary)] rounded-full opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-[var(--accent-secondary)] rounded-full opacity-[0.04] blur-[100px] pointer-events-none" />

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
              Hola, Soy Samuel Arandia
            </h1>

            <div className="mt-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
              <TypeAnimation
                sequence={[
                  'Desarrollador de Software', 1500,
                  'Analista y Programador de Sistemas', 1500,
                  'Bienvenido a mi portafolio', 1500,
                ]}
                className="font-display font-semibold text-[var(--text-secondary)]"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)' }}
                cursor={true}
                repeat={Infinity}
              />
            </div>

            <p
              className="text-[var(--text-muted)] mt-5 max-w-lg mx-auto md:mx-0 leading-relaxed"
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)' }}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              Estoy preparado para afrontar desafíos y proyectos de alto impacto.
              Siempre estoy buscando aprender y crecer como profesional, aportando experiencia y creatividad.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row justify-center md:justify-start gap-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1J-t-qPOVP2hqq85CteBTIR49wG7bqWLn/view?usp=sharing", "_blank")}
                className="px-7 py-3 rounded-xl font-medium text-sm text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                style={{ background: 'var(--accent-gradient)', boxShadow: '0 8px 30px rgba(224, 64, 251, 0.25)' }}
              >
                Descargar CV
              </button>
              <Link
                to={contactId}
                smooth={true}
                duration={500}
                offset={-80}
                className="px-7 py-3 rounded-xl font-medium text-sm border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] hover:-translate-y-0.5 hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 cursor-pointer text-center"
              >
                Escríbeme
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
                  aria-label={`Visitar ${social.id.replace('social-media-', 'red social ')}`}
                  className="p-2.5 rounded-xl border border-white/[0.08] text-[var(--text-muted)] text-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-primary)]/30 hover:text-[var(--accent-primary)] hover:shadow-lg hover:shadow-[var(--accent-primary)]/10 cursor-pointer"
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
              {/* Animated glow */}
              <div className="absolute -inset-4 rounded-full animate-glow-pulse" style={{ background: 'var(--accent-gradient)', opacity: 0.15, filter: 'blur(30px)' }} />
              <div className="absolute -inset-1 rounded-full opacity-20" style={{ background: 'var(--accent-gradient)' }} />
              <Image
                src={perfil}
                alt="Foto de perfil de Samuel Arandia"
                width={300}
                height={300}
                className="relative rounded-full w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover shadow-2xl ring-2 ring-[var(--accent-primary)]/20"
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
