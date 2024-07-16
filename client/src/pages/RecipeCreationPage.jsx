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

  const [ingredientArray, setIngredientArray] = useState([]);

  // Refs of recipe
  const titleRef = useRef();
  const durationRef = useRef();
  const nbPeopleRef = useRef();
  const descriptionRef = useRef();
  const userIdRef = useRef(localStorage.getItem("userid"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    //*  ------------ fetch 1 : Post du fichier image dans upload ------------

    // passage du fichier image du coté serveur dans le dossier upload
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
      // si erreur => message d'erreur
      if (!addFileFetch.ok) {
        const errorText = await addFileFetch.text();
        throw new Error(`Error ${addFileFetch.status}: ${errorText}`);
      }
      // si ok => passage du nom du fichier dans la réponse.
      const fileResponse = await addFileFetch.json();

      console.info("Fetch1 validé");

      //* ------------ fetch 2 : récupération des input titre, Nombre de personnes, durée ---------

      // objet contenant les ref des inputs à injecter dans le body
      const recipeBody = {
        title: titleRef.current.value,
        url_photo: `/uploads/${fileResponse.filename}`,
        duration: durationRef.current.value,
        people_number: nbPeopleRef.current.value,
        step_description: descriptionRef.current.value,
        user_id: userIdRef.current,
      };

      const fetchResponseRecipe = await fetch(
        `${import.meta.env.VITE_API_URL}/api/recipe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(recipeBody),
        }
      );

      // conserve l'id de la recette de la réponse
      const recipeIdResponse = await fetchResponseRecipe.json();

      if (!recipeIdResponse) {
        const errorText = await recipeIdResponse.text();
        throw new Error(`Error ${recipeIdResponse.status}: ${errorText}`);
      }

      if (recipeIdResponse) {
        const recipeIdNumber = recipeIdResponse.insertId;

        console.info("Fetch2 validé");

        // * ------------- Fetch 3 : récupération d'un tableau de donnée pour l'input ingredient ----------------
        const addIngredientBody = {
          recipeId: recipeIdNumber,
          ingredientArray,
        };
        
        const fetchResponseIngredient = await fetch(
          `${import.meta.env.VITE_API_URL}/api/addIngredient`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addIngredientBody),
          }
        );

        if (!fetchResponseIngredient) {
          const errorText = await fetchResponseIngredient.text();
          throw new Error(`Error ${fetchResponseIngredient.status}: ${errorText}`);
        }
    
          console.info("Fetch3 validé");

        // * -------------- Fetch 4 : récupération d'un tableau de donnée pour l'input tool -----------------

        // const addToolBody = {
        //   id:,
        //   quantity:,
        //   tool:,
        // }

        if (fetchResponseIngredient) {
          const fetchResponseTool = await fetch(
            `${import.meta.env.VITE_API_URL}/api/tool`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({}),
            }
          );
          console.info(fetchResponseTool);
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
