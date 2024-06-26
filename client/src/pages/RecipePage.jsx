import { useLoaderData } from "react-router-dom";
import DurationElement from "../components/DurationElement";
import NutValueElement from "../components/NutValueElement";

function RecipePage() {
  const recipeDetailData = useLoaderData();
  console.info(recipeDetailData);

  return (
    <section>
      <h1>{recipeDetailData.title}</h1>
      <img src={recipeDetailData.url_photo} alt="" />
      <h2>{recipeDetailData.people_number}</h2>
      <DurationElement duration={recipeDetailData.duration} />
      <NutValueElement nutValue={recipeDetailData.nutValue}/>
      <p>{recipeDetailData.step_description}</p>

      <h1>Page de la recette</h1>
    </section>
  );
}

export default RecipePage;
