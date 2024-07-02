import PropTypes from "prop-types";
import iconN from "../assets/logo_card/icon-nutvalue.svg";

function NutValueElement({ nutValue }) {
  return (
    <section className="nutvalue-container">
      <img id="nutvalue-img" src={iconN} alt="" />
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
