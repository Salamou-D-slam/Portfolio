import React, { useState } from "react";
import ButtonHome from "../components/ButtonLink.jsx";

function Admin() {
  return (
    <>
      <section className="sectionHome h-40! items-center justify-center!  ">
        <div className="buttonLink mt-0! text-center">
          <ButtonHome to="/admin/profilform">
            Page de profil (Administrateur)
          </ButtonHome>
          <ButtonHome to="/admin/projectform">
            Page de projets (Administrateur)
          </ButtonHome>
        </div>
      </section>
    </>
  );
}

export default Admin;
