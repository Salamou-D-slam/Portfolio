import React, { useState } from "react";
import FormText, { FormTextrea, ButtonForm } from "./Form.jsx";

function InputProject({ onAdd }) {
  const [inputText, setInputText] = useState({
    projetNom: "",
    projetLien: "",
    projetLienNom: "",
    GHProjet: "",
    projetDateDebut: "",
    projetDateFin: "",
    PresentationProject: "",
    techproject: "",
    VDOProjet: "",
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
      techno: "",
      projetLien: "",
      projetLienNom: "",
      GHProjet: "",
      projetDateDebut: "",
      projetDateFin: "",
      PresentationProject: "",
      techproject: "",
      VDOProjet: "",
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
            <div className="mb-4 space-y-3 ">
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
                htmlFor="projetLienNom"
                type="text"
                id="projetLienNom"
                name="projetLienNom"
                value={inputText.projetLienNom}
                onChange={handleChange}
              >
                Nom du lien
              </FormText>
              <FormText
                htmlFor="GHProjet"
                type="text"
                id="GHProjet"
                name="GHProjet"
                value={inputText.GHProjet}
                onChange={handleChange}
              >
                GithHub
              </FormText>

              <div className="bg-blue-900 w-120 p-4 flex flex-row gap-10 justify-center">
                <div>
                  <FormText
                    htmlFor="projetDateDebut"
                    type="date"
                    id="projetDateDebut"
                    name="projetDateDebut"
                    value={inputText.projetDateDebut}
                    onChange={handleChange}
                  >
                    date de début du projet
                  </FormText>
                </div>
                <div>
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
                </div>
              </div>

              <FormTextrea
                htmlFor="PresentationProject"
                id="PresentationProject"
                name="PresentationProject"
                value={inputText.PresentationProject}
                onChange={handleChange}
              >
                Présentation du projet
              </FormTextrea>

              <FormTextrea
                htmlFor="techproject"
                id="techproject"
                name="techproject"
                value={inputText.techproject}
                onChange={handleChange}
              >
                Techniques du projet
              </FormTextrea>
              <FormText
                htmlFor="VDOProjet"
                type="text"
                id="VDOProjet"
                name="VDOProjet"
                value={inputText.VDOProjet}
                onChange={handleChange}
              >
                Lien de la vidéo
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
