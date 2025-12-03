import React from "react";
import { ButtonForm } from "../components/Form";

function TableProject({
  nomProjet,
  LienProjet,
  dateProjetDebut,
  dateProjetFin,
}) {
  return (
    <>
      <tbody className="text-center">
        <tr>
          <td scope="row">{nomProjet}</td>
          <td scope="row">{LienProjet}</td>
          <td scope="row">
            {dateProjetDebut} - {dateProjetFin}
          </td>
          <td scope="row">
            <a href="">
              <ButtonForm type="button">En savoir plus</ButtonForm>
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TableProject;
