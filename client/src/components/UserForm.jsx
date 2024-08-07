import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserForm() {
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [cguChecked, setCguChecked] = useState(false);
  const navigate = useNavigate();
  const [ErrorForm, setErrorForm] = useState("");
  const [ErrorFormNone, setErrorFormNone] = useState(
    "error-form-register-none"
  );

  function handleSubmit(event) {
    event.preventDefault();
    const password1 = passwordRef.current.value;
    const password2 = passwordConfirmationRef.current.value;

    if (password1 === password2 && cguChecked) {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

      fetch(`${import.meta.env.VITE_API_URL}/api/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          toast.success(
            "Création de compte réussie"
          );
          setTimeout(() => {
            navigate("/connexion");
          }, 4000);
          
        }
      });
    } else {
      setErrorFormNone("error-form-register");
      setErrorForm(
        "Les deux mots de passe ne sont pas identiques ou les CGU ne sont pas cochées"
      );
    }
  }

  return (
    <section className="userform-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="logo-input">
          <img
            src={`${import.meta.env.VITE_API_URL}/logo_form/icon-person.svg`}
            alt="icon person"
            className="icon-form"
          />
          <input
            type="text"
            id="register-lastname"
            name="lastname"
            placeholder="Nom"
            aria-label="Nom"
            required
          />
        </div>
        <div className="logo-input">
          <img
            src={`${import.meta.env.VITE_API_URL}/logo_form/icon-person.svg`}
            alt="icon person"
            className="icon-form"
          />
          <input
            type="text"
            id="register-firstname"
            name="firstname"
            placeholder="Prénom"
            aria-label="Prénom"
            required
          />
        </div>
        <div className="logo-input">
          <img
            src={`${import.meta.env.VITE_API_URL}/logo_form/icon-mail.svg`}
            alt="icon email"
            className="icon-form"
          />

          <input
            type="email"
            id="register-email"
            name="email"
            placeholder="Email"
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
            id="register-password"
            name="password"
            placeholder="Mot de passe"
            aria-label="Mot de passe"
            pattern="^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$"
            required
            ref={passwordRef}
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
            id="register-password-confirmation"
            placeholder="Confirmation mot de passe"
            aria-label="Confirmation mot de passe"
            required
            ref={passwordConfirmationRef}
          />
        </div>
        <p className={ErrorFormNone}>{ErrorForm}</p>
        <div className="cgu-container">
          <input
            type="checkbox"
            id="cgu"
            value="cgu"
            checked={cguChecked}
            onChange={(item) => setCguChecked(item.target.checked)}
          />
          <label htmlFor="cgu">
            {" "}
            J'accepte les{" "}
            <NavLink to="/cgu" className="cgu-link">
              Conditions Générales d'Utilisation
            </NavLink>{" "}
            et reconnais avoir été informé que mes données personnelles seront
            utilisées.
          </label>
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
      <ToastContainer position="bottom-right" />
    </section>
  );
}

export default UserForm;
