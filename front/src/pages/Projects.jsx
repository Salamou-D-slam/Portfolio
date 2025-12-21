import React, { useState, useEffect } from "react";
import TableProject from "../components/TableProject.jsx";
import { ButtonForm } from "../components/Form";
import { getAllProjets } from "../services/projectApi.js";
import ContactLink from "../components/ContactLink.jsx";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import CircularProgress from "@mui/material/CircularProgress";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getAllProjets();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);

  if (loading)
    return (
      <div className="mt-20 flex flex-col items-center">
        <CircularProgress />
        <span>Chargement en cours… Veuillez patienter</span>
      </div>
    );

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-6xl text-salamou  font-bold text-center text-white mb-6">
          Mes Projets
        </h1>
      </div>

      <div className="mt-10 mb-10">
        <div className="container mx-auto p-6 border-2 bg-black/50 overflow-x-auto">
          <table className="text-white border-4 w-370 max-sm:w-full h-30 border-collapse">
            <thead>
              <tr>
                <th scope="col" className="tableProject">
                  Nom du Projet
                </th>
                <th scope="col" className="tableProject max-sm:hidden">
                  Technologies principales
                </th>
                <th scope="col" className="tableProject max-sm:hidden">
                  Lien affilé au projet
                </th>
                <th scope="col" className="tableProject max-sm:hidden">
                  date du projet (Début-Fin)
                </th>
                <th scope="col" className="tableProject">
                  Détail du projet
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <TableProject
                    key={project.id}
                    id={project.id}
                    nom_projet={project.nom_projet}
                    techno={project.techno}
                    lien_url={project.lien_url}
                    lien_nom={project.lien_nom}
                    lien_gh={project.lien_gh}
                    lien_vdo={project.lien_vdo}
                    date_debut={project.date_debut}
                    date_fin={project.date_fin}
                    presentation_projet={project.presentation_projet}
                    technique_projet={project.technique_projet}
                    isAdmin={false}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-white text-center">
                    Aucune section ajoutée pour le moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="sectionApply contactHoverDiv outlineApply text-white">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Voir mes petits projet
        </h1>

        <div className="container flex flex-wrap mt-4 gap-6 p-4 rounded-lg justify-center ">
          <ContactLink
            href="https://github.com/Salamou-D-Islam"
            target="_blank"
            title="Mon GitHub"
          >
            <GitHubIcon sx={{ fontSize: 90 }} />
          </ContactLink>

          <ContactLink
            href="https://www.youtube.com/@Islam-d19"
            target="_blank"
            title="Ma chaîne Youtube"
          >
            <YouTubeIcon sx={{ fontSize: 90 }} />
          </ContactLink>

          <ContactLink
            href="https://www.instagram.com/salamou_js/"
            target="_blank"
            title="Mon Instagram"
          >
            <InstagramIcon sx={{ fontSize: 90 }} />
          </ContactLink>
        </div>
      </div>
    </>
  );
}

export default Projects;
