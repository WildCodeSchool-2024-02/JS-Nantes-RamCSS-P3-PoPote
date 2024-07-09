import PropTypes from "prop-types";

function NbPeopleElement({ peopleNb }) {
  return (
    <section className="nb-people-container">
      <img
        id="nb-people-img"
        src={`${import.meta.env.VITE_API_URL}/logo_card/icon-peopleNb.svg`}
        alt="icone de personnage pour le nombre de personnes "
      />
      <h3>{peopleNb} pers.</h3>
    </section>
  );
}

NbPeopleElement.propTypes = {
  peopleNb: PropTypes.string.isRequired,
};

export default NbPeopleElement;
