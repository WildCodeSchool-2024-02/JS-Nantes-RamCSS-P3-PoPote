import { useState } from "react";

function RecipeCreationPage() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="recipe-creation-page">
      <h1>Ajout recette</h1>
      <img src="" alt="" />
      <div className="recipe-name">
        <h2>Titre</h2>
        <p>Maximum 50 caractères</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
      {/* <div className="recipe-ingredients"></div>
      <div className="recipe-tools"></div>
      <div className="recipe-description"></div> */}
      {/* <textarea
        id="recipe-description"
        name="description"
        rows="5"
        cols="33"
        placeholder="Etape 1 :
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam id cumque exercitationem ratione voluptatibus nobis necessitatibus autem at, rerum corrupti in assumenda sunt harum voluptatum! Cupiditate ducimus quasi debitis molestiae?"
      ></textarea> */}
      <input
        type="submit"
        value="Valider"
        className="submit-recipe-creation-button"
      />
    </section>
  );
}

export default RecipeCreationPage;
