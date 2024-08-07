import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-100 flex justify-between p-4">
      <Link href="/">
        <h1>Miquel Rodrigo</h1>
      </Link>
      <ul className="flex">
        <li className="mr-4">
          <Link href="/acerca_de">Acerca de</Link>
        </li>
        <li className="mr-4">
          <Link href="/galeria">Galería</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
