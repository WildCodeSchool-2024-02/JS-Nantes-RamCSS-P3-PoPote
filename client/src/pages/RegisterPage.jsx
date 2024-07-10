import UserForm from "../components/UserForm";

function RegisterPage() {
  return (
    <section className="register-page">
      <div className="desktop-frame">
        <h2 className="register-title">Bienvenue chez</h2>
        <img
          src={`${import.meta.env.VITE_API_URL}/logo/logo_popote_blanc.svg`}
          alt="logo Popote"
          className="logo-blanc"
        />
        <img
          src={`${import.meta.env.VITE_API_URL}/logo/logo_popote_orange.svg`}
          alt="logo Popote"
          className="logo-orange"
        />
        <h2>Rejoins la communauté</h2>
        {/* <p>
        Retrouve tes recettes préférées et les recettes du moment pour rester
        inspiré au quotidien !
      </p> */}
        <UserForm />
      </div>
    </section>
  );
}

export default RegisterPage;
