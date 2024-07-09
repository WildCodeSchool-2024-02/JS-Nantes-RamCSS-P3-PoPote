import PropTypes from "prop-types";

function NbPeopleElement({ peopleNb }) {
  return (
    <section className="nb-people-container">
      <img
        id="nb-people-img"
        src={`${import.meta.env.VITE_API_URL}/logo_card/icon-peopleNb.svg`}
        alt=""
      />
      <h3>{peopleNb}</h3>
    </section>
  );
}

NbPeopleElement.propTypes = {
  peopleNb: PropTypes.string.isRequired,
};

export default NbPeopleElement;
