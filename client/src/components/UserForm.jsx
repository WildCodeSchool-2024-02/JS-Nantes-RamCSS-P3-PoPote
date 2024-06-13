// sera utilisé dans :
// - la page d'inscription
// - la page de modification de profil

import { NavLink } from "react-router-dom";

function UserForm() {
  // handleSubmit(event) {
  //     event.preventDefault();
  // }

  return (
    <section>
      <form className="register-form">
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="👤 Nom"
          required
        />
        <input type="text" id="firstname" placeholder="👤Prénom" required />
        <input type="email" id="email" placeholder="✉️ Email" required />
        <input
          type="password"
          id="password"
          placeholder="🔒 Mot de passe"
          required
        />
        <input
          type="password"
          id="password-confirmation"
          placeholder="🔒 Confirmer mot de passe"
          required
        />
        <input type="submit" value="Inscription" />
      </form>
      <p>
        Tu as déjà un compte ?{" "}
        <NavLink className="connexion-url">Connecte-toi</NavLink>
      </p>
    </section>
  );
}

export default UserForm;
