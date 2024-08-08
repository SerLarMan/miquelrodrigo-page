import Link from "next/link";
import Nav from "./nav";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-4">
      <ul className="flex flex-col items-center mt-4">
        <li>
          <Link href="/acerca_de">POLÍTICA DE PRIVACIDAD</Link>
        </li>
        <li>
          <Link href="/acerca_de">TÉRMINOS Y CONDICIONES</Link>
        </li>
      </ul>
      <span className="mb-2">Hecho por Sergio Lara</span>
      <span>&copy; Miquel Rodrigo</span>
    </footer>
  );
}
