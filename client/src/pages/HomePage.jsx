import { useLoaderData } from "react-router-dom";
import MaxiRecipeCard from "../components/MaxiRecipeCard";

function HomePage() {
  const recipeData = useLoaderData();
  console.info(recipeData);

  return (
    <section className="home-page-container">
      <h1 className="hp-container-title"> Hello USERS </h1>
      <h2 className="hp-container-title"> Que veux-tu manger aujourd'hui</h2>
      <h2 className="hp-container-title"> Recette recommandés</h2>
      <article className="recipe-card-list">
        {recipeData.map((el) => (
          <MaxiRecipeCard
            key={el.id}
            id={el.id}
            title={el.title}
            photo={el.url_photo}
            duration={el.duration}
          />
        ))}
      </article>
    </section>
  );
}

export default HomePage;
