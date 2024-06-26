import { NavLink, useLocation } from "react-router-dom";
import LogoPopote from "../assets/logo/logo_popote_last.png";

import home from "../assets/home_icone.svg";
import homegreen from "../assets/home_green_icone.svg";

import search from "../assets/search_icone.svg";
import searchgreen from "../assets/search_green_icone.svg";

import add from "../assets/add_icone.svg";
import addgreen from "../assets/add_green_icone.svg";

import favorite from "../assets/favorite_icone.svg";
import favoritegreen from "../assets/favorite_green_icone.svg";

import profile from "../assets/profile_icone.svg";
import profilegreen from "../assets/profile_green_icone.svg";

import navBg from "../assets/navbar_bg.svg";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <img src={navBg} className="mobile-link nav-bg" alt="" />
      <NavLink className="nav-link" to="/popote/" aria-label="Page d'acceuil">
        <img
          className="desktop-link"
          id="popote-logo"
          src={LogoPopote}
          alt="logo Popote"
        />
        <img
          className="mobile-link"
          src={location.pathname === "/popote/" ? homegreen : home}
          alt=""
        />
      </NavLink>
      <NavLink
        className="nav-link"
        id="search-link"
        to="/popote/search"
        aria-label="Page Recherche"
      >
        <h1 className="desktop-link">Rechercher</h1>
        <img
          className="mobile-link"
          src={location.pathname === "/popote/search" ? searchgreen : search}
          alt=""
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to="/popote/favorites"
        aria-label="Page Mes favoris"
      >
        <h1 className="desktop-link">Mes Favoris</h1>
        <img
          className="mobile-link"
          src={
            location.pathname === "/popote/favorites" ? favoritegreen : favorite
          }
          alt=""
        />
      </NavLink>
      <NavLink
        className="nav-link"
        to="/popote/creation-recipe"
        aria-label="Page Creation de recette"
      >
        <h1 className="desktop-link">Créer une recette</h1>
        <img
          className="mobile-link"
          src={location.pathname === "/popote/creation-recipe" ? addgreen : add}
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
          src={location.pathname === "/popote/profile" ? profilegreen : profile}
          alt=""
        />
      </NavLink>
    </nav>
  );
}

export default NavBar;
