import team from "../assets/img/team.jpg";

function AboutPage() {
  return (
    <div className="register-page">
      <h1>About page</h1>
      <img
        src={team}
        className="img-team"
        alt="Florine, Michael, Mickael et théo, tous souriant, entrain de manger une glace"
      />
    </div>
  );
}

export default AboutPage;
