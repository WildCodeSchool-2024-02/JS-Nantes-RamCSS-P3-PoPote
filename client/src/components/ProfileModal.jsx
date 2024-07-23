import PropTypes from "prop-types";
import { useState } from "react";

function ProfileModal({ closeModal }) {
  const [firstname, setFirstname] = useState(
    localStorage.getItem("firstname") || ""
  );

  const [lastname, setLastname] = useState(
    localStorage.getItem("lastname") || ""
  );
  //   const [url_photo, setUrl_Photo] = useState(localStorage.getItem("photo") || "");

  function handleSave() {
    // Save the new profile information
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    // localStorage.setItem("photo", photo);

    // Close the modal after saving
    closeModal();
  }

  return (
    <section className="modal">
      <div className="modal-content">
        <button type="button" onClick={closeModal}>
          &times;
        </button>
        <h2>Modifier le profil</h2>
        <form>
          <img
            src={`${import.meta.env.VITE_API_URL}/logo_form/icon-person.svg`}
            alt="icon person"
            className="icon-form"
          />
          <input
            type="text"
            id="editing-firstname"
            name="firstname"
            placeholder="Prénom"
            aria-label="Prénom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <img
            src={`${import.meta.env.VITE_API_URL}/logo_form/icon-person.svg`}
            alt="icon person"
            className="icon-form"
          />
          <input
            type="text"
            id="editing-lastname"
            name="lastname"
            placeholder="Nom"
            aria-label="Nom"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          {/* <label>
            Photo URL:
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </label> */}
          <button type="button" onClick={handleSave}>
            Sauvegarder
          </button>
        </form>
      </div>
    </section>
  );
}

ProfileModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ProfileModal;
