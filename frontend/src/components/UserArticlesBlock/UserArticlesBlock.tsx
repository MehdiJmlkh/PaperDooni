import { useUserArticles } from "../../queries/useUserArticles";
import ArticleCard from "../ArticleCard";
import "./UserArticlesBlock.css";
import { PiBooks } from "react-icons/pi";
import NoResultIcon from "../NoResultIcon";

const UserArticlesBlock = () => {
  const { data: articles } = useUserArticles();

  return (
    <>
      <div className="user-articles__heading">
        <PiBooks />
        <h2 className="user-articles__title">My Articles</h2>
      </div>
      {articles?.length ? (
        articles?.map((article) => <ArticleCard article={article} />)
      ) : (
        <NoResultIcon />
      )}
    </>
  );
};

export default UserArticlesBlock;
