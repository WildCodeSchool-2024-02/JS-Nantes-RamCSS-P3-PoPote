// Va servir pour :
// - la liste d'ustensiles de la page Recette
// - la liste d'ustensiles de la page Recipe Creation
import PropTypes from "prop-types";

function ToolsList({ el }) {
  return (
    <section className="tools-list-container">
      <h3>{el}</h3>
    </section>
  );
}

ToolsList.propTypes = {
  el: PropTypes.string.isRequired,
};
export default ToolsList;
