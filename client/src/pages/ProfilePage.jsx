import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MaxiRecipeCard from "../components/MaxiRecipeCard";
import ProfileModal from "../components/ProfileModal";

function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const recipeData = useLoaderData();

  function openModal() {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
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
          {firstname} {lastname}
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
        </div>
      </div>
      {isModalOpen ? (
        <ProfileModal closeModal={closeModal} />
      ) : (
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
      )}
      {/* // {isModalOpen && <ProfileModal closeModal={closeModal} />} */}
    </section>
  );
}

export default ProfilePage;
