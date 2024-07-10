import { useState, useRef } from "react";

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
        <DragAndDrop />
        <input
          type="submit"
          value="Valider"
          className="submit-recipe-creation-button"
        />
      </form>
    </section>
  );
}

function DragAndDrop() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", files[0]);

    // * Ma première requête fetch va tenter d'ajouter le fichier dans le serveur.
    try {
      const addFileFetch = await fetch(
        `${import.meta.env.VITE_API_URL}/api/router/add`,
        {
          method: "POST",
          body: data,
        }
      );

      const fileResponse = await addFileFetch.json();

      // * Si tout s'est bien passé, on exécute une deuxième requête fetch, pour
      // * pouvoir ajouter le chemin de l'image dans la base de données.
      // * (je choisis arbitrairement le deuxième utilisateur, pour l'exemple).

      if (fileResponse) {
        const { filename } = fileResponse;
        const fetchResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/recipe/img_courgette/2`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ filename }),
          }
        );
        console.warn(fetchResponse);
        return null;
      }
    } catch (err) {
      return err;
    }
    return null;
  };

  if (files.length)
    return (
      <section className="uploads">
        <ul>
          <li>{files[0].name}</li>
        </ul>
        <div className="actions">
          <button type="button" onClick={() => setFiles([])}>
            Cancel
          </button>
          <button type="button" onClick={(e) => handleUpload(e)}>
            Submit !
          </button>
        </div>
      </section>
    );

  return (
    <section>
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Drag and Drop Area</p>
        <p>Or</p>
        <input
          type="file"
          onChange={(e) => setFiles(Array.from(e.target.files))}
          hidden
          ref={inputRef}
        />
        <button type="button" onClick={() => inputRef.current.click()}>
          Select a file
        </button>
      </div>
    </section>
  );
}

export default RecipeCreationPage;
