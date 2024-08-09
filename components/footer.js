import Link from "next/link";
import { navItems } from "@/lib/utils/navitems";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-4">
      <ul className="flex">
        {navItems.map((item) => (
          <li key={item.id} className="mr-2">
            <Link href={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col items-center mt-4">
        <li>
          <Link href="/acerca_de">POLÍTICA DE PRIVACIDAD</Link>
        </li>
        <li>
          <Link href="/acerca_de">TÉRMINOS Y CONDICIONES</Link>
        </li>
      </ul>
      <span>Copyright &copy; Miquel Rodrigo 2024</span>
    </footer>
  );
}
