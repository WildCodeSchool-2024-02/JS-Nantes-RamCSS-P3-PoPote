import { useState } from "react";
import PropTypes from "prop-types";

function CreationIngredients({
  recipeIngLoad,
  setIngredientArray,
  ingredientQuantityRef,
  ingredientChoiceRef,
  ingredientUnityRef,
}) {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [currentIngredientQuantity, setCurrentIngredientQuantity] =
    useState("");
  const [currentIngredientUnit, setCurrentIngredientUnit] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleAddIngredient = () => {
    // Vérification des champs requis
    // const newErrors = {
    //   currentIngredient: !currentIngredient,
    //   currentIngredientQuantity: !currentIngredientQuantity,
    //   currentIngredientUnit: !currentIngredientUnit,
    // };

    // Active l'effet de clic
    setClicked(true);

    // Désactive l'effet de clic après l'animation
    setTimeout(() => {
      setClicked(false);
    }, 300);

    if (
      currentIngredient &&
      !ingredients.some((ing) => ing.name === currentIngredient)
    ) {
      const [idIngredient] = recipeIngLoad.filter(
        (el) => el.name === currentIngredient
      );

      const newIngredient = {
        id: idIngredient.id,
        name: currentIngredient,
        unit: currentIngredientUnit,
        quantity: currentIngredientQuantity,
      };

      setIngredients([...ingredients, newIngredient]);
      setCurrentIngredient("");
      setCurrentIngredientUnit("");
      setCurrentIngredientQuantity("");

      setIngredientArray([...ingredients, newIngredient]);
    }
  };

  const handleDeleteRow = (name) => {
    const renewIngredient = ingredients.filter((el) => el.name !== name);
    setIngredients(renewIngredient);
  };

  return (
    <>
      <div>
        <h3>Ingredients :</h3>
        <div className="input-ingredients">
          <input
            className="ingredient-quantity"
            type="number"
            list="ingredient-quantity-list"
            value={currentIngredientQuantity}
            ref={ingredientQuantityRef}
            onChange={(e) => setCurrentIngredientQuantity(e.target.value)}
            placeholder="Quantité de l'ingrédient *"
            min="0"
          />

          <input
            className="ingredient-unity"
            type="text"
            list="ingredient-unit-list"
            value={currentIngredientUnit}
            ref={ingredientUnityRef}
            onChange={(e) => setCurrentIngredientUnit(e.target.value)}
            placeholder="g, unité, kg *"
          />

          <input
            className="ingredient-selection"
            type="text"
            value={currentIngredient}
            ref={ingredientChoiceRef}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            list="ingredient-list"
            placeholder="Sélectionnez un ingrédient *"
          />
        </div>
        <datalist id="ingredient-list">
          {recipeIngLoad.map((el) => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          ))}
        </datalist>
        <button
          style={{ cursor: "pointer" }}
          className={`add-button ${clicked ? "clicked" : ""}`}
          type="button"
          onClick={handleAddIngredient}
        >
          Ajouter
        </button>
      </div>
      <ul className="add-ingredients">
        {ingredients.map((el) => (
          <li key={el.id}>
            {el.quantity} {el.unit} {el.name}
            <button type="button" onClick={() => handleDeleteRow(el.name)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

CreationIngredients.propTypes = {
  recipeIngLoad: PropTypes.string.isRequired,
  setIngredientArray: PropTypes.string.isRequired,
  ingredientQuantityRef: PropTypes.number.isRequired,
  ingredientChoiceRef: PropTypes.string.isRequired,
  ingredientUnityRef: PropTypes.string.isRequired,
};

export default CreationIngredients;
