import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import DurationElement from "./DurationElement";
import NutValueElement from "./NutValueElement";

function MaxiRecipeCard({ title, duration, photo, nutValue, id }) {
  return (
    <NavLink to={`/popote/recipe/${id}`}>
      <section className="recipe-card">
        <img
          id="recipe-card-img"
          src={import.meta.env.VITE_API_URL + photo}
          alt="illustration de recette"
        />
        <h2 id="recipe-card-title">{title}</h2>
        <div className="nutdur-element">
          <DurationElement duration={duration} />
          <NutValueElement nutValue={nutValue} />
        </div>
      </section>
    </NavLink>
  );
}

MaxiRecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  nutValue: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MaxiRecipeCard;
