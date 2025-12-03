import React from "react";
import { ButtonForm } from "../components/Form";

function Projects() {
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Mes Projets
        </h1>
      </div>

      <div className="container mx-auto p-6  border-2">
        <table className="text-white border-4 w-full">
          <thead>
            <tr>
              <th scope="col">Nom du Projet</th>
              <th scope="col">Lien affilé au projet</th>
              <th scope="col">date du projet</th>
              <th scope="col">Bouton</th>
            </tr>
          </thead>

          <tbody className=" text-center ">
            <tr>
              <td scope="row">Arcadia</td>
              <td scope="row">tes</td>
              <td scope="row">tes</td>
              <td scope="row">
                <a href="">
                  <ButtonForm type="button">En savoir plus</ButtonForm>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Projects;
