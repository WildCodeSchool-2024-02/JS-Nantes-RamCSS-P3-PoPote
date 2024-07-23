import { useLoaderData } from "react-router-dom";
import { useState } from "react";

function AdminPage() {
  const BrowseRecipes = useLoaderData();
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedRecipeId(event.target.value);
  };

  async function deleteSubmit(event) {
    event.preventDefault();

    // vérifie
    if (selectedRecipeId === "null" || !selectedRecipeId) {
      return;
    }

    // Effectue la requête fetch pour supprimer la recette
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/${selectedRecipeId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          response.sendStatus(202);
          response.send(
            "La recette a bien été supprimée de la base de données"
          );
        } else {
          response.sendStatus(417);
          response.send("Erreur, la recette n'a pas été supprimée");
        }
      })

      .catch((error) => {
        error.sendStatus(417).send("Error deleting recipe:", error);
        // Une erreur s'est produite lors de la suppression de la recette
      });
  }

  return (
    <section className="admin-section">
      <form onSubmit={deleteSubmit}>
        <label htmlFor="recipe">Recettes : </label>
        <select name="Recette" id="deleteRecipe" onChange={handleSelectChange}>
          <option value="null">Choisir</option>
          {BrowseRecipes.map((el) => (
            <option key={el.id} value={el.id}>
              {el.title}
            </option>
          ))}
        </select>
        <input type="submit" value="Supprimer la recette" />
      </form>
    </section>
  );
}

export default AdminPage;
