// sera utilisé dans :
// - la page d'inscription
// - la page de modification de profil

import { NavLink } from "react-router-dom";

function UserForm() {
  // handleSubmit(event) {
  //     event.preventDefault();
  // }

  return (
    <section className="userform-page">
      <form className="register-form">
        <div className="logo-input">
          <img src="./src/assets/logo_form/icon-person.svg" alt="icon person" />
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Nom"
            required
          />
        </div>
        <div className="logo-input">
          <img src="./src/assets/logo_form/icon-person.svg" alt="icon person" />
          <input type="text" id="firstname" placeholder="Prénom" required />
        </div>
        <div className="logo-input">
          <img src="./src/assets/logo_form/icon-mail.svg" alt="icon email" />
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="logo-input">
          <img src="./src/assets/logo_form/icon-lock.svg" alt="icon lock" />
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            required
          />
          <img src="./src/assets/logo_form/icon-eye.svg" alt="icon eye" />
        </div>
        <div className="logo-input">
          <img src="./src/assets/logo_form/icon-lock.svg" alt="icon lock" />
          <input
            type="password"
            id="password-confirmation"
            placeholder="Confirmer mot de passe"
            required
          />
          <img src="./src/assets/logo_form/icon-eye.svg" alt="icon eye" />
        </div>
        <div className="cgu-container">
          <input type="checkbox" id="cgu" name="validation-cgu" value="cgu" />
          <label htmlFor="cgu">
            {" "}
            J'accepte les Conditions Générales d'Utilisation et reconnais avoir
            été informé que mes données personnelles seront utilisées.
          </label>
        </div>
        <input type="submit" value="Inscription" className="submit-button" />
      </form>
      <p>
        Tu as déjà un compte ? <NavLink className="url">Connecte-toi</NavLink>
        <br />
        <NavLink className="url">A propos de nous</NavLink>
      </p>
    </section>
  );
}

export default UserForm;
