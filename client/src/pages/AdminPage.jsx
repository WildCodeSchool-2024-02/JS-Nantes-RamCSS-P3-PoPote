function AdminPage() {
  return (
    <section className="admin-section">
      <p>coucou admin page de love</p>
      <p>coucou admin page de love qui</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda esse
        excepturi, adipisci, similique soluta ipsum nemo deserunt culpa officia
        eveniet ducimus dignissimos possimus odio perferendis veritatis atque
        sit fuga omnis.
      </p>
    </section>
    // <section className="admin-page">
    //   <SearchBar query={query} setQuery={setQuery} />

    //   <h2 className="resultats">Supprimer :</h2>

    //   <ul className="search-result">
    //     {filteredRecipe.length > 0 ? (
    //       filteredRecipe.map((el) => (
    //         <MaxiRecipeCard
    //           key={el.id}
    //           id={el.id}
    //           title={el.title}
    //           duration={el.duration}
    //           photo={el.url_photo}
    //           nutValue={el.nutValue}
    //         />
    //       ))
    //     ) : (
    //       <li>Vide .</li>
    //     )}
    //   </ul>
    // </section>
  );
}

export default AdminPage;
