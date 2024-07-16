import { useState } from "react";
import PropTypes from "prop-types";

function CreationIngredients({
  recipeIngLoad,
  setIngredientArray,
  quantityRef,
  unitRef,
}) {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [currentIngredientQuantity, setCurrentIngredientQuantity] =
    useState("");
  const [currentIngredientUnit, setCurrentIngredientUnit] = useState("");

  // const [quantityInput, setQuantityInput] = useState("");
  // const [unitInput, setUnitInput] = useState("");

  const handleAddIngredient = () => {
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

      console.info("ceci est id de l'ingredient", [
        ...ingredients,
        newIngredient,
      ]);
    }
  };

  const handleDeleteRow = (name) => {
    const renewIngredient = ingredients.filter((el) => el.name !== name);
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
          ref={quantityRef}
        />
        <input
          type="text"
          list="ingredient-unit-list"
          value={currentIngredientUnit}
          onChange={(e) => setCurrentIngredientUnit(e.target.value)}
          placeholder="g, unité, kg"
          ref={unitRef}
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
  quantityRef: PropTypes.string.isRequired,
  unitRef: PropTypes.string.isRequired,
};

export default CreationIngredients;
