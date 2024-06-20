import { NavLink } from "react-router-dom";

function ConnexionPage() {
  return (
    <section className="login-page">
      <div className="desktop-frame-connexion">
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

        <section className="userform-page login-userform-page">
          <form className="register-form">
            <div className="logo-input">
              <img
                src="./src/assets/logo_form/icon-mail.svg"
                alt="icon email"
                className="icon-form"
              />
              <input
                type="email"
                id="login-email"
                placeholder="Email"
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
                placeholder="Mot de passe"
                required
              />
              <img
                src="./src/assets/logo_form/icon-eye.svg"
                alt="icon eye"
                className="icon-form"
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
            <NavLink className="url">Inscris-toi</NavLink>
            <br />
            <NavLink className="url">A propos de nous</NavLink>
          </p>
        </section>
      </div>
    </section>
  );
}

export default ConnexionPage;
