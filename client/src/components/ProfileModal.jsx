import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfileModal({ closeModal, id }) {
  const { updateUser } = useContext(AuthContext);

  const [firstname, setFirstname] = useState(
    localStorage.getItem("firstname") || ""
  );

  const [lastname, setLastname] = useState(
    localStorage.getItem("lastname") || ""
  );

  async function handleSave() {
    const data = {
      id,
      firstname,
      lastname,
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la modification du profil");
    }
    // Save the new profile information
    // localStorage.setItem("firstname", firstname);
    // localStorage.setItem("lastname", lastname);
    updateUser({firstname, lastname});

    // Close the modal after savings
    closeModal();
  }

  return (
    <section className="modal">
      <button type="button" onClick={closeModal} className="close-button">
        &times;
      </button>
      <div className="modal-content">
        <h2>Modifier le profil</h2>
        <form>
          <div className="edit-input">
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
          </div>
          <div className="edit-input">
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
          </div>
          <button type="button" onClick={handleSave} className="submit-button">
            Valider
          </button>
        </form>
      </div>
    </section>
  );
}

ProfileModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProfileModal;
