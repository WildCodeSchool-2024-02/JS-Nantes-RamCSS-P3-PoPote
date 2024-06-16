import UserForm from "../components/UserForm";

function RegisterPage() {
  return (
    <section className="register-page">
      <div className="desktop-frame">
      <h1>Bienvenue chez</h1>
      <img src="./src/assets/logo/logo_popote_blanc.svg" alt="logo Popote" />
      <h2>Rejoins la communauté</h2>
      <p>
        Retrouve tes recettes préférées et les recettes du moment pour rester
        inspiré au quotidien !
      </p>
      <UserForm />
      </div>
    </section>
  );
}

export default RegisterPage;
