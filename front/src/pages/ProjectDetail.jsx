import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import AccordionSection from "../components/AccordionSection";
import AccordionPresentation, {
  getEmbedLink,
} from "../components/AccordionComponent";
import { getOneProjet } from "../services/projectApi.js";

function ProjectDetail() {
  const location = useLocation();
  const { id } = useParams();
  const [projet, setProjet] = useState(location.state?.projet || null);

  useEffect(() => {
    if (!projet) {
      const fetchProjet = async () => {
        try {
          const data = await getOneProjet(id);
          setProjet(data);
        } catch (err) {
          console.error("Erreur récupération projet :", err);
        }
      };
      fetchProjet();
    }
  }, [id, projet]);

  if (!projet) return <p>Chargement du projet...</p>;

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-salamou title ">{projet.nom_projet}</h1>
      </div>

      <AccordionSection content={<AccordionPresentation />} className=" mb-0!">
        Présentation du projet
      </AccordionSection>

      <AccordionSection content={projet.technique_projet} className=" mb-0!">
        Techniques / Compétences utilisées
      </AccordionSection>

      <AccordionSection
        content={
          <iframe
            width="600"
            height="400"
            src={getEmbedLink(projet.lien_vdo)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mx-auto max-md:w-full"
          ></iframe>
        }
        className=" mb-20!"
      >
        Autre
      </AccordionSection>
    </>
  );
}

export default ProjectDetail;
