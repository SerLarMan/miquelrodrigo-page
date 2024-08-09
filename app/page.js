import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative">
        <img
          src="/conductor.png"
          alt=""
          className="object-cover w-full h-screen filter brightness-50"
        />

        <div className="px-4 flex flex-col gap-4 text-center text-white absolute top-[20vh] w-full bannerText">
          <h2 className="text-3xl">Titulo titulo titulo</h2>

          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            quam sodales, elementum lacus sit amet, elementum massa. Maecenas
            eget auctor neque. In sit amet eleifend ipsum. Fusce ac nisl arcu.
            Ut maximus turpis nec turpis egestas, eget tristique ex fermentum.
            In in augue ut lorem lacinia pharetra vitae nec nibh. Suspendisse
            potenti.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            quam sodales, elementum lacus sit amet, elementum massa. Maecenas
            eget auctor neque. In sit amet eleifend ipsum. Fusce ac nisl arcu.
            Ut maximus turpis nec turpis egestas, eget tristique ex fermentum.
            In in augue ut lorem lacinia pharetra vitae nec nibh. Suspendisse
            potenti.
          </p>

          <Link
            href={"/biografia"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit flex self-center"
          >
            LEER MÁS
          </Link>
        </div>
      </section>

      <section className="h-[100em]">
        <h2>Trabajo</h2>
      </section>

      <section>
        <h2>Última Noticia</h2>
      </section>

      <section>
        <h2>Calendario???</h2>
      </section>

      <section>
        <h2>Videos YT</h2>
      </section>
    </>
  );
}
