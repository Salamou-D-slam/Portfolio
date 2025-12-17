import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputProfil from "../components/InputProfil.jsx";
import SectionProfil from "../components/SectionProfil.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getAllSections,
  createSection,
  updateSection,
  deleteSection,
} from "../services/profilApi.js";

function ProfilAdmin({ sections, setSections }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch(
          "https://portfolio-ufox.onrender.com/admin/profilform",
          {
            method: "GET",
            credentials: "include",
          }
        );

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

  // Read les sections
  const readSections = async () => {
    try {
      const data = await getAllSections();
      setSections(data);
    } catch (err) {
      console.error("Erreur récupération sections :", err);
    }
  };
  useEffect(() => {
    readSections();
  }, []);

  // Create une section

  const addSection = async (newSection) => {
    try {
      const created = await createSection(newSection);
      setSections((prev) => [...prev, created]);
    } catch (err) {
      console.error("Erreur création section :", err);
    }
  };

  // Update une section
  async function handleUpdate(id, updateData) {
    await updateSection(id, updateData);
    const data = await getAllSections();
    setSections(data);
  }

  // Delete une section
  const handleDelete = async (id) => {
    try {
      await deleteSection(id); // Supprime côté backend
      const data = await getAllSections(); // Recharger la liste réelle (pas en local)
      setSections(data); // Mettre à jour le state
    } catch (err) {
      console.error("Erreur suppression :", err);
    }
  };

  // Tant que la vérification n’est pas finie, rien ne s’affiche
  if (loading)
    return (
      <div className="mt-20 flex justify-center">
        <CircularProgress />
      </div>
    );
  if (!authorized) return null;
  return (
    <div className="container mx-auto p-6 border rounded whitespace-pre-wrap">
      <div className="container mx-auto p-6 text-white text-center lg:w-full! max-sm:hidden!">
        <h1 className="title text-salamou">Page de profil (Administrateur)</h1>
      </div>
      <InputProfil onAdd={addSection} />

      <div className="mt-10">
        {sections.length > 0 ? (
          sections.map((section) => (
            <SectionProfil
              key={section.id}
              id={section.id}
              title={section.nom_section}
              desc={section.description_section}
              isAdmin={true}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
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
