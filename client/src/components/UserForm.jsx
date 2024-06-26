// sera utilisé dans :
// - la page d'inscription
// - la page de modification de profil

import { NavLink } from "react-router-dom";

function UserForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3310/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        console.warn("Victoire !");
      }
    });
  }

  return (
    <section className="userform-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="logo-input">
          <img
            src="./src/assets/logo_form/icon-person.svg"
            alt="icon person"
            className="icon-form"
          />
          <input
            type="text"
            id="register-lastname"
            name="lastname"
            placeholder="Nom"
            required
          />
        </div>
        <div className="logo-input">
          <img
            src="./src/assets/logo_form/icon-person.svg"
            alt="icon person"
            className="icon-form"
          />
          <input
            type="text"
            id="register-firstname"
            name="firstname"
            placeholder="Prénom"
            required
          />
        </div>
        <div className="logo-input">
          <img
            src="./src/assets/logo_form/icon-mail.svg"
            alt="icon email"
            className="icon-form"
          />

          <input
            type="email"
            id="register-email"
            name="email"
            placeholder="Email"
            pattern="/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g"
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
            id="register-password"
            name="password"
            placeholder="Mot de passe"
            pattern="^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]){8,}$"
            required
          />
          <img
            src="./src/assets/logo_form/icon-eye.svg"
            alt="icon eye"
            className="icon-form"
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
            id="register-password-confirmation"
            placeholder="Confirmer mot de passe"
            required
          />
          <img
            src="./src/assets/logo_form/icon-eye.svg"
            alt="icon eye"
            className="icon-form"
          />
        </div>
        <div className="cgu-container">
          {/* <input type="checkbox" id="cgu" value="cgu" /> */}
          {/* <label htmlFor="cgu">
            {" "}
            J'accepte les Conditions Générales d'Utilisation et reconnais avoir
            été informé que mes données personnelles seront utilisées.
          </label> */}
        </div>
        {/* <input type="submit" value="Inscription" className="submit-button" /> */}
        <button type="submit" value="Inscription" className="submit-button">
          Inscription
        </button>
      </form>
      <p>
        Tu as déjà un compte ?{" "}
        <NavLink to="/connexion" className="url">
          Connecte-toi
        </NavLink>
        <br />
        <NavLink to="/about" className="url">
          A propos de nous
        </NavLink>
      </p>
    </section>
  );
}

export default UserForm;
