"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/lib/utils/navitems";
import IconButton from "./icon-button";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { detectWindowWidth } from "@/lib/utils/window";

export default function NavBar() {
  // Estado para manejar la visibilidad del navbar
  const [nav, setNav] = useState(false);

  // Oculta o muestra el menu de nav
  const handleNav = () => {
    setNav(!nav);
  };

  const isBreakpoint = detectWindowWidth(768);

  const style = {
    width: "30px",
    height: "5px",
    backgroundColor: "white",
    margin: "6px 0",
    transition: "0.4s",
  };

  return (
    <nav className="bg-transparent bg-gradient-to-b from-black to-transparent fixed flex items-center h-24 w-full px-4 text-white z-10">
      <div className="w-full z-30">
        {/* Nombre */}
        <Link
          href={"/"}
          className={`flex mt-1 ${
            isBreakpoint ? "justify-start text-3xl" : "justify-center text-4xl"
          }`}
        >
          <h1 className="font-bold text-[#00df9a]">Miquel Rodrigo</h1>
        </Link>

        <div className="flex items-center absolute top-8 right-8">
          {/* Idiomas */}
          <div className="mr-5">
            <Link href={""} className="hoverItem">
              {isBreakpoint ? "ES" : "Español"}
            </Link>
          </div>
          <div className="mr-5">
            <Link href={""} className="hoverItem">
              {isBreakpoint ? "EN" : "English"}
            </Link>
          </div>

          {/* Icono menu hamburguesa */}
          <div className="cursor-pointer inline-block" onClick={handleNav}>
            <div
              style={style}
              className={nav && "rotate-45 translate-y-[11px]"}
            ></div>
            <div style={style} className={nav && "opacity-0"}></div>
            <div
              style={style}
              className={nav && "-rotate-45 translate-y-[-11px]"}
            ></div>
          </div>
        </div>
      </div>

      {/* Nav menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full flex flex-col items-center justify-center bg-black z-20 ${
          !nav && "hidden"
        }`}
      >
        <ul className="flex flex-col items-center">
          {/* Nav items */}
          {navItems.map((item) => (
            <li key={item.id} className="p-4 duration-300">
              <Link
                href={item.url}
                onClick={handleNav}
                className="relative hoverItem"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-between w-[5em]">
          <IconButton
            icon={<FaInstagramSquare />}
            url={"https://www.google.es/"}
          ></IconButton>
          <IconButton
            icon={<FaYoutube />}
            url={"https://www.google.es/"}
          ></IconButton>
        </div>
      </div>
    </nav>
  );
}
