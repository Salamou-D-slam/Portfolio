const API_URL = "https://islam-backend.fly.dev/profil";

export const getAllSections = async () => {
  const res = await fetch(API_URL, {
    credentials: "include",
  });
  return res.json();
};

export const createSection = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
  return res.json();
};

export const updateSection = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
  return res.json();
};

export const deleteSection = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression");
};
