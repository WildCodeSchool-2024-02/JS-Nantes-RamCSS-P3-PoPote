import { useState } from "react";
import PropTypes from "prop-types";

function CreationIngredients({ recipeIngLoad,  }) {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [currentIngredientQuantity, setCurrentIngredientQuantity] =
    useState("");
  const [currentIngredientUnity, setCurrentIngredientUnity] = useState("");

  const handleAddIngredient = () => {
    if (
      currentIngredient &&
      !ingredients.some((ing) => ing.name === currentIngredient)
    ) {
      const newIngredient = {
        name: currentIngredient,
        unity: currentIngredientUnity,
        quantity: currentIngredientQuantity,
      };
      setIngredients([...ingredients, newIngredient]);
      setCurrentIngredient("");
      setCurrentIngredientUnity("");
      setCurrentIngredientQuantity("");
      // setIngredientArray(newIngredient);
      console.info("%c%s", "color: #00a3cc", ingredients);
    }
  };

  const handleDeleteRow = (name) => {
    const renewIngredient = ingredients.filter(
      (ingredient) => ingredient.name !== name
    );
    setIngredients(renewIngredient);
  };

  return (
    <>
      <div>
        <h2>Ingredients :</h2>
        <input
          type="text"
          list="ingredient-quantity-list"
          value={currentIngredientQuantity}
          onChange={(e) => setCurrentIngredientQuantity(e.target.value)}
          placeholder="Quantité de l'ingrédient"
        />
        <input
          type="text"
          list="ingredient-unity-list"
          value={currentIngredientUnity}
          onChange={(e) => setCurrentIngredientUnity(e.target.value)}
          placeholder="g, unité, kg"
        />
        <input
          type="text"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          list="ingredient-list"
          placeholder="Sélectionnez un ingrédient"
        />

        <datalist id="ingredient-list">
          {recipeIngLoad.map((el) => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          ))}
        </datalist>
        <button type="button" onClick={handleAddIngredient}>
          Ajouter
        </button>
      </div>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.quantity} {ingredient.unity} {ingredient.name}
            <button
              type="button"
              onClick={() => handleDeleteRow(ingredient.name)}
            >
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
};

export default CreationIngredients;
