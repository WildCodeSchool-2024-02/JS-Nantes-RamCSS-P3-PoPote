/* eslint-disable react/prop-types */

function MaxiRecipeCard({ title, duration, photo }) {
  return (
    <section className="recipe-card">
      <img src={photo} alt="" />
      <h1>{title}</h1>
      <h2>{duration}</h2>
    </section>
  );
}

export default MaxiRecipeCard;
