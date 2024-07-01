import { NavLink } from "react-router-dom";

function CguPage() {
  return (
    <section className="cgu-page">
      <div className="cgu-frame">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error minus
          pariatur ullam. Deserunt, ad? Ad facere ratione odio vitae doloremque
          ullam, quisquam cum officiis expedita at minus voluptate asperiores
          mollitia. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptas totam, tempore nulla magnam voluptatibus omnis hic rerum
          reprehenderit repellat alias. Optio at unde debitis accusamus dolorem
          laborum earum praesentium sequi! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Quaerat obcaecati in voluptatem nihil
          quo modi deleniti provident, vero deserunt reprehenderit doloremque
          est, ut laborum eos sit magni rem, maxime ratione! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Tempore reprehenderit in nobis
          recusandae optio atque beatae dolor dolorem repellat unde nostrum,
          explicabo dolores qui omnis reiciendis ipsa officia aspernatur sint.
        </p>
        <NavLink to="/register" className="cgu-button">
          Retour
        </NavLink>
      </div>
    </section>
  );
}

export default CguPage;
