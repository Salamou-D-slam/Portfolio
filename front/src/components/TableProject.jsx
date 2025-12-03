import React from "react";
import { ButtonForm } from "../components/Form";

function TableProject({
  nomProjet,
  LienProjet,
  projetLienNom,
  dateProjetDebut,
  dateProjetFin,
}) {
  return (
    <>
      <tr>
        <td scope="row">{nomProjet}</td>
        <td scope="row">
          <a href={LienProjet} target="_blank">
            {projetLienNom}
          </a>
        </td>
        <td scope="row">
          {dateProjetDebut} - {dateProjetFin}
        </td>
        <td scope="row">
          <a href="">
            <ButtonForm type="button">En savoir plus</ButtonForm>
          </a>
        </td>
      </tr>
    </>
  );
}

export default TableProject;
