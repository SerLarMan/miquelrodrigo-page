"use client";

import Link from "next/link";
import { navItems } from "@/lib/utils/navitems";
import { DetectWindowWidth } from "@/lib/utils/window";
import IconButton from "./icon-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  // Variable para saber si es dispositivo movil o escritorio
  const isBreakpoint = DetectWindowWidth(1007);

  return (
    <footer>
      <div className="bg-primary-100 p-5 flex flex-col justify-between gap-10">
        <div className="flex justify-center gap-5">
          <IconButton
            icon={<FontAwesomeIcon icon={faInstagram} className="fa-fw" />}
            url={"https://www.google.es/"}
          ></IconButton>
          <IconButton
            icon={<FontAwesomeIcon icon={faYoutube} className="fa-fw" />}
            url={"https://www.google.es/"}
          ></IconButton>
          <IconButton
            icon={<FontAwesomeIcon icon={faLinkedinIn} className="fa-fw" />}
            url={"https://www.google.es/"}
          ></IconButton>
        </div>

        <hr className={!isBreakpoint && "w-[50%] self-center"}></hr>

        <div>
          <ul
            className={`flex flex-wrap text-white justify-center mb-4 ${
              isBreakpoint ? "gap-7" : "gap-20"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="hoverItem hover:text-white hover:after:bg-white"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-primary-300 p-3 flex justify-center">
        <span className="text-primary">
          &copy; 2024 Miquel Rodrigo. Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}
