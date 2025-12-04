import React from "react";
import { ButtonForm } from "../components/Form";

function SectionProfil({ title, desc, isAdmin, onDelete, id }) {
  function handleClick() {
    onDelete(id);
  }
  return (
    <section className="sectionApply  mx-0! text-white p-10 contactHoverDiv hover:bg-gray-800 rounded-lg  gap-4">
      <div className="flex-1">
        <div className="mb-4 text-2xl font-semibold">{title}</div>
        <div className="text-lg">{desc}</div>
      </div>
      {isAdmin && (
        <div className="container flex gap-2">
          <ButtonForm type="button">Modifier</ButtonForm>
          <ButtonForm type="button" onClick={handleClick}>
            Supprimer
          </ButtonForm>
        </div>
      )}
    </section>
  );
}

export default SectionProfil;
