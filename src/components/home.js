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
    Aos.init();
  }, []);

  const contactId = "Contact"

  return (
    <section className="min-h-[100dvh] flex items-center relative overflow-hidden" id="Inicio">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 leading-tight" data-aos="fade-up">
              Hola, Soy Samuel Arandia
            </h1>
            <div className="mt-3 sm:mt-4" data-aos="fade-up" data-aos-delay="200">
              <TypeAnimation
                sequence={['Desarrollador de Software', 1500, 'Analista y Programador de Sistemas', 1500, 'Bienvenido a mi portafolio', 1500]}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-400"
                cursor={true}
                repeat={Infinity}
              />
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mt-4 sm:mt-6 max-w-xl mx-auto md:mx-0 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Estoy preparado para afrontar desafíos y proyectos de alto impacto.
              Siempre estoy buscando aprender y crecer como profesional, aportando experiencia y creatividad.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1J-t-qPOVP2hqq85CteBTIR49wG7bqWLn/view?usp=sharing", "_blank")}
                className="text-white rounded-xl px-7 py-3.5 font-medium transition-all duration-300 bg-indigo-500 hover:-translate-y-1 hover:bg-indigo-600 shadow-lg shadow-indigo-500/25 cursor-pointer text-sm sm:text-base"
              >
                Descargar CV
              </button>
              <Link
                to={contactId} smooth={true} duration={500} offset={-70}
                className="rounded-xl px-7 py-3.5 font-medium transition-all duration-300 border-2 border-indigo-500/50 text-indigo-400 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 cursor-pointer text-center text-sm sm:text-base"
              >
                Escríbeme
              </Link>
            </div>

            {/* Social links */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8" data-aos="fade-up" data-aos-delay="500">
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.id.replace('social-media-', 'red social ')}`}
                  className="p-2.5 rounded-xl border border-gray-700/50 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 text-xl sm:text-2xl cursor-pointer text-gray-400"
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
          <div className="flex-shrink-0" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-500/30 to-violet-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-20"></div>
              <Image
                src={perfil}
                alt="Foto de perfil de Samuel Arandia"
                width={300}
                height={300}
                className="relative rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover shadow-2xl ring-2 ring-indigo-500/20"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Inicio;
