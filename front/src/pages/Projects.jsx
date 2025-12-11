import React from "react";
import TableProject from "../components/TableProject.jsx";
import { ButtonForm } from "../components/Form";

function Projects({ sections }) {
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
              {sections && sections.length > 0 ? (
                sections.map((sectionItem, index) => (
                  <TableProject
                    key={index}
                    nomProjet={sectionItem.projetNom}
                    techno={sectionItem.techno}
                    LienProjet={sectionItem.projetLien}
                    projetLienNom={sectionItem.projetLienNom}
                    dateProjetDebut={sectionItem.projetDateDebut}
                    dateProjetFin={sectionItem.projetDateFin}
                    GHProjet={sectionItem.GHProjet}
                    PresentationProject={sectionItem.PresentationProject}
                    techproject={sectionItem.techproject}
                    VDOProjet={sectionItem.VDOProjet}
                    isAdmin={false}
                  />
                ))
              ) : (
                <th className="text-white text-center">
                  Aucune section ajoutée pour le moment.
                </th>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Projects;
