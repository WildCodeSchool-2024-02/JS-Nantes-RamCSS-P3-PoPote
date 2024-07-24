import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="error-page-container">
      <article className="error-page-description">
        <h1>Oups ! 404</h1>
        <h2>Ce n'est pas la recette que vous cherchiez ?</h2>
        <NavLink to="/popote/" className="error-link-to-home">
          Retour à l'accueil
        </NavLink>
      </article>
    </section>
  );
}

export default ErrorPage;
