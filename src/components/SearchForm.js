import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="search"
        placeholder="Manchester"
        onChange={handleInputChange}
        value={searchText}
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
