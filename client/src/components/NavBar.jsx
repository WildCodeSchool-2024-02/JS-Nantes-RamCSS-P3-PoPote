import { NavLink } from "react-router-dom";
import LogoPopote from "../assets/logo/logo_popote_last.png";
import home from "../assets/home_icone.svg";
import add from "../assets/add_icone.svg";
import favorite from "../assets/favorite_icone.svg";
import profile from "../assets/profile_icone.svg";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" aria-label="Page d'acceuil">
        <img className="desktop-link" src={LogoPopote} alt="logo Popote" />
        <img className="mobile-link" src={home} alt="" />
      </NavLink>
      <NavLink to="/search" aria-label="Page Recherche">
        <h1 className="desktop-link">Rechercher</h1>
      </NavLink>
      <NavLink to="/favorites" aria-label="Page Mes favoris">
        <h1 className="desktop-link">Mes Favoris</h1>
        <img className="mobile-link" src={favorite} alt="" />
      </NavLink>
      <NavLink to="/creation-recipe" aria-label="Page Creation de recette">
        <h1 className="desktop-link">Créer une recette</h1>
        <img className="mobile-linky" src={add} alt="" />
      </NavLink>
      <NavLink to="/profile" aria-label="Page Mon Profil">
        <h1 className="desktop-link">Mon Profil</h1>
        <img className="mobile-link" src={profile} alt="" />
      </NavLink>
    </nav>
  );
}

export default NavBar;
