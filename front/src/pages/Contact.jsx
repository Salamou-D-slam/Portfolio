import React, { useState } from "react";
import FormText from "../components/Form.jsx";
import { FormTextrea, ButtonForm } from "../components/Form.jsx";
import ContactLink from "../components/ContactLink.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    title: "",
    description: "",
  });
  const [box, setBox] = useState(false);

  const SentMail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi");

      const result = await res.json();
      setForm({
        nom: "",
        email: "",
        title: "",
        description: "",
      });
      setBox(!box);
      alert(result.message);
    } catch (err) {
      console.error(err);
      alert("Une erreur est survenue !");
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev, // on garde les anciennes valeurs
      [name]: value, // on met à jour seulement celle changée
    }));
  }

  return (
    <>
      <section className="sectionContact">
        <div className="divForm contactHoverDiv outlineApply">
          <form onSubmit={SentMail}>
            <h1 className="text-3xl font-bold mb-4">
              Contactez moi par ce formulaire
            </h1>
            <div className="mb-4">
              <FormText
                htmlFor="name"
                type="text"
                id="name"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
              >
                Nom:
              </FormText>

              <FormText
                htmlFor="Email"
                type="Email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              >
                Email:
              </FormText>

              <FormText
                htmlFor="title"
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              >
                L'objet du mail:
              </FormText>

              <FormTextrea
                htmlFor="descriptionContact"
                name="description"
                value={form.description}
                onChange={handleChange}
                id="descriptionContact"
                required
              >
                Description
              </FormTextrea>

              <div>
                <input
                  type="checkbox"
                  name="form-name"
                  value="contact"
                  onChange={handleChange}
                  onClick={() => setBox(!box)}
                  required
                  checked={box}
                />

                <label htmlFor="form-name" className="text-sm ml-2" required>
                  Les informations recueillies sont nécessaires pour traiter
                  votre message et ne seront pas utilisées à d'autres fins.
                </label>
              </div>

              <ButtonForm type="submit">Envoyer le message</ButtonForm>
            </div>
          </form>
        </div>

        <div className="divSocials contactHoverDiv outlineApply">
          <h1 className="text-3xl font-bold mb-4">Contactez moi par:</h1>

          <div className="container flex flex-wrap mt-4 gap-6 p-4 rounded-lg justify-center ">
            <ContactLink
              href="mailto:islamderrouiche@gmail.com"
              target="_blank"
              title="Mon email"
            >
              <AlternateEmailIcon sx={{ fontSize: 90 }} />
            </ContactLink>

            <ContactLink
              href="https://wa.me/0762467065?text=Bonjour%2C%20je%20viens%20de%20votre%20portfolio%20!"
              target="_blank"
              title="Mon WhatsApp"
            >
              <WhatsAppIcon sx={{ fontSize: 90 }} />
            </ContactLink>

            <ContactLink
              href="https://www.linkedin.com/in/islam-derrouiche-7a69a8368/"
              target="_blank"
              title="Mon LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: 90 }} />
            </ContactLink>

            <ContactLink
              href="https://www.instagram.com/"
              target="_blank"
              title="Mon Instagram"
            >
              <InstagramIcon sx={{ fontSize: 90 }} />
            </ContactLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
