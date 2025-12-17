const API_URL = "https://portfolio-ufox.onrender.com/project";
//const API_URL = "http://localhost:5173/project";

export const getAllProjets = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erreur chargement projets");
  return res.json();
};

export const getOneProjet = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Erreur chargement projet");
  return res.json();
};

export const createProjet = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Erreur création projet");
  return res.json();
};

export const updateProjet = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Erreur mise à jour projet");
  return res.json();
};

export const deleteProjet = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Erreur suppression projet");
};
