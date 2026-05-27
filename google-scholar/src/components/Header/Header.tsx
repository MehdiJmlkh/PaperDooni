import GoogleScholarIcon from "../GoogleScholarIcon";
import SearchBar from "../SearchBar";
import "./Header.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const Header = () => {
  return (
    <header className="header">
      <GoogleScholarIcon />
      <SearchBar />
      <BiSolidMessageSquareAdd className="add-paper" />
    </header>
  );
};

export default Header;
