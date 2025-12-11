import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormText from "../components/Form.jsx";
import { FormTextrea, ButtonForm } from "../components/Form.jsx";

function TableProject({
  nomProjet,
  techno,
  LienProjet,
  projetLienNom,
  dateProjetDebut,
  dateProjetFin,

  GHProjet,
  PresentationProject,
  techproject,
  VDOProjet,

  isAdmin,
  onDelete,
  id,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempDataProject, setTempDataProject] = useState({
    projetNom: nomProjet,
    techno,
    projetLien: LienProjet,
    projetLienNom: projetLienNom,
    projetDateDebut: dateProjetDebut,
    projetDateFin: dateProjetFin,
    GHProjet,
    PresentationProject,
    techproject,
    VDOProjet,
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
      projetNom: nomProjet,
      techno,
      projetLien: LienProjet,
      projetLienNom: projetLienNom,
      projetDateDebut: dateProjetDebut,
      projetDateFin: dateProjetFin,
      GHProjet,
      PresentationProject,
      techproject,
      VDOProjet,
    });
    setIsEditing(false);
  }

  return (
    <>
      {/* section normale */}
      {!isEditing && (
        <tr>
          <td className="tableProject">{nomProjet}</td>
          <td className="tableProject">{techno}</td>
          <td className="tableProject">
            <a href={LienProjet} target="_blank" rel="noreferrer">
              {projetLienNom}
            </a>
          </td>
          <td className="tableProject">
            {dateProjetDebut} - {dateProjetFin}
          </td>
          <td className="tableProject">
            <Link
              to={`/project/${nomProjet}`}
              state={{
                projet: {
                  nomProjet,
                  techno,
                  LienProjet,
                  projetLienNom,
                  dateProjetDebut,
                  dateProjetFin,
                  GHProjet,
                  PresentationProject,
                  techproject,
                  VDOProjet,
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
                      projetNom: nomProjet,
                      projetLien: LienProjet,
                      projetLienNom: projetLienNom,
                      projetDateDebut: dateProjetDebut,
                      projetDateFin: dateProjetFin,
                      GHProjet,
                      PresentationProject,
                      techproject,
                      VDOProjet,
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
                  value={tempDataProject.projetNom}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      projetNom: e.target.value,
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
                  value={tempDataProject.projetLien}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      projetLien: e.target.value,
                    })
                  }
                >
                  Lien du projet
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.projetLienNom}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      projetLienNom: e.target.value,
                    })
                  }
                >
                  Nom du lien
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.GHProjet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      GHProjet: e.target.value,
                    })
                  }
                >
                  GitHub
                </FormText>

                <FormText
                  type="date"
                  value={tempDataProject.projetDateDebut}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      projetDateDebut: e.target.value,
                    })
                  }
                >
                  Date de début
                </FormText>

                <FormText
                  type="date"
                  value={tempDataProject.projetDateFin}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      projetDateFin: e.target.value,
                    })
                  }
                >
                  Date de fin
                </FormText>

                <FormTextrea
                  value={tempDataProject.PresentationProject}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      PresentationProject: e.target.value,
                    })
                  }
                >
                  Présentation du projet
                </FormTextrea>

                <FormTextrea
                  value={tempDataProject.techproject}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      techproject: e.target.value,
                    })
                  }
                >
                  Techniques du projet
                </FormTextrea>

                <FormText
                  type="text"
                  value={tempDataProject.VDOProjet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      VDOProjet: e.target.value,
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
