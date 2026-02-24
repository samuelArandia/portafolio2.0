"use client"
import React, { useState } from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"
import { navLinks } from "@/constants";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { Link } from 'react-scroll';

function Header({ darkMode, toggleDarkMode}) {
  const [toggle, setToggle] = useState(false);
  const logoUrl = "/logo.png";

  return (
    <nav className="w-full flex py-3 px-5 sm:px-8 justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/20" aria-label="Navegación principal">
      <a href="/" className="cursor-pointer">
        <Image src={logoUrl} alt="Samuel Arandia - Inicio" width={110} height={28} className=""/>
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-1 lg:gap-2">
        {navLinks.map((nav) => (
          <li key={nav.id} className="cursor-pointer">
            <Link to={nav.id} smooth={true} duration={500} offset={-70}
              className="px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 hover:bg-indigo-500/10 hover:text-indigo-500">
              {nav.title}
            </Link>
          </li>
        ))}
        <li>
          <button onClick={toggleDarkMode} aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"} className="p-2 rounded-lg transition-all duration-200 hover:bg-indigo-500/10 hover:text-indigo-500 text-xl cursor-pointer ml-2">
            {darkMode ? <BsSun /> : <BsMoonStars />}
          </button>
        </li>
      </ul>
      <div className="sm:hidden flex items-center gap-2">
        <button onClick={toggleDarkMode} aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"} className="p-2 rounded-lg text-xl cursor-pointer">
          {darkMode ? <BsSun /> : <BsMoonStars />}
        </button>
        <button
          className="p-2 rounded-lg text-2xl cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
          aria-label={toggle ? "Cerrar menú" : "Abrir menú"}
        >
          {toggle ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </div>
      <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-5 bg-gray-900/95 backdrop-blur-md absolute top-16 right-4 left-4 sm:left-auto sm:min-w-[200px] rounded-xl shadow-xl shadow-indigo-500/20 z-50 border border-gray-700/50`}
        >
        <ul className="list-none flex flex-col gap-1 w-full">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link to={nav.id} smooth={true} duration={500} offset={-70}
                onClick={() => setToggle(false)}
                className="block px-4 py-3 rounded-lg text-base text-white font-medium transition-all duration-200 hover:bg-indigo-500/20 hover:text-indigo-400 cursor-pointer">
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
