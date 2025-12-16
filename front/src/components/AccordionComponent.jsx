import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneProjet } from "../services/projectApi.js";
import AccordionDetails from "@mui/material/AccordionDetails";

function AccordionPresentation() {
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
      <AccordionDetails>
        <p>
          <b> Lien:</b>{" "}
          <a href={projet.lien_url} target="_blank">
            {projet.lien_url}
          </a>
        </p>
        <p>
          <b> GitHub:</b>{" "}
          <a href={projet.lien_gh} target="_blank">
            {projet.lien_gh}
          </a>
        </p>
        <p>
          <b>Date du début :</b> {projet.date_debut}
        </p>
        <p>
          <b>Date de fin :</b> {projet.date_fin}
        </p>
        <br /> <hr /> <br />
        {projet.presentation_projet}
      </AccordionDetails>
    </>
  );
}

function getEmbedLink(link) {
  if (!link) return "";

  // Youtu.be
  if (link.includes("youtu.be")) {
    const videoId = link.split("/").pop().split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Youtube watch
  if (link.includes("youtube.com/watch")) {
    const url = new URL(link);
    const videoId = url.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return link; // autre lien vidéo
}

export default AccordionPresentation;
export { getEmbedLink };
