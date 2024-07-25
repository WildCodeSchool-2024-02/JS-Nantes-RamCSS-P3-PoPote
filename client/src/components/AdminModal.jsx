import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


 function AdminModal({ closeAdminModal }) {
    // Close the modal after savings
    // closeModal();

  const BrowseRecipes = useLoaderData();
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  // Surveille quels recette est selectionnée dans le select
  const handleSelectChange = (event) => {
    setSelectedRecipeId(event.target.value);
  };

  // function pour supprimer une recette
  async function deleteSubmit(event) {
    event.preventDefault();

    // vérifie si une recette a bien était sélectionnée
    if (selectedRecipeId === "null" || !selectedRecipeId) {
    return  toast.warn("Vous devez sélectionner une recette");
    }

    // Effectue la requête fetch pour supprimer la recette
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/${selectedRecipeId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          toast.success(
            "La recette a bien été supprimée de la base de données"
          );
        } else {
          toast.error("Erreur, la recette n'a pas été supprimée");
        }
      })

      .catch((error) => {
        toast.warn(
          "Une erreur s'est produite lors de la suppression de la recette"
        );
        error.sendStatus(417).send("Error deleting recipe:", error);
      }
    );
    return  toast.warn(
      "Une erreur s'est produite lors de la suppression de la recette"
    );
  }

  return (
<section className="modal">
      <button type="button" onClick={closeAdminModal} className="close-button">
        &times;
      </button>
      <div className="modal-content">
        <h2>Supprimer une recette</h2>
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
      <ToastContainer position="bottom-right" />
      </div>
    </section>
  );
}

AdminModal.propTypes = {
  closeAdminModal: PropTypes.func.isRequired
};

export default AdminModal;
