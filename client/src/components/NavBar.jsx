import LogoPopote from "../assets/logo/logo_popote_last.png";

function NavBar() {
  return (
    <nav className="navbar-desktop navbar-mobile">
      <a className="desktop-link" href="/" aria-label="Page d'acceuil">
        <img src={LogoPopote} alt="logo Popote" />
      </a>
      <a
        className="desktop-link"
        href="/search"
        aria-label="Page Recherche"
      >
        Rechercher
      </a>
      <a
        className="desktop-link"
        href="/favorites"
        aria-label="Page Mes favoris"
      >
        Mes favoris
      </a>
      <a
        className="desktop-link"
        href="/creation-recipe"
        aria-label="Page Creation de recette"
      >
        {" "}
        Créer une recette
      </a>
      <a
        className="desktop-link"
        href="/profile"
        aria-label="Page Mon Profil"
      >
        Mon Profil
      </a>

      <a className="mobile-navbar" href="/" aria-label="Page d'acceuil" >
      HOME
      </a>
    </nav>
  );
}

export default NavBar;
