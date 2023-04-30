"use client"
import React from "react";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { socialMedia } from "@/constans";
import { navLinks } from "@/constans";
import { projects } from "@/constans";
import { Link } from "react-scroll";  

function Footer() {
  const logoUrl = "/logo.png";
  const year = new Date().getFullYear();

    return ( 
      <footer className="min-h-">
      <div className="">
        <div className="flex flex-wrap justify-around text-center ">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl text-indigo-400">Sobre mí</h2>
            <div className="">
              <p>Mi nombre es Samuel Arandia, soy  Técnico en Programación y Análisis de Sistemas, titutado en Instituto AIEP y actuamente me encuentro viviendo en Santiago de chile.</p>
            </div>
            <div className="w-full">
              <Image src={logoUrl} alt="Logo" width={100} height={100}/>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl text-indigo-400 m-3">Portafolio</h2>
            <div className="">
              <ul className="list-none">
                {projects.map((project) => (
                  <li key={project.id} className="cursor-pointer text-xl ">
                    <a 
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300"
                      >
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="text-indigo-400 text-2xl m-3">Menú</h2>
            <ul className="list-none items-center">
              {navLinks.map((nav) => (
                <li key={nav.id} className="cursor-pointer text-xl">
                  <Link to={nav.id} smooth={true} duration={500} offset={-70}
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300">
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
          <div className="flex-col justify-center ">
            <div className="flex flex-col">
              <h2 className="text-indigo-400 text-2xl m-5 text-center">Sígueme</h2>
              <div className="">
                <div className="flex flex-row text-center justify-center p-5">
                  {socialMedia.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" mr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 text-3xl cursor-pointer"
                    >
                      {social.id === "social-media-1" && <FaInstagram />}
                      {social.id === "social-media-2" && <FaFacebook />}
                      {social.id === "social-media-3" && <FaTwitter />}
                      {social.id === "social-media-4" && <FaLinkedin />}
                      {social.id === "social-media-5" && <FaGithub />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <p className="border-t-2 border-t-indigo-300 flex-row text-center shadow-lg shadow-indigo-500/40 justify-center p-5">©{year} Samuel Arandia. Todos los derechos reservados. Hecho como ❤</p>
          </div>
      </div>
      </footer>
    )

}

export default Footer;