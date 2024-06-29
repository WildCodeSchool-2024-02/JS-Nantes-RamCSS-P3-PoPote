import team from "../assets/about/team.jpg";

function AboutPage() {
  return (
    <div className="register-page">
      <h1>About page</h1>
      <img
        src={team}
        className="img-team"
        alt="Florine, Michael, Mickael et Théo, tous souriant, entrain de manger une glace"
      />
    </div>
  );
}

export default AboutPage;
