import { useLoaderData } from "react-router-dom";
import MaxiRecipeCard from "../components/MaxiRecipeCard";

function HomePage() {
  
  const recipeData = useLoaderData();
  console.info(recipeData);

  return (
    <>
      <h1>Page d'accueil</h1>
      <h1>Page d'accueil</h1>
      <MaxiRecipeCard recipeData={recipeData}/>
    </>
  );
}

export default HomePage;
