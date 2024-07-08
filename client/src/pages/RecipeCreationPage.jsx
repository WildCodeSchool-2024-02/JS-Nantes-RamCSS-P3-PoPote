import { useState } from "react";

function RecipeCreationPage() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="recipe-creation-page">
      <h1>Ajout recette</h1>
      <form onSubmit={handleSubmit}>
        <div className="recipe-name">
          <h2>Titre</h2>
          <p>Maximum 50 caractères</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <img src="" alt="" />
        </div>

        <div className="nb-people-duration">
          <h3>Nombre de personnes</h3>
          <input type="number" />
          <h3>Durée</h3>
          <input type="time" />
        </div>

        <div className="futur-component">
          <div className="recipe-ingredients" />
          <div className="recipe-tools" />
        </div>

        <div className="recipe-description">
          <h3>Décrire les étapes</h3>
          <textarea
            id="recipe-description"
            name="description"
            rows="5"
            cols="33"
            placeholder="Etape 1 :
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam id cumque exercitationem ratione voluptatibus nobis necessitatibus autem at, rerum corrupti in assumenda sunt harum voluptatum! Cupiditate ducimus quasi debitis molestiae?"
          />
        </div>

        <input
          type="submit"
          value="Valider"
          className="submit-recipe-creation-button"
        />
      </form>
    </section>
  );
}

export default RecipeCreationPage;
