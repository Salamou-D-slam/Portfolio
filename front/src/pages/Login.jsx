import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormText, { ButtonForm } from "../components/Form";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1); // Etape email ou code
  const [email, setEmail] = useState(""); // Stocke l'email pour la deuxième étape
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  // Étape 1 : Envoi du code
  const sendCode = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // stockage du cookie
        body: JSON.stringify({ email: data.email }), // Data contient le email
      });

      const json = await res.json();
      if (!res.ok) {
        setError("loginError", {
          type: "manual",
          message: json.detail || "Echec",
        });
      } else {
        setEmail(data.email); // conserve l'email pour la vérification
        setStep(2); // passe à l'étape du code
      }
    } catch (err) {
      setError("loginError", {
        type: "manual",
        message: "Erreur réseau",
      });
    }
  };

  // Étape 2 : Vérification du code
  const verifyCode = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/auth/verif-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // stockage du cookie
        body: JSON.stringify({ email, code: data.code }), // Data contient le email et le code
      });

      const json = await res.json();
      if (!res.ok) {
        setError("loginError", {
          type: "manual",
          message: json.detail || "Echec",
        });
      } else {
        navigate("/admin");
      }
    } catch (err) {
      setError("loginError", {
        type: "manual",
        message: "Erreur réseau",
      });
    }
  };

  return (
    <>
      <section className="sectionApply text-white w-160!">
        {step === 1 && (
          <form onSubmit={handleSubmit(sendCode)}>
            <FormText
              type="email"
              id="email"
              {...register("email", { required: "Email obligatoire" })}
              placeholder="Email"
            >
              Adresse mail
            </FormText>

            <ButtonForm type="submit" className="w-40 disabled:bg-gray-700">
              Envoyer le code
            </ButtonForm>
          </form>
        )}
        <br /> <br />
        {step === 2 && (
          <form onSubmit={handleSubmit(verifyCode)}>
            <FormText
              type="text"
              id="code"
              {...register("code", { required: "Code obligatoire" })}
              placeholder="Code"
              className="w-100!"
            >
              Le code d'authentification
            </FormText>
            <ButtonForm type="submit"> Se connecter</ButtonForm>

            {disabled && (
              <span className="block mt-2 text-sm text-gray-500">
                Le code a été envoyé dans votre boite mail
              </span>
            )}
          </form>
        )}
        <br /> <br />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        {errors.loginError && (
          <span className="text-red-500">{errors.loginError.message}</span>
        )}
      </section>
    </>
  );
}

export default Login;
