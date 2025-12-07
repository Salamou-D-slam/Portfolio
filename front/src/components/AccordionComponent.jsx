import { useLocation } from "react-router-dom";
import AccordionDetails from "@mui/material/AccordionDetails";

function AccordionPresentation() {
  const location = useLocation();
  const { projet } = location.state;
  return (
    <>
      <AccordionDetails>
        <hr /> <br />
        <p>
          <b> Lien:</b>{" "}
          <a href={projet.LienProjet} target="_blank">
            {projet.LienProjet}
          </a>
        </p>
        <p>
          <b> GitHub:</b>{" "}
          <a href={projet.LienProjet} target="_blank">
            {projet.LienProjet}
          </a>
        </p>
        <p>
          <b>Date du début :</b> {projet.dateProjetDebut}
        </p>
        <p>
          <b>Date de fin :</b> {projet.dateProjetFin}
        </p>
        <br /> <hr /> <br />
      </AccordionDetails>
    </>
  );
}

export default AccordionPresentation;
