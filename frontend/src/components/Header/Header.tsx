import { Link, useNavigate } from "react-router-dom";
import ApplicationIcon from "../ApplicationIcon";
import SearchBar from "../SearchBar";
import "./Header.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import Avatar from "../Avatar";
import { useCurrentUser } from "../../queries/useCurrentUser";
import Button from "../Button";

const Header = () => {
  const navigate = useNavigate();
  const { data: user } = useCurrentUser();

  return (
    <header className="header">
      <ApplicationIcon />
      <SearchBar
        onSubmit={(searchText) =>
          navigate({
            pathname: "/articles",
            search: new URLSearchParams({ searchText }).toString(),
          })
        }
      />
      {user ? (
        <>
          <Link to="/articles/new">
            <BiSolidMessageSquareAdd className="add-paper" />
          </Link>
          <Avatar
            username={user?.username}
            onClick={() => navigate("/users/me")}
          />
        </>
      ) : (
        <Button onClick={() => navigate("/sign-in")}>Sign in</Button>
      )}
    </header>
  );
};

export default Header;
