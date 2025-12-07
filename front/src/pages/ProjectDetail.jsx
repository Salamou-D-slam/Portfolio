import { useLocation } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pink } from "@mui/material/colors";

import AccordionPresentation from "../components/AccordionComponent";

function ProjectDetail() {
  const location = useLocation();
  const { projet } = location.state;

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-salamou title ">{projet.nomProjet}</h1>
      </div>

      <Accordion className="sectionApply bg-black/50! text-white! mx-auto! mb-20!">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: pink[50] }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h5 className="text-4xl">Présentation du projet</h5> <br />
        </AccordionSummary>
        <AccordionPresentation />
      </Accordion>
      <Accordion className="sectionApply bg-black/50! text-white! mx-auto! mb-20!">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: pink[50] }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h5 className="text-4xl">Techniques / Compétences utilisées</h5>{" "}
          <br />
        </AccordionSummary>
        <AccordionDetails>
          <hr /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo, minus repellendus quia, maiores laborum quos amet
          doloremque alias molestiae eligendi, nulla perspiciatis autem fugiat
          error commodi. Voluptas possimus eaque esse.
        </AccordionDetails>
      </Accordion>
      <Accordion className="sectionApply bg-black/50! text-white! mx-auto! mb-20!">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: pink[50] }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h5 className="text-4xl">Présentation du projet</h5> <br />
        </AccordionSummary>
        <AccordionDetails>
          <hr /> <br />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default ProjectDetail;
