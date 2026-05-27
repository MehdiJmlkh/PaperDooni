import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input
        name="search"
        className="form-control"
        type="text"
        placeholder="Search papers..."
      />
    </form>
  );
};

export default SearchBar;
