import React, { useState } from "react";
import FormText from "./Form.jsx";
import { FormTextrea, ButtonForm } from "./Form.jsx";

function InputProject({ onAdd }) {
  const [inputText, setInputText] = useState({
    projetNom: "",
    projetLien: "",
    projetDateDebut: "",
    projetDateFin: "",
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
    if (onAdd) onAdd(inputText);

    setInputText({
      projetNom: "",
      projetLien: "",
      projetDateDebut: "",
      projetDateFin: "",
    }); // reset form
  }
  return (
    <>
      <div className="container mx-auto p-6 text-white text-center">
        <h1 className="title text-salamou">Page de projets (Administrateur)</h1>
      </div>

      <section>
        <div className="sectionApply text-white p-10">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6">
              Ajouter un nouveau projet dans la page projets
            </h2>
            <div className="mb-4">
              <FormText
                htmlFor="projetNom"
                type="text"
                id="projetNom"
                name="projetNom"
                value={inputText.projetNom}
                onChange={handleChange}
              >
                Nom du projet
              </FormText>

              <FormText
                htmlFor="projetLien"
                type="text"
                id="projetLien"
                name="projetLien"
                value={inputText.projetLien}
                onChange={handleChange}
              >
                Lien affilé au projet
              </FormText>

              <FormText
                htmlFor="projetDateDebut"
                type="date"
                id="projetDateDebut"
                name="projetDateDebut"
                value={inputText.projetDateDebut}
                onChange={handleChange}
              >
                date deu début du projet
              </FormText>

              <FormText
                htmlFor="projetDateFin"
                type="date"
                id="projetDateFin"
                name="projetDateFin"
                value={inputText.projetDateFin}
                onChange={handleChange}
              >
                date de la fin du projet
              </FormText>

              <ButtonForm type="submit"> Ajouter le projet</ButtonForm>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default InputProject;
