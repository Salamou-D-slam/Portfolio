import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonHome from "../components/ButtonLink.jsx";
import { ButtonForm } from "../components/Form.jsx";
import CircularProgress from "@mui/material/CircularProgress";

function Admin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("https://portfolio-ufox.onrender.com/admin", {
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

  const handlLogout = async (data) => {
    try {
      await fetch("https://portfolio-ufox.onrender.com/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      navigate("/login");
    } catch (err) {
      console.error("Erreur déconnexion :", err);
    }
  };

  return (
    <>
      <section className="sectionHome h-40! items-center justify-center!">
        <div className="buttonLink mt-0! text-center">
          <ButtonHome to="/admin/profilform">
            Page de profil (Administrateur)
          </ButtonHome>
          <ButtonHome to="/admin/projectform">
            Page de projets (Administrateur)
          </ButtonHome>
          <ButtonForm
            type="button"
            onClick={handlLogout}
            className="bg-red-900 hover:bg-red-700"
          >
            Se déconnecter
          </ButtonForm>
        </div>
      </section>
    </>
  );
}

export default Admin;
