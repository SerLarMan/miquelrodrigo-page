"use client";

import IconButton from "./icon-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/utils/navitems";
import { DetectWindowWidth } from "@/lib/utils/window";
import CircumIcon from "@klarr-agency/circum-icons-react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const pageTitleFont = localFont({ src: "../public/fonts/Charm-Bold.ttf" });

export default function NavBar() {
  const pathname = usePathname();

  // Estado para manejar la visibilidad del navbar
  const [nav, setNav] = useState(false);

  // Oculta o muestra el menu de nav
  const handleNav = () => {
    setNav(!nav);
  };

  // Variable para saber si es dispositivo movil o escritorio
  const isBreakpoint = DetectWindowWidth(768);

  // Estilos para el menú hamburguesa que se convierte en xruz
  const style = {
    width: "30px",
    height: "5px",
    backgroundColor: "white",
    margin: "6px 0",
    transition: "0.4s",
  };

  return (
    <nav className="bg-transparent bg-gradient-to-b from-black to-trasparent text-white fixed flex items-center h-24 w-full px-4 z-10">
      <div className="w-full z-30">
        {/* Nombre */}
        <Link
          href={"/"}
          className={`flex mt-1 ${
            isBreakpoint ? "justify-start text-4xl" : "justify-center text-5xl"
          }`}
        >
          <h1 className={`font-bold text-white ${pageTitleFont.className}`}>
            Miquel Rodrigo
          </h1>
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
        className={`fixed top-0 right-0 w-full h-full flex flex-col items-center justify-center bg-primary-600 z-20 ${
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
                className={`relative hoverItem text-lg ${
                  pathname === item.url &&
                  "text-secondary-300 after:w-full after:left-0 after:bg-secondary-300"
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-5 items-center w-full">
          <IconButton
            icon={<CircumIcon name="instagram" size="1.5rem" />}
            text={"Instagram"}
            url={"https://www.google.es/"}
          ></IconButton>
          <IconButton
            icon={<CircumIcon name="youtube" size="1.5rem" />}
            text={"Youtube"}
            url={"https://www.google.es/"}
          ></IconButton>
        </div>
      </div>
    </nav>
  );
}
