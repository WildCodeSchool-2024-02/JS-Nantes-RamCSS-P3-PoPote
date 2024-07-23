import { useLoaderData } from "react-router-dom";
import MaxiRecipeCard from "../components/MaxiRecipeCard";

function ProfilePage() {
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const recipeData = useLoaderData();
  console.warn("recipe", recipeData);

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
          <img
            id="dots-img"
            src={`${import.meta.env.VITE_API_URL}/profile/dots.svg`}
            alt="dots to go to parameters"
          />
          <img
            id="pen-modification-img"
            src={`${import.meta.env.VITE_API_URL}/profile/pen-modification.png`}
            alt="pen to modify profile"
          />
        </div>
      </div>
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
          <p>No recipes found.</p>
        )}
      </article>
    </section>
  );
}

export default ProfilePage;
