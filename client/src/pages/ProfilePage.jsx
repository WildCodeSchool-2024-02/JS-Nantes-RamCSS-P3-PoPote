import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MaxiRecipeCard from "../components/MaxiRecipeCard";
import ProfileModal from "../components/ProfileModal";
import ProfileModalAdmin from "../components/AdminModal";


function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAdminOpen, setIsModalAdminOpen] = useState(false);
  const {user} = useContext(AuthContext);

  const id = localStorage.getItem("userId");
  const Admin = localStorage.getItem("isAdmin");
  const recipeData = useLoaderData();
  function openModal() {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function openAdminModal() {
    setIsModalAdminOpen(true);
  }

  const closeAdminModal = () => {
    setIsModalAdminOpen(false);
  };
  let modalContent;
  if (isModalOpen) {
    modalContent = <ProfileModal closeModal={closeModal} id={id} />;
  } else if (isModalAdminOpen) {
    modalContent = <ProfileModalAdmin closeAdminModal={closeAdminModal} />;
  } else {
    modalContent = (
      <>
        <button type="submit" className="deconnexion-button">
          DECONNEXION
        </button>
        <h2>Mes recettes créées</h2>
        <article className="recipe-card-list">
          {recipeData.length > 0 ? (
            recipeData.map((el) => (
              <MaxiRecipeCard
                key={el.id}
                id={el.id}
                title={el.title}
                photo={el.url_photo}
                duration={el.duration}
                nutValue={el.nutValue}
                className="recipe-card"
              />
            ))
          ) : (
            <p>Vous n'avez pas encore créé de recettes</p>
          )}
        </article>
      </>
    );
  }

  return (
    <section className="my-profile">
      <h1>Mon compte</h1>
      <div className="bloc-name">
        <img
          id="profile-picture-img"
          src={`${import.meta.env.VITE_API_URL}/profile/sophie-nancier.jpg`}
          alt="user avatar"
        />
        <p>
          {user?.firstname} {user?.lastname}
        </p>
        <div className="profile-picto">
          <button type="button">
            <img
              id="dots-img"
              src={`${import.meta.env.VITE_API_URL}/profile/dots.svg`}
              alt="dots to go to parameters"
            />
          </button>
          <button type="button" onClick={openModal}>
            <img
              id="pen-modification-img"
              src={`${import.meta.env.VITE_API_URL}/profile/pen-modification.png`}
              alt="pen to modify profile"
            />
          </button>
          {Admin === "1" && (
            <button type="button" onClick={openAdminModal}>
              <img
                id="admin"
                src={`${import.meta.env.VITE_API_URL}/profile/profile_admin_icon.svg`}
                alt="Shield icon, to go modify recipe"
              />
            </button>
          )}
        </div>
      </div>
      {modalContent}
    </section>
  );
}

export default ProfilePage;
