import React, { useState } from "react";
import FormText, { FormTextrea, ButtonForm } from "./Form.jsx";

function InputProfil({ onAdd }) {
  const [inputText, setInputText] = useState({
    profilNom: "",
    profilDesc: "",
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
      profilNom: "",
      profilDesc: "",
    }); // reset form
  }
  return (
    <>
      <div className="container mx-auto p-6 text-white text-center">
        <h1 className="title text-salamou">Page de profil (Administrateur)</h1>
      </div>

      <section>
        <div className="sectionApply text-white p-10">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6">
              Ajouter une nouvelle section dans le profil
            </h2>
            <div className="mb-4">
              <FormText
                htmlFor="profilNom"
                type="text"
                id="profilNom"
                name="profilNom"
                value={inputText.profilNom}
                onChange={handleChange}
              >
                Nom de la section
              </FormText>

              <FormTextrea
                htmlFor="profilDesc"
                id="profilDesc"
                name="profilDesc"
                value={inputText.profilDesc}
                onChange={handleChange}
              >
                Titre de la section
              </FormTextrea>

              <ButtonForm type="submit"> Ajouter la section</ButtonForm>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default InputProfil;
