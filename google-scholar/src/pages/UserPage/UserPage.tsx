import UserAccount from "../../components/UserAccount";
import UserArticlesBlock from "../../components/UserArticlesBlock";
import "./UserPage.css";

const UserPage = () => {
  return (
    <div>
      <UserAccount className="user-details" />
      <UserArticlesBlock />
    </div>
  );
};

export default UserPage;
