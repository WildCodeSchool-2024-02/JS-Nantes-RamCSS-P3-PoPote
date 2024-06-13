function NavBar() {
  return (
    <nav className="desktop-navbar-container">
      <a className="desktop-navbar-link" href="/" aria-label="Page d'acceuil" />
      <a
        className="desktop-navbar-link"
        href="/search"
        aria-label="Page Recherche"
      >
        Rechercher
      </a>
      <a
        className="desktop-navbar-link"
        href="/favorites"
        aria-label="Page Mes favoris"
      >
        Mes favoris
      </a>
      <a
        className="desktop-navbar-link"
        href="/creation-recipe"
        aria-label="Page Creation de recette"
      >
        {" "}
        Créer une recette
      </a>
      <a
        className="desktop-navbar-link"
        href="/profile"
        aria-label="Page Mon Profil"
      >
        Mon Profil
      </a>

      <a className="mobile-navbar" href="/" aria-label="Page d'acceuil" />
    </nav>
  );
}

export default NavBar;
