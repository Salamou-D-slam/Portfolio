import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputProfil from "../components/InputProfil.jsx";
import SectionProfil from "../components/SectionProfil.jsx";
import CircularProgress from "@mui/material/CircularProgress";

function ProfilAdmin({ sections, setSections }) {
  //const [sections, setSections] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost:8000/admin/profilform", {
          method: "GET",
          credentials: "include",
        });

        if (res.status === 401) {
          navigate("/login"); // pas connecté donc redirection
        } else {
          setAuthorized(true); // session valide
        }
      } catch (err) {
        navigate("/login"); // erreur réseau donc redirection
      } finally {
        setLoading(false); // vérification terminée
      }
    };

    checkSession();
  }, [navigate]);

  // Tant que la vérification n’est pas finie, rien ne s’affiche
  if (loading)
    return (
      <div className="mt-20 flex justify-center">
        <CircularProgress />
      </div>
    );
  if (!authorized) return null;

  function addSection(newSection) {
    setSections((prev) => [...prev, newSection]);
  }
  function deleteSection(id) {
    setSections((prev) => prev.filter((_, index) => index !== id));
  }

  function updateSection(id, updateData) {
    setSections((prev) =>
      prev.map((section, index) => (index === id ? updateData : section))
    );
  }
  return (
    <div className="container mx-auto p-6 border rounded whitespace-pre-wrap">
      <div className="container mx-auto p-6 text-white text-center">
        <h1 className="title text-salamou ">Page de profil (Administrateur)</h1>
      </div>
      <InputProfil onAdd={addSection} />

      <div className="mt-10">
        {sections.length > 0 ? (
          sections.map((sectionItem, index) => (
            <SectionProfil
              key={index}
              id={index}
              title={sectionItem.profilNom}
              desc={sectionItem.profilDesc}
              isAdmin={true}
              onDelete={deleteSection}
              onUpdate={updateSection}
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

export default ProfilAdmin;
