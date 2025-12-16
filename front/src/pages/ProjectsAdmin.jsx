import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputProject from "../components/InputProject.jsx";
import TableProject from "../components/TableProject.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getAllProjets,
  createProjet,
  updateProjet,
  deleteProjet,
} from "../services/projectApi.js";

function ProjectsAdmin({ projects, setProjects }) {
  //const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost:8000/admin/projectform", {
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

  // Read les projets
  const readProject = async () => {
    try {
      const data = await getAllProjets();
      setProjects(data);
    } catch (err) {
      console.error("Erreur récupération projets :", err);
    }
  };
  useEffect(() => {
    readProject();
  }, []);

  // Create un projet
  const addProject = async (newProject) => {
    try {
      const created = await createProjet(newProject);
      setProjects((prev) => [...prev, created]);
    } catch (err) {
      console.error("Erreur création projet :", err);
    }
  };

  // Update un projet
  async function handleUpdate(id, updateData) {
    try {
      await updateProjet(id, updateData);
      setProjects((prev) =>
        prev.map((proj) => (proj.id === id ? { ...proj, ...updateData } : proj))
      );
    } catch (err) {
      console.error("Erreur mise à jour :", err);
    }
  }

  // Delete un projet
  const handleDelete = async (id) => {
    try {
      await deleteProjet(id);
      setProjects((prev) => prev.filter((proj) => proj.id !== id));
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
    <div className="container mx-auto p-6">
      <InputProject onAdd={addProject} />

      <div className="mt-10">
        <div className="container mx-auto p-6 border-2 bg-gray-600/50 overflow-x-auto">
          <table className="text-white w-359 border-4 h-30 ">
            <thead>
              <tr>
                <th scope="col">Nom du Projet</th>
                <th scope="col">Technologies principales</th>
                <th scope="col">Lien affilé au projet</th>
                <th scope="col">date du projet (Début-Fin)</th>
                <th scope="col">Détail du projet</th>
                <th scope="col">Administraion</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <TableProject
                    key={project.id}
                    id={project.id}
                    nom_projet={project.nom_projet}
                    techno={project.techno}
                    lien_url={project.lien_url}
                    lien_nom={project.lien_nom}
                    lien_gh={project.lien_gh}
                    lien_vdo={project.lien_vdo}
                    date_debut={project.date_debut}
                    date_fin={project.date_fin}
                    presentation_projet={project.presentation_projet}
                    technique_projet={project.technique_projet}
                    isAdmin={true}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-white">
                    Aucune section ajoutée pour le moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProjectsAdmin;
