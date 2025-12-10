import React from "react";
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
  const mail = "test@gmail.com";
  const password = "123456";

  const onSubmit = (data) => {
    console.log(data);
    if (data.emailLog === mail && data.passwordLog === password) {
      navigate("/admin");
    } else {
      setError("loginError", {
        type: "manual",
        message: "Email ou mot de passe incorrect",
      });
    }
  };
  //   function onSubmit(event) {
  //     event.preventDefault();

  //     navigate("/admin");
  //   }

  return (
    <>
      <section className="sectionApply text-white w-160!">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormText
            type="email"
            id="emailLog"
            {...register("emailLog", { required: "Email obligatoire" })}
            placeholder="Email"
          >
            Adresse mail
          </FormText>
          <br /> <br />
          <FormText
            type="password"
            id="passwordLog"
            {...register("passwordLog", {
              required: "Veuillez remplir le mot de passe",
            })}
            placeholder="Mot de passe"
          >
            Mot de passe
          </FormText>
          <ButtonForm> Se connecter</ButtonForm>
        </form>

        {errors.emailLog && (
          <span className="text-red-500">{errors.emailLog.message}</span>
        )}
        {errors.passwordLog && (
          <span className="text-red-500">{errors.passwordLog.message}</span>
        )}
        {errors.loginError && (
          <span className="text-red-500">{errors.loginError.message}</span>
        )}
      </section>
    </>
  );
}

export default Login;
