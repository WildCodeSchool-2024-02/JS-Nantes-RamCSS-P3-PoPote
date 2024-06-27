import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function SearchPage() {
  const recipes = useLoaderData();
  // const ingredients = useLoaderData();
  const [query, setQuery] = useState("");

  // console.log("c'est koi ingredients?", ingredients);
  // console.log("c'est koi recipes?", recipes);

  // filtre recherche
  const filteredRecipe =
    query !== ""
      ? recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(query.toLowerCase())
        )
      : recipes;

  return (
    <>
      <h1>Page de recherche</h1>

      <SearchBar query={query} setQuery={setQuery} />
      <ul>
        {filteredRecipe.length > 0 ? (
          filteredRecipe.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
            </li>
          ))
        ) : (
          <li>Aucune recette trouvée.</li>
        )}
      </ul>
    </>
  );
}

export default SearchPage;
