import { useState } from "react";
import PropTypes from "prop-types";

function CreationTools({ recipeToolLoad }) {
  const [tools, setTools] = useState([]);
  const [currentTools, setCurrentTools] = useState("");
  const [currentToolsQuantity, setCurrentToolsQuantity] = useState("");

  const handleAddTools = () => {
    if (currentTools && !tools.some((tool) => tool.name === currentTools)) {
      const newTools = {
        name: currentTools,
        quantity: currentToolsQuantity,
      };
      setTools([...tools, newTools]);
      setCurrentTools("");
      setCurrentToolsQuantity("");
    }
  };

  const handleDeleteRow = (name) => {
    const newTools = tools.filter((tool) => tool.name !== name);
    setTools(newTools);
  };

  return (
    <>
      <div>
        <h2>Ustensile :</h2>
        <input
          type="text"
          list="tool-quantity-list"
          value={currentToolsQuantity}
          onChange={(e) => setCurrentToolsQuantity(e.target.value)}
          placeholder="Quantité de l'ustensile"
        />

        <input
          type="text"
          value={currentTools}
          onChange={(e) => setCurrentTools(e.target.value)}
          list="tool-list"
          placeholder="Sélectionnez un ustensile"
        />

        <datalist id="tool-list">
          {recipeToolLoad.map((el) => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          ))}
        </datalist>
        <button type="button" onClick={handleAddTools}>
          Ajouter
        </button>
      </div>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            {tool.quantity} {tool.name}
            <button type="button" onClick={() => handleDeleteRow(tool.name)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

CreationTools.propTypes = {
  recipeToolLoad: PropTypes.string.isRequired,
};

export default CreationTools;
