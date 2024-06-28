import PropTypes from "prop-types";

function SearchBar({ query, setQuery }) {
  return (
    <>
      <h1>SearchBar</h1>

      <input
        className="search-bar"
        type="text"
        placeholder=" Rechercher chez Po'pote"
        alt="barre de recherche"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        value={query}
      />
    </>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
