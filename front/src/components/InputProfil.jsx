import React, { useState, useEffect } from "react";
import FormText, { FormTextrea, ButtonForm } from "./Form.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pink } from "@mui/material/colors";

function InputProfil({ section, onAdd }) {
  const [inputText, setInputText] = useState({
    nom_section: "",
    description_section: "",
  });

  useEffect(() => {
    if (section) {
      setInputText({
        nom_section: section.nom_section,
        description_section: section.description_section,
      });
    }
  }, [section]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((previnputText) => {
      return {
        ...previnputText,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // empêche le refresh de la page
    if (onAdd) onAdd(inputText); // envoie les données au parent

    setInputText({
      nom_section: "",
      description_section: "",
    }); // reset form
  }
  return (
    <>
      {/* <section> */}
      <Accordion
        className={`sectionApply bg-black/50! text-white! mx-auto! border rounded p-4 whitespace-pre-wrap`}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: pink[50] }}
              style={{ whiteSpace: "pre-wrap" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h5 className="text-4xl">
            Ajouter une nouvelle section dans le profil
          </h5>
          <br /> <br />
        </AccordionSummary>
        <AccordionDetails>
          <div className="sectionApply text-white p-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <FormText
                  htmlFor="nom_section"
                  type="text"
                  id="nom_section"
                  name="nom_section"
                  value={inputText.nom_section}
                  onChange={handleChange}
                >
                  Nom de la section
                </FormText>

                <FormTextrea
                  htmlFor="description_section"
                  id="description_section"
                  name="description_section"
                  value={inputText.description_section}
                  onChange={handleChange}
                >
                  Titre de la section
                </FormTextrea>

                <ButtonForm type="submit"> Ajouter la section</ButtonForm>
              </div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* </section> */}
    </>
  );
}

export default InputProfil;
