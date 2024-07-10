import { useState, useRef } from "react";

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
        `${import.meta.env.VITE_API_URL}/api/upload`,
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
          `${import.meta.env.VITE_API_URL}/api/upload`,
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

export default DragAndDrop;
