/* eslint-disable react/prop-types */

import iconD from "../assets/logo_card/icon-duration.svg";

function DurationElement({ duration }) {
  return (
    <section className="duration-container">
      <img src={iconD} alt="" />
      <h1>{duration}</h1>
    </section>
  );
}

export default DurationElement;
