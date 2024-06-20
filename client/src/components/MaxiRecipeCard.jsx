/* eslint-disable react/prop-types */
import DurationElement from "./DurationElement"


function MaxiRecipeCard({recipeData}) {

  return (
    <>
    {recipeData.map(el => 
    <h1 key={el}>Coucou toi {el.title}</h1>
    )}

   <DurationElement recipeData={recipeData}/>
   
    </>
    );
}

export default MaxiRecipeCard;
