"use client";

import Image from "next/image";
import Link from "next/link";
import { DetectWindowWidth } from "@/lib/utils/window";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Variable para saber si es dispositivo movil o escritorio
  const isBreakpoint = DetectWindowWidth(1007);

  return (
    <div className="flex flex-col items-center gap-10">
      <section className="w-screen h-screen relative overflow-hidden bg-primary">
        <Image
          src="/esta.jpg"
          alt="Miquel Rodrigo dirigiendo"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
          width={500}
          height={300}
          priority
          className={`absolute object-cover brightness-90 ${isBreakpoint ? "object-[35%_0]" : "scale-105 -translate-x-40 object-left"}`}
        />

        <div
          className={`absolute grid top-20 h-[85vh] w-full ${
            isBreakpoint ? "grid-rows-2 px-7" : "grid-cols-2 px-20"
          }`}
        >
          <div></div>
          <div
            className={`flex flex-col gap-7 text-white ${
              isBreakpoint ? "justify-end" : "justify-center"
            }`}
          >
            <h2 className={isBreakpoint ? "text-5xl" : "text-7xl"}>
              Miquel Rodrigo
            </h2>

            <p className="text-lg">
              Director absolutamente polifacético, ha desarrollado una intensa y
              dilatada carrera internacional al frente de destacados conjuntos,
              orquestas y solistas en países como Alemania, Italia, Países
              Bajos, Polonia, Hungría, Rumanía, República Checa o España,
              interpretando con éxito todo tipo de estilos y repertorio
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
