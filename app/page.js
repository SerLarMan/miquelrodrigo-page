import Image from "next/image";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";

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

        <div className="absolute px-4 flex flex-col gap-6 top-[80vh] w-full bannerText text-white">
          <h2 className="hidden">Banner title</h2>

          <p className="text-xl">
            Director absolutamente polifacético, con una dilatada carrera
            internacional.
          </p>

          <div>
            <Button
              url={"/biografia"}
              text={"LEER MÁS"}
              icon={<FaArrowRight />}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mx-5 h-[30rem]">
        <h2 className="text-2xl font-bold">TRABAJO</h2>

        <div className="flex flex-col relative w-full">
          <Image
            src="/bannerImg.png"
            width={500}
            height={500}
            alt=""
            className="rounded-t-lg md:rounded-lg md:absolute md:top-0 md:bottom-0 md:right-0 md:left-0 md:w-[90%]"
          />

          <article className="bg-primary-400 p-4 rounded-b-lg md:rounded-lg md:absolute md:right-0 md:w-[33%]">
            <h3 className="text-white text-2xl">Titulo</h3>
            <p className="text-primary-200 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
              nunc neque. Integer sed mi nulla. Proin scelerisque metus ut velit
              pulvinar iaculis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In hac habitasse platea dictumst.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">ÚLTIMA NOTICIA</h2>
      </section>

      <section>
        <h2>Calendario???</h2>
      </section>

      <section>
        <h2>Videos YT</h2>
      </section>
    </div>
  );
}
