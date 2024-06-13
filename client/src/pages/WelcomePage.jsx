import "../styles/pages-styles/welcome-page.css";

function WelcomePage() {
  return (
    <>
      <img
        src="./src/assets/logo_popote_titre.png"
        alt="logo titre"
        className="welcomePage-img-logotitre"
      />
      <h1>Viens t'inspirer avec les meilleurs recettes du moment</h1>
      <img src="./src/assets/logo_popote.png" alt="logo" />
      {/* <Link to="/HomePage">Jeter un coup d'oeil</Link> */}
      {/* <Link to="/ConnexionPage">Connexion</Link> */}
    </>
  );
}

export default WelcomePage;
