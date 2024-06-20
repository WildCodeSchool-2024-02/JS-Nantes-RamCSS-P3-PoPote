import { NavLink } from "react-router-dom";

function WelcomePage() {
  return (
    <>
      {/* <h1>welcome</h1> */}
      <section className="welcome-page">
        <img
          className="welcome-page-logotitre"
          src="./src/assets/logo/logo_popote_blanc.svg"
          alt="logo titre"
        />
        <h1 className="welcome-page-h1">
          Viens t'inspirer avec les meilleures recettes du moment
        </h1>
        <nav className="welcome-nav">
          <NavLink to="/home">Jeter un coup d'oeil</NavLink>
          <NavLink to="/connexion">Connexion</NavLink>
        </nav>
      </section>
    </>
  );
}

export default WelcomePage;
