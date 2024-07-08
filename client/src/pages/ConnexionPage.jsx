import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { emailValidation, passwordValidation } from "../services/validation";

function ConnexionPage() {
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const navigate = useNavigate();

  const handleFetch = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setIsEmail(() => false);
      setIsPassword(() => false);
    } else {
      const res = await response.json();
      localStorage.setItem("token", res.token);
      navigate('/popote')
      console.info("Logged", res);
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

      if (isEmailValid && isPasswordValid) {
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
            src="./src/assets/logo/logo_popote_blanc.svg"
            alt="logo Popote"
            className="logo-blanc"
          />
          <img
            src="./src/assets/logo/logo_popote_orange.svg"
            alt="logo Popote"
            className="logo-orange"
          />
          <h2>Nous sommes heureux de vous revoir !</h2>
        </div>
        <section className="login-userform-page">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="logo-input">
              <img
                src="./src/assets/logo_form/icon-mail.svg"
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
                required
              />
            </div>
            <div className="logo-input">
              <img
                src="./src/assets/logo_form/icon-lock.svg"
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
                required
              />
            </div>

            <input
              type="submit"
              id="login-submit"
              value="Connexion"
              className="submit-button"
            />
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
