"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import { navLinks } from "@/constants";
import { BsSun } from "react-icons/bs";
import { GiDeathStar } from "react-icons/gi"
import { Link } from 'react-scroll';

function Header({ darkMode, toggleDarkMode}) {
  const [toggle, setToggle] = useState(false);
  const logoUrl = "/logo.png";

  return (
    <nav className="w-full flex py-2 px-4 sm:px-0 justify-between items-center navbar relative z-50" aria-label="Navegación principal">
      <a href="/" className="cursor-pointer">
        <Image src={logoUrl} alt="Samuel Arandia - Inicio" width={124} height={32} className="ml-2 sm:ml-5"/>
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`cursor-pointer text-base lg:text-lg mr-5 lg:mr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300${index === navLinks.length - 1 ? ' mr-0': ''}`}>
            <Link to={nav.id} smooth={true} duration={500} offset={-70}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300">
              {nav.title}
            </Link>
          </li>
        ))}
        {
          darkMode ? (
            <li>
              <BsSun onClick={toggleDarkMode} aria-label="Cambiar a modo claro" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 text-2xl cursor-pointer ml-4 mr-5 lg:mr-10" />
            </li>
          ) : (
            <li>
              <GiDeathStar onClick={toggleDarkMode} aria-label="Cambiar a modo oscuro" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-300 text-2xl cursor-pointer ml-4 mr-5 lg:mr-10" />
            </li>
          )
        }
      </ul>
      <div className="sm:hidden flex items-center gap-3">
        {
          darkMode ? (
            <BsSun onClick={toggleDarkMode} aria-label="Cambiar a modo claro" className="text-2xl cursor-pointer" />
          ) : (
            <GiDeathStar onClick={toggleDarkMode} aria-label="Cambiar a modo oscuro" className="text-2xl cursor-pointer" />
          )
        }
        {
          !toggle ? (
            <FaHamburger
              className="text-2xl cursor-pointer mr-4"
              onClick={() => setToggle((prev) => !prev)}
              aria-label="Abrir menú de navegación"
            />
          ) : (
            <AiOutlineClose
              className="text-2xl cursor-pointer mr-4"
              onClick={() => setToggle((prev) => !prev)}
              aria-label="Cerrar menú de navegación"
            />
          )
        }
      </div>
      <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gray-900 absolute top-16 right-0 mx-4 my-2 min-w-[160px] rounded-xl shadow-lg shadow-indigo-500/40 z-50`}
        >
        <ul className="list-none flex flex-col gap-4">
          {navLinks.map((nav) => (
            <li key={nav.id} className="cursor-pointer text-lg text-white">
              <Link to={nav.id} smooth={true} duration={500} offset={-70}
                onClick={() => setToggle(false)}
                className="transition ease-in-out delay-150 hover:text-indigo-400 duration-300">
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
