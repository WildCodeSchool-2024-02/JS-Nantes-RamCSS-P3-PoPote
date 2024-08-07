import PropTypes from "prop-types";

function NutValueElement({ nutValue }) {
  return (
    <section className="nutvalue-container">
      <img
        id="nutvalue-img"
        src={`${import.meta.env.VITE_API_URL}/logo_card/icon-nutvalue.svg`}
        alt="icone de flamme pour la valeur calorique de la recette"
      />
      <h3>
        {Math.round(parseInt(nutValue, 10))} Kcal <br />{" "}
        <strong>pour 100 g</strong>
      </h3>
    </section>
  );
}

NutValueElement.propTypes = {
  nutValue: PropTypes.string.isRequired,
};

export default NutValueElement;
