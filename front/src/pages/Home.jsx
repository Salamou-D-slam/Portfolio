import React, { useState } from "react";
import Photo from "../assets/Photo.jpg";
import ButtonHome from "../components/ButtonLink.jsx";

function Home() {
  const sectionClass =
    "container bg-black/50 w-400 h-150 max-sm:w-full max-lg:h-250 mx-auto mt-20 rounded-lg outline-2 outline-offset-2 outline-blue-50 m-40 p-9 flex flex-col max-sm:flex-col lg:flex-row items-start justify-between gap-6";
  return (
    <>
      <section className={sectionClass}>
        <div className="flex flex-col gap-6 max-w-full lg:max-w-[60%] ">
          <div className=" w-full items-center flex flex-col">
            <h1 className="text-outline text-9xl max-md:text-8xl max-sm:text-6xl font-bold text-left">
              SALAMOU
            </h1>
            <span className="text-white flex">ISLAM DERROUICHE</span>
          </div>

          <div className="mt-3 max-sm:mt-20 w-full items-center flex flex-col">
            <h2 className="text-white text-5xl max-sm:text-3xl  text-left">
              DEVELOPPEUR WEB FULLSTACK
            </h2>
            <span className="text-white flex">REACT • PYTHON</span>
          </div>
        </div>

        <div>
          <div className="bg-amber-50 w-80 h-80 max-sm:w-48 max-sm:h-48 rounded-full mx-auto lg:mx-0 mt-15 max-lg:-mt-30  max-sm:-mt-40 translate-x-30 max-lg:translate-x-0 max-sm:translate-x-0 ">
            <img
              src={Photo}
              alt="Photo"
              className="w-full h-full object-cover rounded-full outline-4 outline-offset-4 outline-blue-50 "
            />
          </div>

          <div className="flex gap-6 translate-y-10 -translate-x-170 max-xl:-translate-x-150 max-lg:-translate-y-20 max-lg:translate-x-10  max-sm:translate-x-10 max-sm:-translate-y-25 ">
            <ButtonHome href="/cv.pdf" download>
              Télécharger le CV
            </ButtonHome>
            <ButtonHome href="/profil">Voir le Profil</ButtonHome>
            <ButtonHome href="/contact">Contactez moi</ButtonHome>
            <ButtonHome href="/projects">Voir mes Projets</ButtonHome>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
