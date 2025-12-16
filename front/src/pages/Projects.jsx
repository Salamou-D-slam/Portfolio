import React, { useState, useEffect } from "react";
import TableProject from "../components/TableProject.jsx";
import { ButtonForm } from "../components/Form";
import { getAllProjets } from "../services/projectApi.js";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getAllProjets();
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProject();
  }, []);

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-6xl text-salamou  font-bold text-center text-white mb-6">
          Mes Projets
        </h1>
      </div>

      <div className="mt-10">
        <div className="container mx-auto p-6 border-2 bg-black/50 overflow-x-auto">
          <table className="text-white border-4 w-370 h-30 border-collapse">
            <thead>
              <tr>
                <th scope="col" className="tableProject">
                  Nom du Projet
                </th>
                <th scope="col" className="tableProject">
                  Technologies principales
                </th>
                <th scope="col" className="tableProject">
                  Lien affilé au projet
                </th>
                <th scope="col" className="tableProject">
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
    </>
  );
}

export default Projects;
