import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <img
        src={`${import.meta.env.VITE_API_URL}/navbar_bg.svg`}
        className="mobile-link nav-bg"
        alt=""
      />
      <NavLink className="nav-link" to="/popote/" aria-label="Page d'acceuil">
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
          alt=""
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
          alt=""
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to="/popote/favorites"
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
          alt=""
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to="/popote/creation-recipe"
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
          alt=""
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to="/popote/profile"
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
          alt=""
        />
      </NavLink>
    </nav>
  );
}

export default NavBar;
