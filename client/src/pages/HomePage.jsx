// import Cookies from "js-cookie";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MaxiRecipeCard from "../components/MaxiRecipeCard";

function HomePage() {
  const recipeData = useLoaderData();
  // const { user } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  // const user = JSON.parse(Cookies.get("user"));
  // const firstname = user ? user.firstname : "Visiteur";

  return (
    <section className="home-page-container">
      <h1 className="hp-container-title">
        {" "}
        Hello {user?.firstname || "petit bouchon"}
      </h1>
      <h2 className="hp-container-title"> Que veux-tu manger aujourd'hui ?</h2>
      <h2 className="hp-container-title"> Recette recommandés</h2>
      <article className="recipe-card-list">
        {recipeData.map((el) => (
          <MaxiRecipeCard
            key={el.id}
            id={el.id}
            title={el.title}
            photo={el.url_photo}
            duration={el.duration}
            nutValue={el.nutValue}
          />
        ))}
      </article>
    </section>
  );
}

export default HomePage;
