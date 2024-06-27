import { useLoaderData } from "react-router-dom";
import DurationElement from "../components/DurationElement";
import NutValueElement from "../components/NutValueElement";

function RecipePage() {
  const recipeDetailData = useLoaderData();
  console.info(recipeDetailData);

  return (
    <section className="recipe-page-container">
      <h1 id="recipe-page-title">{recipeDetailData.title}</h1>
      <img
        id="recipe-page-img"
        src={import.meta.env.VITE_API_URL + recipeDetailData.url_photo}
        alt=""
      />

      <section className="recipe-page-context-element">
        <h2>Nombre de personne : {recipeDetailData.people_number}</h2>
        <DurationElement duration={recipeDetailData.duration} />
        <NutValueElement nutValue={recipeDetailData.nutValue} />
      </section>

      <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" checked />
          <span className="name">Ingredients</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">Instructions</span>
        </label>
      </div>

      <p>{recipeDetailData.step_description}</p>
    </section>
  );
}

export default RecipePage;
