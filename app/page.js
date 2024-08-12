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

        <div className="px-4 flex flex-col gap-4 text-center absolute top-[20vh] w-full bannerText">
          <h2 className="text-3xl">Titulo titulo titulo</h2>

          <p className="text-lg">
            Director absolutamente polifacético, con una dilatada carrera internacional
          </p>

          <Link
            href={"/biografia"}
            className="bg-[var(--brown)] border-2 border-[var(--gold)] hover:bg-blue-700 font-bold py-2 px-4 rounded w-fit flex self-center"
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
