"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/utils/navitems";
import { DetectWindowWidth } from "@/lib/utils/window";
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
  const isBreakpoint = DetectWindowWidth(1007);

  // Estilos para el menú hamburguesa que se convierte en xruz
  const style = {
    width: "30px",
    height: "5px",
    backgroundColor: "white",
    margin: "6px 0",
    transition: "0.4s",
  };

  return (
    <nav
      className={`bg-transparent bg-gradient-to-b from-black to-trasparent text-white fixed grid ${
        isBreakpoint ? "grid-cols-2 px-7" : "grid-cols-[5rem_1fr_1fr] px-20"
      } gap-20 h-24 w-full pt-7 z-10`}
    >
      {/* Nombre */}
      <div className="flex items-center justify-self-start z-30">
        <Link
          href={"/"}
          onClick={isBreakpoint && nav ? handleNav : ""}
          className={isBreakpoint ? "text-4xl" : "text-5xl"}
        >
          <h1 className={`font-bold text-white ${pageTitleFont.className}`}>
            MR
          </h1>
        </Link>
      </div>

      {/* NavLinks */}
      {isBreakpoint ? (
        /* Movile */
        <div
          className={`fixed top-0 right-0 w-full h-full flex flex-col items-center justify-center bg-primary z-20 ${
            !nav && "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item.id} className="p-4 duration-300">
                <Link
                  href={item.url}
                  onClick={handleNav}
                  className={`hoverItem text-lg ${
                    pathname === item.url &&
                    "text-secondary-300 after:w-full after:left-0 after:bg-secondary-300"
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /* Desktop */
        <div className="flex items-center">
          <ul className="flex gap-20">
            {navItems.map(
              (item) =>
                item.text != "INICIO" && (
                  <li key={item.id} className="p-4 duration-300">
                    <Link
                      href={item.url}
                      className={`hoverItem text-lg ${
                        pathname === item.url &&
                        "text-secondary-300 after:w-full after:left-0 after:bg-secondary-300"
                      }`}
                    >
                      {item.text}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-self-end z-30">
        {/* Idiomas */}
        <div className="mr-5">
          <Link
            href={""}
            className={`hoverItem ${
              !pathname.includes("/en") &&
              "text-secondary-300 after:w-full after:left-0 after:bg-secondary-300"
            }`}
          >
            {isBreakpoint ? "ES" : "Español"}
          </Link>
        </div>
        <div className="mr-5">
          <Link
            href={`en/${pathname}`}
            className={`hoverItem ${
              pathname.includes("/en") &&
              "text-secondary-300 after:w-full after:left-0 after:bg-secondary-300"
            }`}
          >
            {isBreakpoint ? "EN" : "English"}
          </Link>
        </div>

        {/* Icono menu hamburguesa */}
        {isBreakpoint && (
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
        )}
      </div>
    </nav>
  );
}
