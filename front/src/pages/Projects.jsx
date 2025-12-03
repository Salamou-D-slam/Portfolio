import React from "react";
import TableProject from "../components/TableProject.jsx";

function Projects() {
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Mes Projets
        </h1>
      </div>

      <div className="container mx-auto p-6  border-2">
        <table className="text-white border-4 w-full h-30">
          <thead>
            <tr>
              <th scope="col">Nom du Projet</th>
              <th scope="col">Lien affilé au projet</th>
              <th scope="col">date du projet</th>
              <th scope="col">Bouton</th>
            </tr>
          </thead>

          {sections.length > 0 ? (
            sections.map((sectionItem, index) => (
              <TableProject
                key={index}
                nomProjet={sectionItem.projetNom}
                LienProjet={sectionItem.projetLien}
                dateProjetDebut={sectionItem.projetDateDebut}
                dateProjetFin={sectionItem.projetDateFin}
              />
            ))
          ) : (
            <p className="text-white text-center">
              Aucune section ajoutée pour le moment.
            </p>
          )}
        </table>
      </div>
    </>
  );
}

export default Projects;
