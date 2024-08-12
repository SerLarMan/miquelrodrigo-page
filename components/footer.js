import Link from "next/link";
import { navItems } from "@/lib/utils/navitems";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-secondary-100 p-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <p>Contactar a través de Email</p>
        <Button text={"CONTACTAR"} url={"/contacto"} />
      </div>

      <div className="flex flex-col">
        <p>Checkea mis redes sociales</p>
        <div className="flex">
          <Link
            href={"/contacto"}
            className="bg-[var(--brown)] border-2 border-[var(--gold)] hover:bg-blue-700 font-bold py-2 px-4 rounded w-fit flex self-center"
          >
            RED 1
          </Link>
          <Link
            href={"/contacto"}
            className="bg-[var(--brown)] border-2 border-[var(--gold)] hover:bg-blue-700 font-bold py-2 px-4 rounded w-fit flex self-center"
          >
            RED 2
          </Link>
        </div>
      </div>

      <div>
        <ul className="flex flex-wrap">
          {navItems.map((item) => (
            <li key={item.id} className="mr-2">
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span>&copy; 2024 Miquel Rodrigo. Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
