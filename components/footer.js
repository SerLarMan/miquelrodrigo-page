import Link from "next/link";
import { navItems } from "@/lib/utils/navitems";
import IconButton from "./icon-button";
import Button from "./button";
import CircumIcon from "@klarr-agency/circum-icons-react";

export default function Footer() {
  return (
    <footer className="bg-primary-500 p-10 flex flex-col justify-center gap4 text-white">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start mb-4">
          <p className="text-2xl mb-4">Contactar a través de Email</p>
          <Button text={"CONTACTAR"} url={"/contacto"} />
        </div>

        <div className="flex flex-col">
          <p className="text-lg mb-4">
            Echa un vistazo a las redes sociales para estar al día
          </p>
          <div className="flex justify-center gap-4">
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
      </div>

      <hr className="bg-white w-full h-[2px] my-7" />

      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <ul className="flex flex-wrap gap-3 font-bold justify-center mb-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-primary-300">
            &copy; 2024 Miquel Rodrigo. Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}
