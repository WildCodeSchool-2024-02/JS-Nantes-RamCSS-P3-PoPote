import { useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DragAndDrop from "../components/DragAndDrop";
import CreationIngredients from "../components/CreationIngredients";
import CreationTools from "../components/CreationTools";
import "react-toastify/dist/ReactToastify.css";

function RecipeCreationPage() {
  const IngToolLoader = useLoaderData();

  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const [ingredientArray, setIngredientArray] = useState([]);
  const [toolArray, setToolArray] = useState([]);
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  // Refs of recipe
  const titleRef = useRef();
  const durationRef = useRef();
  const nbPeopleRef = useRef();
  const descriptionRef = useRef();
  const ingredientQuantityRef = useRef();
  const ingredientUnityRef = useRef();
  const ingredientChoiceRef = useRef();
  const userIdRef = useRef(localStorage.getItem("userId"));

  // ******** Fonction de validation du formulaire ********

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Active l'effet de clic
    setClicked(true);

    // Désactive l'effet de clic après l'animation
    setTimeout(() => {
      setClicked(false);
    }, 300);

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
        toast.error("Tous les champs obligatoires* ne sont pas remplis");
        const errorText = await addFileFetch.text();
        throw new Error(`Error ${addFileFetch.status}: ${errorText}`);
      }

      // si ok => passage du nom du fichier dans la réponse.
      const fileResponse = await addFileFetch.json();

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
      // renvoi l'id de la recette dans la réponse
      if (recipeIdResponse) {
        const recipeIdNumber = recipeIdResponse.insertId;

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
          throw new Error(
            `Error ${fetchResponseIngredient.status}: ${errorText}`
          );
        }

        // * -------------- Fetch 4 : récupération d'un tableau de donnée pour l'input tool -----------------
        const addToolBody = {
          recipeId: recipeIdNumber,
          toolArray,
        };

        if (fetchResponseIngredient) {
          const fetchResponseTool = await fetch(
            `${import.meta.env.VITE_API_URL}/api/addTool`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(addToolBody),
            }
          );
          if (!fetchResponseTool) {
            const errorText = await fetchResponseTool.text();
            throw new Error(`Error ${fetchResponseTool.status}: ${errorText}`);
          }
        }

        // * -----------Echec des fetchs : si les fetchs ont échoué catch err -----------

        toast.success(
          "La recette a bien été créé, vous allez maintenant être redirigé vers votre page profil pour la consulter"
        );
        setTimeout(() => navigate("/popote/profile"), 5000);

        return null;
      }
    } catch (err) {
      toast.error(
        "Erreur, la création de votre recette n'a pas pu aboutir, merci de réessayer"
      );
      return console.error("Error during fetching", err);
    }
    return null;
  };

  // ******** Fin de la validation de formulaire ************

  return (
    <section className="recipe-creation-page">
      <h2 className="add-recipe-title">Ajout recette</h2>
      <form className="form-creation-page" onSubmit={handleSubmit}>
        <div className="recipe-name">
          <DragAndDrop
            files={files}
            setFiles={setFiles}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
          <h3 className="title">Titre</h3>
          <p>Maximum 55 caractères*</p>
          <input
            className="input-title"
            type="text"
            ref={titleRef}
            maxLength={55}
          />
          <img src="" alt="" />
        </div>

        <div className="nb-people-duration">
          <p>Nombre de personnes*</p>
          <input
            className="input-nb-people"
            type="number"
            ref={nbPeopleRef}
            min="0"
          />
          <h3>Durée*</h3>
          <input className="input-time" type="time" ref={durationRef} />
        </div>

        <div className="futur-component">
          <div className="recipe-ingredients" />
          <div className="recipe-tools" />
        </div>

        <CreationIngredients
          recipeIngLoad={IngToolLoader[0]}
          setIngredientArray={setIngredientArray}
          ingredientQuantityRef={ingredientQuantityRef}
          ingredientUnityRef={ingredientUnityRef}
          ingredientChoiceRef={ingredientChoiceRef}
        />
        <CreationTools
          recipeToolLoad={IngToolLoader[1]}
          setToolArray={setToolArray}
        />

        <div className="recipe-description">
          <h3 className="step-description">Décrire les étapes*</h3>
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

        <button
          style={{ cursor: "pointer" }}
          onClick={handleSubmit}
          type="submit"
          className={`submit-recipe-creation-button ${clicked ? "clicked" : ""}`}
        >
          Valider
        </button>
      </form>
      <ToastContainer position="bottom-right" />
      <p className="Mandatory-input-fields">* Champs de saisie obligatoire</p>
    </section>
  );
}

export default RecipeCreationPage;
