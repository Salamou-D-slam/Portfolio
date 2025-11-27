import React, { useState } from "react";
import Photo from "../assets/Photo.jpg";
import ButtonHome from "../components/ButtonLink.jsx";

function Home() {
  return (
    <>
      <section className="sectionHome">
        <div className="divText">
          <div className="divSalamou">
            <h1 className="titleSalamou text-salamou">SALAMOU</h1>
            <span className="nameSpan">ISLAM DERROUICHE</span>
          </div>

          <div className="divDev">
            <h2 className="subtitleCls">DEVELOPPEUR WEB FULLSTACK</h2>
            <span className="nameSpan">REACT • PYTHON</span>
          </div>

          <div className="buttonLink">
            <ButtonHome href="/cv.pdf" download>
              Télécharger le CV
            </ButtonHome>
            <ButtonHome href="/profil">Voir le Profil</ButtonHome>
            <ButtonHome href="/contact">Contactez moi</ButtonHome>
            <ButtonHome href="/projects">Voir mes Projets</ButtonHome>
          </div>
        </div>

        <div className="imageAvatar">
          <img src={Photo} alt="Photo" className="avatarImg" />
        </div>
      </section>
    </>
  );
}

export default Home;
