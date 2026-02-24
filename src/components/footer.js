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
      <footer className="mt-10 sm:mt-20 px-4 sm:px-6" id="Contact">
      <div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-around text-center gap-6 sm:gap-4">
          <div className="w-full sm:w-auto md:w-1/4 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl text-indigo-400">Sobre mí</h2>
            <div>
              <p className="text-sm sm:text-base mt-2">Mi nombre es Samuel Arandia, soy Técnico en Programación y Análisis de Sistemas, titulado en Instituto AIEP y actualmente me encuentro viviendo en Santiago de Chile.</p>
            </div>
            <div className="flex justify-center sm:justify-start mt-3">
              <Image src={logoUrl} alt="Samuel Arandia Logo" width={100} height={100}/>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl text-indigo-400 mb-2 sm:m-3">Portafolio</h2>
            <ul className="list-none space-y-1">
              {projects.map((project) => (
                <li key={project.id} className="cursor-pointer text-base sm:text-xl">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition ease-in-out delay-150 hover:text-indigo-700 duration-300"
                    >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-indigo-400 text-xl sm:text-2xl mb-2 sm:m-3">Menú</h2>
            <ul className="list-none space-y-1">
              {navLinks.map((nav) => (
                <li key={nav.id} className="cursor-pointer text-base sm:text-xl">
                  <Link to={nav.id} smooth={true} duration={500} offset={-70}
                    className="transition ease-in-out delay-150 hover:text-indigo-700 duration-300">
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
          <div className="mt-6 sm:mt-8">
            <div className="flex flex-col">
              <h2 className="text-indigo-400 text-xl sm:text-2xl mb-3 sm:m-5 text-center">Sígueme</h2>
              <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 p-3 sm:p-5">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${social.id.replace('social-media-', 'red social ')}`}
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 text-2xl sm:text-3xl cursor-pointer"
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
            <p className="border-t-2 border-t-indigo-300 text-center shadow-lg shadow-indigo-500/40 p-4 sm:p-5 text-sm sm:text-base">©{year} Samuel Arandia. Todos los derechos reservados. Hecho como ❤</p>
          </div>
      </div>
      </footer>
    )

}

export default Footer;
