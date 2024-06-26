import { useLoaderData } from "react-router-dom";
import DurationElement from "../components/DurationElement";

function RecipePage() {
  const recipeDetailData = useLoaderData();

  return (
    <>
      <h1>{recipeDetailData.title}</h1>
      <img src={recipeDetailData.url_photo} alt="" />
      <h2>{recipeDetailData.people_number}</h2>
      <DurationElement duration={recipeDetailData.duration} />

      <h2>{recipeDetailData.nutValue}</h2>
      <h1>Page de la recette</h1>
    </>
  );
}

export default RecipePage;
