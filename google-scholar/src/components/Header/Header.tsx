import { Link } from "react-router-dom";
import GoogleScholarIcon from "../GoogleScholarIcon";
import SearchBar from "../SearchBar";
import "./Header.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const Header = () => {
  return (
    <header className="header">
      <GoogleScholarIcon />
      <SearchBar />
      <Link to="/articles/new">
        <BiSolidMessageSquareAdd className="add-paper" />
      </Link>
    </header>
  );
};

export default Header;
