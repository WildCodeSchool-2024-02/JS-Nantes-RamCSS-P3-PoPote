// * Si tout s'est bien passé, on exécute une deuxième requête fetch, pour
// * pouvoir ajouter le chemin de l'image dans la base de données.
// * (je choisis arbitrairement le deuxième utilisateur, pour l'exemple).

import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

import DragAndDrop from "../components/DragAndDrop";
import CreationIngredients from "../components/CreationIngredients";
import CreationTools from "../components/CreationTools";
// import { recipe } from "../../../server/database/tables";

function RecipeCreationPage() {
  const IngToolLoader = useLoaderData();

  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const [ingredientArray, setIngredientArray] = useState([]);

  // Refs of recipe
  const titleRef = useRef();
  const durationRef = useRef();
  const nbPeopleRef = useRef();
  const descriptionRef = useRef();
  const userIdRef = useRef(localStorage.getItem("userid"));

  // Refs of add_ingredient
  const addIngredientRef = useRef(ingredientArray);
  console.info("ceci est le tableau d'ingredient", addIngredientRef);

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
        console.info("nom du fichier", filename);
        const recipeBody = {
          title: titleRef.current.value,
          url_photo: `/uploads/${filename}`,
          duration: durationRef.current.value,
          people_number: nbPeopleRef.current.value,
          step_description: descriptionRef.current.value,
          user_id: userIdRef.current,
        };

        console.info("user ref title", recipeBody.title);
        console.info("url_photo", recipeBody.url_photo);
        console.info("duration", recipeBody.duration);
        console.info("people_number", recipeBody.people_number);
        console.info("step", recipeBody.step_description);
        console.info("User id", userIdRef.current);
        console.info("User id", recipeBody.user_id);

        const fetchResponseRecipe = await fetch(
          `${import.meta.env.VITE_API_URL}/api/recipe`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(recipeBody),
          }
        );
        const recipeIdResponse = await fetchResponseRecipe.json();
        // à la place ajouter la route

        if (recipeIdResponse) {
          const recipeIdNumber = recipeIdResponse.insertId;
          console.info("recipe_id", recipeIdNumber);
          console.info("Fetch2 validé");

          const addIngredientBody = {
            recipe_id: recipeIdNumber,
            // ingredient_id: addIngredientRef,
          };
          console.info(addIngredientBody);
          // console.info("addingredientRef", addIngredientRef);

          const fetchResponseIngredient = await fetch(
            `${import.meta.env.VITE_API_URL}/api/recipe/add_ingredient`,
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
    } catch (err) {
      return console.error("Error during fetching", err);
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
            ref={titleRef}
          />
          <img src="" alt="" />
        </div>

        <div className="nb-people-duration">
          <h3>Nombre de personnes</h3>
          <input type="number" ref={nbPeopleRef} />
          <h3>Durée</h3>
          <input type="time" ref={durationRef} />
        </div>

        <div className="futur-component">
          <div className="recipe-ingredients" />
          <div className="recipe-tools" />
        </div>

        <CreationIngredients
          recipeIngLoad={IngToolLoader[0]}
          setIngredientArray={setIngredientArray}
          // addIngredientRef={addIngredientRef}
        />
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
            ref={descriptionRef}
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
