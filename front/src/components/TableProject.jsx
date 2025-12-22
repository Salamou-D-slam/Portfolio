import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormText from "../components/Form.jsx";
import { FormTextrea, ButtonForm } from "../components/Form.jsx";

function TableProject({
  nom_projet,
  techno,

  lien_url,
  lien_nom,
  lien_gh,
  lien_vdo,

  date_debut,
  date_fin,

  presentation_projet,
  technique_projet,

  isAdmin,
  onDelete,
  id,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempDataProject, setTempDataProject] = useState({
    nom_projet,
    techno,

    lien_url,
    lien_nom,
    lien_gh,
    lien_vdo,

    date_debut,
    date_fin,

    presentation_projet,
    technique_projet,
  });

  function handleDelete() {
    const yes = window.confirm("Voulez-vous vraiment supprimer ce projet ?");
    if (yes) {
      onDelete(id);
    }
  }

  function handleSave() {
    onUpdate(id, tempDataProject);
    setIsEditing(false);
  }

  function handleCancel() {
    setTempDataProject({
      nom_projet,
      techno,

      lien_url,
      lien_nom,
      lien_gh,
      lien_vdo,

      date_debut,
      date_fin,

      presentation_projet,
      technique_projet,
    });
    setIsEditing(false);
  }

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    return dateString.split("T")[0]; // garde seulement YYYY-MM-DD
  };

  return (
    <>
      {/* section normale */}
      {!isEditing && (
        <tr>
          <td className="tableProject">{nom_projet}</td>
          <td className="tableProject max-sm:hidden">{techno}</td>
          <td className="tableProject max-sm:hidden">
            <a href={lien_url} target="_blank" rel="noreferrer">
              {lien_nom}
            </a>
          </td>
          <td className="tableProject max-sm:hidden">
            {date_debut} - {date_fin}
          </td>
          <td className="tableProject">
            <Link
              to={`/projets/${id}`}
              state={{
                projet: {
                  nom_projet,
                  techno,

                  lien_url,
                  lien_nom,
                  lien_gh,
                  lien_vdo,

                  date_debut,
                  date_fin,

                  presentation_projet,
                  technique_projet,
                },
              }}
            >
              <ButtonForm type="button">En savoir plus</ButtonForm>
            </Link>
          </td>

          {/*Coté Admin*/}
          {isAdmin && (
            <>
              <td>
                <ButtonForm
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-600/90"
                >
                  Supprimer
                </ButtonForm>
              </td>
              <td className="tableProject">
                <ButtonForm
                  type="button"
                  onClick={() => {
                    setTempDataProject({
                      nom_projet,
                      techno,

                      lien_url,
                      lien_nom,
                      lien_gh,
                      lien_vdo,

                      date_debut,
                      date_fin,

                      presentation_projet,
                      technique_projet,
                    });
                    setIsEditing(true);
                  }}
                  className="bg-green-800 hover:bg-green-800/90"
                >
                  Modifier
                </ButtonForm>
              </td>
            </>
          )}
        </tr>
      )}

      {/*formulaire maj */}
      {isEditing && (
        <tr>
          <td colSpan={isAdmin ? 6 : 4} className="tableProject">
            <div className="sectionApply text-white p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
              >
                <h2 className="text-2xl font-bold mb-4">Modifier le projet</h2>

                <FormText
                  type="text"
                  value={tempDataProject.nom_projet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      nom_projet: e.target.value,
                    })
                  }
                >
                  Nom du projet
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.techno}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      techno: e.target.value,
                    })
                  }
                >
                  Technologies princpale
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.lien_url}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      lien_url: e.target.value,
                    })
                  }
                >
                  Lien du projet
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.lien_nom}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      lien_nom: e.target.value,
                    })
                  }
                >
                  Nom du lien
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.lien_gh}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      lien_gh: e.target.value,
                    })
                  }
                >
                  GitHub
                </FormText>

                <div className="bg-blue-900 w-120 p-4 mt-6 flex flex-row gap-10 justify-center">
                  <div>
                    <FormText
                      type="date"
                      value={formatDateForInput(tempDataProject.date_debut)}
                      onChange={(e) =>
                        setTempDataProject({
                          ...tempDataProject,
                          date_debut: e.target.value,
                        })
                      }
                    >
                      Date de début
                    </FormText>
                  </div>

                  <div>
                    <FormText
                      type="date"
                      value={formatDateForInput(tempDataProject.date_fin)}
                      onChange={(e) =>
                        setTempDataProject({
                          ...tempDataProject,
                          date_fin: e.target.value,
                        })
                      }
                    >
                      Date de fin
                    </FormText>
                  </div>
                </div>
                <FormTextrea
                  value={tempDataProject.presentation_projet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      presentation_projet: e.target.value,
                    })
                  }
                >
                  Présentation du projet
                </FormTextrea>

                <FormTextrea
                  value={tempDataProject.technique_projet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      technique_projet: e.target.value,
                    })
                  }
                >
                  Techniques du projet
                </FormTextrea>

                <FormText
                  type="text"
                  value={tempDataProject.lien_vdo}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      lien_vdo: e.target.value,
                    })
                  }
                >
                  Lien de la vidéo
                </FormText>

                <div className="flex gap-2 mt-4">
                  <ButtonForm
                    type="submit"
                    className="bg-green-800 hover:bg-green-800/90"
                  >
                    Enregistrer
                  </ButtonForm>
                  <ButtonForm
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 hover:bg-gray-500/90"
                  >
                    Annuler
                  </ButtonForm>
                </div>
              </form>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default TableProject;
