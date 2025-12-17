import React, { useState, useEffect } from "react";
import SectionProfil from "../components/SectionProfil.jsx";
import { getAllSections } from "../services/profilApi.js";

function Profi() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const data = await getAllSections();
        setSections(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSections();
  }, []);

  return (
    <>
      <div className="container mx-auto p-6 border rounded whitespace-pre-wrap">
        <h1 className="text-6xl text-salamou font-bold text-center text-white mb-6">
          Mon Profil
        </h1>

        {sections && sections.length > 0 ? (
          sections.map((section) => (
            <SectionProfil
              key={section.id}
              id={section.id}
              title={section.nom_section}
              desc={section.description_section}
              isAdmin={false}
            />
          ))
        ) : (
          <p className="text-white text-center">Aucune section disponible.</p>
        )}
      </div>
    </>
  );
}

export default Profi;

{
  /* <section className="sectionApply text-white p-10 contactHoverDiv hover:bg-gray-800">
        <div className="mb-6 text-3xl">
          <h1>{props.title}</h1>
        </div>
        <div className="text-lg">
          <p>{props.desc}</p>
           <p>
            Je suis Islam Derrouiche, un jeune développeur web fullstack junior.
            Passionné par la technologie et le développement web, je développe
            des applications web en frontend avec du HTML/CSS et JavaScript avec
            React en framwork, et backend avec NodeJS et Python(FastAPI /
            Flask). Mon objectif est de créer des applications web innovantes et
            performantes qui répondent aux besoins des utilisateurs.
          </p> 
        </div>
      </section> */
}
