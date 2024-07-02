import PropTypes from "prop-types";
import iconPNB from "../assets/logo_card/icon-peopleNb.svg";

function NbPeopleElement({ peopleNb }) {
  return (
    <section className="nb-people-container">
      <img id="nb-people-img" src={iconPNB} alt="" />
      <h3>{peopleNb}</h3>
    </section>
  );
}

NbPeopleElement.propTypes = {
  peopleNb: PropTypes.string.isRequired,
};

export default NbPeopleElement;
