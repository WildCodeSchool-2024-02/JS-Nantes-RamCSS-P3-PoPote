import PropTypes from "prop-types";

// Va servir pour :
// - la liste d'ingrédients de la page Recette
// - la liste d'ingrédients de la page Recipe Creation

function IngredientsList({ el }) {
  return (
    <section className="ingredient-list-container">
      <h3>{el}</h3>
    </section>
  );
}

IngredientsList.propTypes = {
  el: PropTypes.string.isRequired,
};

export default IngredientsList;
