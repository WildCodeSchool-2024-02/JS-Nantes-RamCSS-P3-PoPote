import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import DurationElement from "../components/DurationElement";
import NutValueElement from "../components/NutValueElement";
import IngredientList from "../components/IngredientsList";
import NbPeopleElement from "../components/NbPeopleElement";
import ToolList from "../components/ToolsList";

function RecipePage() {
  const recipeDetailData = useLoaderData();
  console.info("coucou", recipeDetailData);

  const [inputChecked, setInputChecked] = useState("ingredients");

  const handleRadioChange = (event) => {
    setInputChecked(event.target.value);
    console.info(setInputChecked);
  };

  const ingredientArray = recipeDetailData[1].ingredientList.split(", ");
  console.info("ceci est", ingredientArray);

  const toolArray = recipeDetailData[2].toolList.split(", ");
  console.info("ceci est", toolArray);

  return (
    <section className="recipe-page-container">
      <h1 id="recipe-page-title">{recipeDetailData[0].title}</h1>
      <img
        className="recipe-page-img"
        src={import.meta.env.VITE_API_URL + recipeDetailData[0].url_photo}
        alt="illustration de la recette"
      />

      <section className="recipe-page-context-element">
        <NbPeopleElement peopleNb={recipeDetailData[0].people_number} />
        <DurationElement duration={recipeDetailData[0].duration} />
        <NutValueElement nutValue={recipeDetailData[0].nutValue} />
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
          <div className="ingredients-group">
            <h1>Ingredients : </h1>
            {ingredientArray.map((el) => (
              <IngredientList key={el} el={el} />
            ))}
          </div>
          <div className="tools-group">
            <h1>Ustensiles : </h1>
            {toolArray.map((el) => (
              <ToolList key={el} el={el} />
            ))}
          </div>
        </div>
      ) : (
        <div className="recipe-page-instructions-container">
          <h1>Instructions : </h1>
          <p>{recipeDetailData[0].step_description}</p>
        </div>
      )}
    </section>
  );
}

export default RecipePage;
