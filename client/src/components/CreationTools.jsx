import { useState } from "react";

function CreationTools() {
  const [ustensiles, setUstensiles] = useState([]);
  const [currentUstensile, setCurrentUstensile] = useState("");

  const handleAddUstensile = () => {
    if (currentUstensile && !ustensiles.includes(currentUstensile)) {
      setUstensiles([...ustensiles, currentUstensile]);
      setCurrentUstensile("");
    }
  };

  return (
    <>
      <div>
        <h2>Ustensile :</h2>
        <input
          type="text"
          value={currentUstensile}
          onChange={(e) => setCurrentUstensile(e.target.value)}
          list="ustensile-list"
          placeholder="Sélectionnez un ustensile"
        />
        <datalist id="ustensile-list">
          <option value="Four">Four</option>
          <option value="Micro-ondes">Micro-ondes</option>
          <option value="Fromage">Fromage</option>
          <option value="Asperge">Asperge</option>
          <option value="Basilic">Basilic</option>
          <option value="Poulet">Poulet</option>
        </datalist>
        <button type="button" onClick={handleAddUstensile}>
          Ajouter
        </button>
      </div>
      <ul>
        {ustensiles.map((ustensile) => (
          <li key={ustensile}>{ustensile}</li>
        ))}
      </ul>
    </>
  );
}

export default CreationTools;
