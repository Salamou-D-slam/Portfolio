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

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // stockage du cookie
        body: JSON.stringify(data), // Data contient le email
      });

      const json = await res.json();
      if (!res.ok) {
        setError("loginError", {
          type: "manual",
          message: json.detail || "Connexion échouée",
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormText
            type="email"
            id="email"
            {...register("email", { required: "Email obligatoire" })}
            placeholder="Email"
          >
            Adresse mail
          </FormText>
          <br /> <br />
          <ButtonForm type="submit"> Se connecter</ButtonForm>
        </form>

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
