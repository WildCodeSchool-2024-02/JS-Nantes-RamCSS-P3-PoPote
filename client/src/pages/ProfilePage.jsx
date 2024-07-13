function ProfilePage() {
  const firstname = localStorage.getItem("user-firstname");
  const lastname = localStorage.getItem("user-lastname");

  return (
    <section className="my-profile">
      <h1>Mon compte</h1>
      <div className="bloc-name">
        <img
          id="profile-picture-img"
          src={`${import.meta.env.VITE_API_URL}/profile/sophie-nancier.jpg`}
          alt="profil de l'utilisateur"
        />
        <p>
          {firstname} {lastname}
        </p>
        <div className="profile-picto">
          <img
            id="dots-img"
            src={`${import.meta.env.VITE_API_URL}/profile/dots.svg`}
            alt="dots to go to parameters"
          />
          <img
            id="pen-modification-img"
            src={`${import.meta.env.VITE_API_URL}/profile/pen-modification.png`}
            alt="pen to modify profile"
          />
        </div>
      </div>
      <button type="submit" className="deconnexion-button">
        DECONNEXION
      </button>
      <h2>Mes recettes créées</h2>
    </section>
  );
}

export default ProfilePage;
