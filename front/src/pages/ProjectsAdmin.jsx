import React, { useState } from "react";
import InputProject from "../components/InputProject.jsx";
import TableProject from "../components/TableProject.jsx";

function ProjectsAdmin({ sections, setSections }) {
  //const [sections, setSections] = useState([]);

  function addSection(newSection) {
    setSections((prev) => [...prev, newSection]);
  }

  return (
    <div className="container mx-auto p-6">
      <InputProject onAdd={addSection} />

      <div className="mt-10">
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
            <tbody className="text-center">
              {sections.length > 0 ? (
                sections.map((sectionItem, index) => (
                  <TableProject
                    key={index}
                    nomProjet={sectionItem.projetNom}
                    LienProjet={sectionItem.projetLien}
                    projetLienNom={sectionItem.projetLienNom}
                    dateProjetDebut={sectionItem.projetDateDebut}
                    dateProjetFin={sectionItem.projetDateFin}
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
    </div>
  );
}

export default ProjectsAdmin;
