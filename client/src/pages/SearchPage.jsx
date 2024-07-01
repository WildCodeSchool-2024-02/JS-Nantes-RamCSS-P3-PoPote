import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MaxiRecipeCard from "../components/MaxiRecipeCard";

function SearchPage() {
  const data = useLoaderData();
  const [query, setQuery] = useState("");

  const recipes = data || [];

  // filtre recherche
  const filteredRecipe =
    query !== ""
      ? recipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(query.toLowerCase()) ||
            recipe.ingredients.toLowerCase().includes(query.toLowerCase())
        )
      : recipes;

  return (
    <>
      <h1>Page de recherche</h1>

      <SearchBar query={query} setQuery={setQuery} />

      <h2>Catégorie de recherches</h2>

      <h2>Résultats</h2>

      <ul>
        {filteredRecipe.length > 0 ? (
          filteredRecipe.map((el) => (
            <MaxiRecipeCard
              key={el.id}
              title={el.title}
              duration={el.duration}
              photo={el.url_photo}
              nutValue={el.nutValue}
            />
          ))
        ) : (
          <li>Aucune recette trouvée.</li>
        )}
      </ul>
    </>
  );
}

export default SearchPage;
