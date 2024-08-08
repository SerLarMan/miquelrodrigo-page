"use client";

import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "INICIO", url: "/" },
    { id: 2, text: "BIOGRAFÍA", url: "/biografia" },
    { id: 3, text: "GALERÍA", url: "/galeria" },
    { id: 4, text: "NOTICIAS", url: "/noticias" },
    { id: 5, text: "CONTACTO", url: "/contacto" },
  ];

  const style = {
    width: "35px",
    height: "5px",
    backgroundColor: "white",
    margin: "6px 0",
    transition: "0.4s",
  };

  return (
    <nav className="bg-black flex justify-between items-center h-24 w-100 mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Miquel Rodrigo
      </h1>

      {/* Mobile Navigation Icon */}
      <div className="inline-block cursor-pointer z-10" onClick={handleNav}>
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

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed right-0 top-0 w-full h-full flex flex-col items-center justify-center bg-[#000300] ease-in-out duration-500
          ${!nav && "hidden"}`}
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link href={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
