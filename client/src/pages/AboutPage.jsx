function AboutPage() {
  return (
    <div className="register-page">
      <h1>About page</h1>
      <img
        src={`${import.meta.env.VITE_API_URL}/about/team.jpg`}
        className="img-team"
        alt="Florine, Michael, Mickael et Théo, tous souriant, entrain de manger une glace"
      />
      <p>Troll de troy</p>
    </div>
  );
}

export default AboutPage;
