import React, { useState, useEffect } from "react";
import FormText, { FormTextrea, ButtonForm } from "./Form.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pink } from "@mui/material/colors";

function InputProject({ onAdd }) {
  const [inputText, setInputText] = useState({
    nom_projet: "",
    techno: "",

    lien_url: "",
    lien_nom: "",
    lien_gh: "",
    lien_vdo: "",

    date_debut: "",
    date_fin: "",

    presentation_projet: "",
    technique_projet: "",
  });

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
    const payload = {
      ...inputText,
      date_debut: inputText.date_debut
        ? new Date(inputText.date_debut).toISOString()
        : null,
      date_fin: inputText.date_fin
        ? new Date(inputText.date_fin).toISOString()
        : null,
    };

    if (onAdd) onAdd(payload);

    setInputText({
      nom_projet: "",
      techno: "",

      lien_url: "",
      lien_nom: "",
      lien_gh: "",
      lien_vdo: "",

      date_debut: "",
      date_fin: "",

      presentation_projet: "",
      technique_projet: "",
    }); // reset form
  }
  return (
    <>
      <div className="container mx-auto p-6 text-white text-center">
        <h1 className="title text-salamou">Page de projets (Administrateur)</h1>
      </div>

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
            Ajouter un nouveau projet dans la page projets
          </h5>
          <br /> <br />
        </AccordionSummary>
        <AccordionDetails>
          <hr />
          <div className="sectionApply text-white p-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 space-y-3 ">
                <FormText
                  htmlFor="nom_projet"
                  type="text"
                  id="nom_projet"
                  name="nom_projet"
                  value={inputText.nom_projet}
                  onChange={handleChange}
                >
                  Nom du projet
                </FormText>

                <FormText
                  htmlFor="techno"
                  type="text"
                  id="techno"
                  name="techno"
                  value={inputText.techno}
                  onChange={handleChange}
                >
                  Technologies princpale
                </FormText>
                <FormText
                  htmlFor="lien_url"
                  type="text"
                  id="lien_url"
                  name="lien_url"
                  value={inputText.lien_url}
                  onChange={handleChange}
                >
                  Lien affilé au projet
                </FormText>
                <FormText
                  htmlFor="lien_nom"
                  type="text"
                  id="lien_nom"
                  name="lien_nom"
                  value={inputText.lien_nom}
                  onChange={handleChange}
                >
                  Nom du lien
                </FormText>
                <FormText
                  htmlFor="lien_gh"
                  type="text"
                  id="lien_gh"
                  name="lien_gh"
                  value={inputText.lien_gh}
                  onChange={handleChange}
                >
                  Lien GithHub
                </FormText>

                <FormText
                  htmlFor="lien_vdo"
                  type="text"
                  id="lien_vdo"
                  name="lien_vdo"
                  value={inputText.lien_vdo}
                  onChange={handleChange}
                >
                  Lien de la vidéo
                </FormText>

                <div className="bg-blue-900 w-120 p-4 flex flex-row gap-10 justify-center">
                  <div>
                    <FormText
                      htmlFor="date_debut"
                      type="date"
                      id="date_debut"
                      name="date_debut"
                      value={inputText.date_debut}
                      onChange={handleChange}
                    >
                      date de début du projet
                    </FormText>
                  </div>
                  <div>
                    <FormText
                      htmlFor="date_fin"
                      type="date"
                      id="date_fin"
                      name="date_fin"
                      value={inputText.date_fin}
                      onChange={handleChange}
                    >
                      date de la fin du projet
                    </FormText>
                  </div>
                </div>

                <FormTextrea
                  htmlFor="presentation_projet"
                  id="presentation_projet"
                  name="presentation_projet"
                  value={inputText.presentation_projet}
                  onChange={handleChange}
                >
                  Présentation du projet
                </FormTextrea>

                <FormTextrea
                  htmlFor="technique_projet"
                  id="technique_projet"
                  name="technique_projet"
                  value={inputText.technique_projet}
                  onChange={handleChange}
                >
                  Techniques du projet
                </FormTextrea>

                <ButtonForm type="submit"> Ajouter le projet</ButtonForm>
              </div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* </section> */}
    </>
  );
}

export default InputProject;
