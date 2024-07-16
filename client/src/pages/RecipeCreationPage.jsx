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
  const titleRef = useRef();
  const durationRef = useRef();
  const nbPeopleRef = useRef();
  const descriptionRef = useRef();
  const userIdRef = useRef(localStorage.getItem("userid"));

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
      console.info("user ref user id", userIdRef);

      // fetch 2 : récupération des input titre, Nombre de personnes, durée,

      if (fileResponse) {
        const { filename } = fileResponse;
        console.info(filename);

        const body = {
          title: titleRef,
          url_photo: `/assets/recipe/${filename}`,
          duration: durationRef.current.value,
          people_number: nbPeopleRef.current.value,
          step_description: descriptionRef.current.value,
          user_id: userIdRef.current.value,
        };
        console.info("user ref title", titleRef);
        const fetchResponseRecipe = await fetch(
          `${import.meta.env.VITE_API_URL}/api/recipe`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ body }),
          }
        );

        console.info("Fetch2 validé");

        // à la place ajouter la route

        if (fetchResponseRecipe) {
          const fetchResponseIngredient = await fetch(
            `${import.meta.env.VITE_API_URL}/api/ingredient`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:
                // ajouter les ref des inputs a récuperer
                JSON.stringify({ filename }),
            }
          );
          console.info(fetchResponseIngredient);

          if (fetchResponseIngredient) {
            const fetchResponseTool = await fetch(
              `${import.meta.env.VITE_API_URL}/api/tool`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body:
                  // ajouter les ref des inputs a récuperer
                  JSON.stringify({ filename }),
              }
            );
            console.info(fetchResponseTool);
          }
        }
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
      <form className="form-creation-page" onSubmit={handleSubmit}>
        <div className="recipe-name">
          <h2>Titre</h2>
          <p>Maximum 50 caractères</p>
          <input
            className="input-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
          />
          <img src="" alt="" />
        </div>

        <div className="nb-people-duration">
          <h3>Nombre de personnes</h3>
          <input className="input-nb-people" type="number" ref={nbPeopleRef} />
          <h3>Durée</h3>
          <input className="input-time" type="time" ref={durationRef} />
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
