import { Link, useNavigate } from "react-router-dom";
import GoogleScholarIcon from "../GoogleScholarIcon";
import SearchBar from "../SearchBar";
import "./Header.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <GoogleScholarIcon />
      <SearchBar
        onSubmit={(searchText) =>
          navigate({
            pathname: "/articles",
            search: new URLSearchParams({ searchText }).toString(),
          })
        }
      />
      <Link to="/articles/new">
        <BiSolidMessageSquareAdd className="add-paper" />
      </Link>
    </header>
  );
};

export default Header;
