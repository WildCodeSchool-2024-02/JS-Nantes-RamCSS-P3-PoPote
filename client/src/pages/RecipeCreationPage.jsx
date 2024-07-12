import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

import DragAndDrop from "../components/DragAndDrop";
import CreationIngredients from "../components/CreationIngredients";
import CreationTools from "../components/CreationTools";

function RecipeCreationPage() {
  const IngToolLoader = useLoaderData();

  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  // Refs
  const durationRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // fetch 1 : Post du fichier image dans upload;
    const data = new FormData();
    data.append("file", files[0]);

    try {
      const addFileFetch = await fetch(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const fileResponse = await addFileFetch.json();
      console.info("Fetch1 validé");

      // fetch 2 : récupération des input titre, Nombre de personnes, durée,

      if (fileResponse) {
        const { filename } = fileResponse;
        console.info(filename);

        const body = {
          titre: title,
          duration: durationRef.current.value,
          url_photo: `/assets/recipe/${filename}`,
        };
        console.info("coucou1", durationRef.current);
        console.info("coucou2", durationRef.current.value);
        console.info(body);

        const fetchResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/recipe`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:
              // ajouter
              JSON.stringify({ filename }),
          }
        );
        console.info("Fetch2 validé");
        console.warn(fetchResponse);
        // à la place ajouter la route
        return null;
      }

      // * Si tout s'est bien passé, on exécute une deuxième requête fetch, pour
      // * pouvoir ajouter le chemin de l'image dans la base de données.
      // * (je choisis arbitrairement le deuxième utilisateur, pour l'exemple).
    } catch (err) {
      return err;
    }
    return null;
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
            // ref={titleRef}
          />
          <img src="" alt="" />
        </div>

        <div className="nb-people-duration">
          <h3>Nombre de personnes</h3>
          <input type="number" />
          <h3>Durée</h3>
          <input type="time" ref={durationRef} />
        </div>

        <div className="futur-component">
          <div className="recipe-ingredients" />
          <div className="recipe-tools" />
        </div>

        <CreationIngredients recipeIngLoad={IngToolLoader[0]} />
        <CreationTools recipeToolLoad={IngToolLoader[1]} />

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
        <DragAndDrop
          files={files}
          setFiles={setFiles}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="submit-recipe-creation-button"
        >
          Valider
        </button>
      </form>
    </section>
  );
}

export default RecipeCreationPage;
