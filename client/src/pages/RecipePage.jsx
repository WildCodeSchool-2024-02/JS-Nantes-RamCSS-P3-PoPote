import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import DurationElement from "../components/DurationElement";
import NutValueElement from "../components/NutValueElement";
import IngredientsList from "../components/IngredientsList";
import ToolsList from "../components/ToolsList";

function RecipePage() {
  const recipeDetailData = useLoaderData();
  console.info(recipeDetailData);

  const [inputChecked, setInputChecked] = useState("ingredients");

  const handleRadioChange = (event) => {
    setInputChecked(event.target.value);
    console.info(setInputChecked);
  };

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

      <div className="recipe-page-radio-group">
        <label className="recipe-page-radio-label">
          <input
            className="recipe-page-radio-input"
            type="radio"
            name="radio"
            value="ingredients"
            checked={inputChecked === "ingredients"}
            onChange={handleRadioChange}
          />
          <span className="recipe-page-span-name">Ingredients</span>
        </label>

        <label className="recipe-page-radio-label">
          <input
            className="recipe-page-radio-input"
            type="radio"
            name="radio"
            value="instructions"
            checked={inputChecked === "instructions"}
            onChange={handleRadioChange}
          />
          <span className="recipe-page-span-name">Instructions</span>
        </label>
      </div>

      {inputChecked === "ingredients" ? (
        <div className="recipe-page-ingredients-container">
          <IngredientsList />
          <ToolsList />
        </div>
      ) : (
        <div className="recipe-page-instructions-container">
          <p>{recipeDetailData.step_description}</p>
        </div>
      )}
    </section>
  );
}

export default RecipePage;
