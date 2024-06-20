/* eslint-disable react/prop-types */

function DurationElement({ recipeData }) {
  console.info(recipeData);

  return (
    <section>
      <h1>Coucou ceci est temps.</h1>
      <h1>{recipeData.duration}</h1>
    </section>
  );
}

export default DurationElement;
