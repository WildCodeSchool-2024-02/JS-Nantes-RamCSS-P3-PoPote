/* eslint-disable camelcase */

import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import MaxiRecipeCard from "../components/MaxiRecipeCard";
import ProfileModal from "../components/ProfileModal";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user} = useContext(AuthContext);

  const id = localStorage.getItem("userId");
  const url_photo = localStorage.getItem("url_photo");
  const { recipes } = useLoaderData();

  function openModal() {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="my-profile">
      <h1>Mon compte</h1>
      <div className="bloc-name">
        {url_photo ? (<img
          id="profile-picture-img"
          src={`${import.meta.env.VITE_API_URL}/profile/sophie-nancier.jpg`}
          alt="user avatar"
        />) : (<img
          id="profile-picture-img"
          src={`${import.meta.env.VITE_API_URL}/profile/avatar.png`}
          alt="user avatar"
        />)}
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
        </div>
      </div>
      {isModalOpen ? (
        <ProfileModal closeModal={closeModal} id={id} />
      ) : (
        <>
          <button type="submit" className="deconnexion-button">
            DECONNEXION
          </button>
          <h2>Mes recettes créées</h2>
          <article className="recipe-card-list">
            {recipes.length > 0 ? (
              recipes.map((el) => (
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
    </section>
  );
}

export default ProfilePage;
