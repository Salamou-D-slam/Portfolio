import React, { useState, useEffect } from "react";
import Photo from "../assets/PP.png";
import ButtonHome from "../components/ButtonLink.jsx";

function Home() {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1023);
  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1023);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
            <span className="nameSpan">REACT • NODE</span>
          </div>

          <div className="buttonLink">
            {!isSmall && (
              <>
                <ButtonHome
                  to="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visualisez mon CV
                </ButtonHome>
                <ButtonHome to="/profil">Voir mon Profil</ButtonHome>
                <ButtonHome to="/projets">Voir mes Projets</ButtonHome>
                <ButtonHome to="/contact">Contactez moi</ButtonHome>
              </>
            )}

            {isSmall && (
              <ButtonHome
                to="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visualisez le CV
              </ButtonHome>
            )}
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
