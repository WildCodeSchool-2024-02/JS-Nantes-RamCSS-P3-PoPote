function FavoritesPage() {
  return (
    <section className="favorite-page-container">
      <figcaption className="favorite-page-description">
        <h1>Page favoris en cours de construction</h1>
        <h1>Encore un peu de patience, ça bout dans la marmite !</h1>
        <img
          className="favorite-page-img"
          src={`${import.meta.env.VITE_API_URL}/assets/pot_workinprogress-bgrm.png`}
          alt="marmite en train de bouillir"
        />
      </figcaption>
    </section>
  );
}

export default FavoritesPage;
