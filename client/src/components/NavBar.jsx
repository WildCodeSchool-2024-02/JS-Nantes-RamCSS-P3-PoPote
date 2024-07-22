import { NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

function NavBar() {
  const location = useLocation();

  const token = Cookies.get("token");
  let isLogged = "false";
  if (token) {
    isLogged = true;
  } else {
    isLogged = false;
  }

  return (
    <nav className="navbar">
      <img
        src={`${import.meta.env.VITE_API_URL}/navbar_bg.svg`}
        className="mobile-link nav-bg"
        alt=""
      />
      <NavLink
        className="nav-link"
        to={isLogged ? "/popote/" : "/connexion"}
        aria-label="Page d'accueil"
      >
        <img
          className="desktop-link"
          id="popote-logo"
          src={`${import.meta.env.VITE_API_URL}/logo/logo_popote_last.png`}
          alt="logo Popote"
        />
        <img
          className="mobile-link"
          src={
            location.pathname === "/popote/"
              ? `${import.meta.env.VITE_API_URL}/logo_navigation/home_green_icone.svg`
              : `${import.meta.env.VITE_API_URL}/logo_navigation/home_icone.svg`
          }
          alt="icone de maison pour la page accueil"
        />
      </NavLink>
      <NavLink
        className="nav-link"
        id="search-link"
        to="/popote/search"
        aria-label="Lien page Recherche"
      >
        <h1 className="desktop-link">Rechercher</h1>
        <img
          className="mobile-link"
          src={
            location.pathname === "/popote/search"
              ? `${import.meta.env.VITE_API_URL}/logo_navigation/search_green_icone.svg`
              : `${import.meta.env.VITE_API_URL}/logo_navigation/search_icone.svg`
          }
          alt="icone popote pour la page recherche"
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to={isLogged ? "/popote/favorites" : "/connexion"}
        aria-label="Lien page Mes favoris"
      >
        <h1 className="desktop-link">Mes Favoris</h1>
        <img
          className="mobile-link"
          src={
            location.pathname === "/popote/favorites"
              ? `${import.meta.env.VITE_API_URL}/logo_navigation/favorite_green_icone.svg`
              : `${import.meta.env.VITE_API_URL}/logo_navigation/favorite_icone.svg`
          }
          alt="icone coeur pour la page favoris"
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to={isLogged ? "/popote/creation-recipe" : "/connexion"}
        aria-label="Lien page Creation de recette"
      >
        <h1 className="desktop-link">Créer une recette</h1>
        <img
          className="mobile-link"
          src={
            location.pathname === "/popote/creation-recipe"
              ? `${import.meta.env.VITE_API_URL}/logo_navigation/add_green_icone.svg`
              : `${import.meta.env.VITE_API_URL}/logo_navigation/add_icone.svg`
          }
          alt="icone de signe plus pour la page creation de recette"
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to={isLogged ? "/popote/profile" : "/connexion"}
        aria-label="Page Mon Profil"
      >
        <h1 className="desktop-link">Mon Profil</h1>
        <img
          className="mobile-link"
          src={
            location.pathname === "/popote/profile"
              ? `${import.meta.env.VITE_API_URL}/profile_green_icone.svg`
              : `${import.meta.env.VITE_API_URL}/profile_icone.svg`
          }
          alt="icone de personnage pour la page profile"
        />
      </NavLink>
    </nav>
  );
}

export default NavBar;
