import { NavLink } from "react-router-dom";

function WelcomePage() {
  return (
    <>
      <h1>WelcomePage</h1>
      <div className="backgroundWelcomePage">
        <img
          src="./src/assets/logo_popote_titre.png"
          alt="logo titre"
          className="welcomePage-img-logotitre"
        />
        <h1 className="welcomePageh1">
          Viens t'inspirer avec les meilleurs recettes du moment
        </h1>
        <NavLink className="navLinkHome" to="/Home">
          Jeter un coup d'oeil
        </NavLink>
        <NavLink className="navLinkConnexion" to="/Connexion">
          Connexion
        </NavLink>
      </div>
    </>
  );
}

export default WelcomePage;
