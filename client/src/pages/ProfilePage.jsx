function ProfilePage() {
  const firstname = localStorage.getItem("user-firstname");
  const lastname = localStorage.getItem("user-lastname");

  return (
    <section className="my-profile">
      <h1>Mon compte</h1>
      <div>
      <img
          id="profile-picture-img"
          src={`${import.meta.env.VITE_API_URL}/profile/sophie-nancier.jpg`}
          alt="profil de l'utilisateur"
        />
        <p>{firstname} {lastname}</p>
        {/* <img />
        <img /> */}
      </div>
      <button type="submit">DECONNEXION</button>
      <h2>Mes recettes créées</h2>
    </section>
  );
}

export default ProfilePage;
