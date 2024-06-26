/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
// import tarte from "../../../server/public/assets/images/recipe_image/tarte-au-pommes.jpg"
import DurationElement from "./DurationElement";
// import NutValueElement from "./NutValueElement";

function MaxiRecipeCard({ title, duration, photo, id }) {
  return (
    <NavLink to={`recipe/${id}`}>

    <section className="recipe-card">
      <img
        id="recipe-card-img"
        src={import.meta.env.VITE_API_URL + photo}
        alt=""
        />
      <h2 id="recipe-card-title">{title}</h2>
      <div className="nut&dur-element">
        <DurationElement duration={duration} />
        {/* <NutValueElement /> */}
      </div>
    </section>
        </NavLink>
  );
}

export default MaxiRecipeCard;
