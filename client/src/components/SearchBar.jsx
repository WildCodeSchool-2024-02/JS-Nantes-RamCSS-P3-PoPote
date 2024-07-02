import PropTypes from "prop-types";

function SearchBar({ query, setQuery }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder=" Recherchez une recette ou des ingrédients"
      alt="barre de recherche"
      onChange={(event) => {
        setQuery(event.target.value);
      }}
      value={query}
    />
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
