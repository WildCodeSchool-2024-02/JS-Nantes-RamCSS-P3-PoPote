import PropTypes from "prop-types";

import iconD from "../assets/logo_card/icon-duration.svg";

function DurationElement({ duration }) {
  function formatDuration() {
    const parts = duration.split(":");
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    // const seconds = parseInt(parts[2], 10);
    let formattedDuration = "";
    if (hours > 0) {
      if (minutes <= 0) {
        // Si hours > 0 et minutes <= 0, ajoute seulement les heures
        formattedDuration += `${hours} h`;
      } else {
        // Si hours > 0 et minutes > 0, ajoute les heures et les minutes
        formattedDuration += `${hours} h ${minutes.toString().padStart(2, "0")} min`;
      }
    } else {
      // Si hours == 0, ajouter seulement les minutes
      formattedDuration += `${minutes.toString().padStart(2, "0")} min`;
    }
    return formattedDuration;
  }

  return (
    <section className="duration-container">
      <img id="duration-img" src={iconD} alt="" />
      <h3>{formatDuration()}</h3>
    </section>
  );
}

DurationElement.propTypes = {
  duration: PropTypes.string.isRequired,
};

export default DurationElement;
