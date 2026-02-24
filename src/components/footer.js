"use client"
import React from "react";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { socialMedia } from "@/constants";
import { navLinks } from "@/constants";
import { projects } from "@/constants";
import { Link } from "react-scroll";

function Footer() {
  const logoUrl = "/logo.png";
  const year = new Date().getFullYear();

    return (
      <footer className="pt-12 sm:pt-16 px-6 sm:px-10 bg-gray-900/50 border-t border-gray-800" id="Footer">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="text-center sm:text-left">
              <h2 className="text-base sm:text-lg font-semibold text-indigo-400 mb-3">Sobre mí</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Mi nombre es Samuel Arandia, soy Técnico en Programación y Análisis de Sistemas, titulado en Instituto AIEP y actualmente me encuentro viviendo en Santiago de Chile.</p>
              <div className="flex justify-center sm:justify-start mt-4">
                <Image src={logoUrl} alt="Samuel Arandia Logo" width={100} height={100}/>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-base sm:text-lg font-semibold text-indigo-400 mb-3">Portafolio</h2>
              <ul className="list-none space-y-2">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    >
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-base sm:text-lg font-semibold text-indigo-400 mb-3">Menú</h2>
              <ul className="list-none space-y-2">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <Link to={nav.id} smooth={true} duration={500} offset={-70}
                      className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors duration-200 cursor-pointer">
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800">
            <div className="flex justify-center gap-5 sm:gap-6 mb-6">
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.id.replace('social-media-', 'red social ')}`}
                  className="p-2 rounded-lg text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200 text-xl sm:text-2xl cursor-pointer"
                >
                  {social.id === "social-media-1" && <FaInstagram />}
                  {social.id === "social-media-2" && <FaFacebook />}
                  {social.id === "social-media-3" && <BsTwitterX />}
                  {social.id === "social-media-4" && <FaLinkedin />}
                  {social.id === "social-media-5" && <FaGithub />}
                </a>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 pb-6">© {year} Samuel Arandia. Todos los derechos reservados. Hecho con ❤</p>
          </div>
        </div>
      </footer>
    )

}

export default Footer;
