import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { emailValidation, passwordValidation } from "../services/validation";
import { AuthContext } from "../context/AuthContext";

function ConnexionPage() {
  const { setUser } = useContext(AuthContext);

  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const navigate = useNavigate();
  const [errorForm, setErrorForm] = useState("");
  const [errorFormNone, setErrorFormNone] = useState(
    "error-form-register-none"
  );

  const handleFetch = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: 'include',
      body: JSON.stringify(data),
    });

    console.warn("C'est quoi ma réponse ? ", response);

    if (!response.ok) {
      setIsEmail(() => false);
      setIsPassword(() => false);
      setErrorFormNone("error-form-register");
      setErrorForm("Identifiant ou mot de passe incorrect");
    } else {
      const res = await response.json();
      const { token, user } = res;

      localStorage.setItem("firstname", user.firstname);
      localStorage.setItem("lastname", user.lastname);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("isAdmin", user.is_admin);

      setUser(user);

      Cookies.set("token", token, {
        expires: 1,
        sameSite: "strict",
      });

      navigate("/popote");
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const email = event.target.email.value;
      const isEmailValid = emailValidation(email);

      const password = event.target.password.value;
      const isPasswordValid = passwordValidation(password);

      setIsEmail(() => isEmailValid);
      setIsPassword(() => isPasswordValid);

      if (!isEmailValid || !isPasswordValid) {
        setErrorFormNone("error-form-register");
        setErrorForm("Identifiant ou mot de passe incorrect");
      } else {
        await handleFetch({ email, password });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="login-page">
      <div className="desktop-frame-connexion mobile-frame-connexion">
        <div>
          <img
            src={`${import.meta.env.VITE_API_URL}/logo/logo_popote_blanc.svg`}
            alt="logo Popote"
            className="logo-blanc"
          />
          <img
            src={`${import.meta.env.VITE_API_URL}/logo/logo_popote_orange.svg`}
            alt="logo Popote"
            className="logo-orange"
          />
          <h2>Nous sommes heureux de vous revoir !</h2>
        </div>
        <section className="login-userform-page">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="logo-input">
              <img
                src={`${import.meta.env.VITE_API_URL}/logo_form/icon-mail.svg`}
                alt="icon email"
                className="icon-form"
              />
              <input
                type="email"
                id="login-email"
                name="email"
                placeholder="Email"
                onFocus={() => !isEmail && setIsEmail(true)}
                aria-label="Email"
                pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                required
              />
            </div>
            <div className="logo-input">
              <img
                src={`${import.meta.env.VITE_API_URL}/logo_form/icon-lock.svg`}
                alt="icon lock"
                className="icon-form"
              />
              <input
                type="password"
                id="login-password"
                name="password"
                placeholder="Mot de passe"
                onFocus={() => !isPassword && setIsPassword(true)}
                aria-label="Mot de passe"
                pattern="^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$"
                required
              />
            </div>
            <p className={errorFormNone}>{errorForm}</p>
            <button type="submit" value="Connexion" className="submit-button">
              Connexion
            </button>
          </form>
          <p>
            Tu n’as pas de compte ?{" "}
            <NavLink to="/register" className="url">
              Inscris-toi
            </NavLink>
            <br />
            <NavLink to="/about" className="url">
              A propos de nous
            </NavLink>
          </p>
        </section>
      </div>
    </section>
  );
}

export default ConnexionPage;
