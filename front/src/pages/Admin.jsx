import React, { useState } from "react";
import AdminProfil from "../components/FormAdmin.jsx";
import SectionProfil from "../components/SectionProfil.jsx";

function Admin() {
  const [sections, setSections] = useState([]);

  function addSection(newSection) {
    setSections((prev) => [...prev, newSection]);
  }

  return (
    <div className="container mx-auto p-6">
      <AdminProfil onAdd={addSection} />

      <div className="mt-10">
        {sections.length > 0 ? (
          sections.map((sectionItem, index) => (
            <SectionProfil
              key={index}
              title={sectionItem.profilNom}
              desc={sectionItem.profilDesc}
            />
          ))
        ) : (
          <p className="text-white text-center">
            Aucune section ajoutée pour le moment.
          </p>
        )}
      </div>
    </div>
  );
}

export default Admin;
