import { useRef } from "react";
import PropTypes from "prop-types";

function DragAndDrop({ files, setFiles, imagePreview, setImagePreview }) {
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    setImagePreview(URL.createObjectURL(droppedFiles[0]));
  };

  return (
    <section className="drop-zone-section">
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Drag and Drop Area</p>
        <p>Or</p>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            setFiles([file]);
            setImagePreview(URL.createObjectURL(file)); // Crée une URL locale pour l'image
          }}
          hidden
          ref={inputRef}
        />
        <button
          className="bouton-ajouter-fichier"
          type="button"
          onClick={() => inputRef.current.click()}
        >
          choisir un fichier
        </button>
        {files.length > 0 && (
          <section className="uploads">
            <ul>
              <li>{files[0].name}</li>
            </ul>
            <div className="actions">
              <button
                type="button"
                onClick={() => {
                  setFiles([]);
                  setImagePreview(null);
                }}
              >
                Cancel
              </button>
            </div>
          </section>
        )}
        {imagePreview && (
          <img
            className="image-preview"
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: "100%", height: "15vh", marginTop: "10px" }}
          />
        )}
      </div>
    </section>
  );
}

DragAndDrop.propTypes = {
  files: PropTypes.string.isRequired,
  setFiles: PropTypes.string.isRequired,
  imagePreview: PropTypes.string.isRequired,
  setImagePreview: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default DragAndDrop;
