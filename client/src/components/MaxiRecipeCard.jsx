/* eslint-disable react/prop-types */

function MaxiRecipeCard({recipeData}) {
  return (
    <>
    {recipeData.map(el => 
    <h1 key={el}>Coucou  {el.title}</h1>
    )}

   
    </>
    );
}

export default MaxiRecipeCard;
