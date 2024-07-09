import { NavLink } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about-page">
      <h2>L'équipe de Po'pote</h2>
      <p>Florine, Michaël, Mickaël, Théo</p>
      <img
        src={`${import.meta.env.VITE_API_URL}/about/team.jpg`}
        alt="Florine, Michaël, Mickaël et Théo, tous souriant, entrain de manger une glace"
      />
      <nav className="about-nav">
        <NavLink to="/connexion">Connexion</NavLink>
      </nav>
    </div>
  );
}

export default AboutPage;
