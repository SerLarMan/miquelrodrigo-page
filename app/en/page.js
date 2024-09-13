import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <section className="relative bg-cover bg-no-repeat">
        <Image
          src="/bannerImg.png"
          width={500}
          height={500}
          alt="Miquel Rodrigo dirigiendo"
          className="object-cover w-full h-screen filter brightness-50"
        />

        <div className="absolute px-4 flex flex-col gap-6 top-[60vh] w-full bannerText text-white">
          <h2 className="text-5xl">Miquel Rodrigo</h2>

          <p className="text-lg">
            Conductor absolutamente polifacético, ha desarrollado una intensa y
            dilatada carrera internacional al frente de destacados conjuntos,
            orquestas y solistas en países como Alemania, Italia, Países Bajos,
            Polonia, Hungría, Rumanía, República Checa o España, interpretando
            con éxito todo tipo de estilos y repertorio
          </p>

          <div>
            <Link href={"/biografia"} className="flex gap-4">
              <div className="text-white border border-2 border-white hover:bg-primary-400 w-[3rem] h-[3rem] flex items-center justify-center rounded-3xl">
                <FontAwesomeIcon icon={faArrowRightLong} className="fa-fw" />
              </div>
              <span>Ver Completo</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">TRABAJO</h2>
      </section>

      <section>
        <h2 className="text-2xl font-bold">NOTICIAS</h2>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Calendario???</h2>
      </section>

      <section>
        <h2 className="text-2xl font-bold">RECONOCIMIENTOS</h2>
      </section>

      <section>
        <h2 className="text-2xl font-bold">CONTACTO</h2>
      </section>
    </div>
  );
}
