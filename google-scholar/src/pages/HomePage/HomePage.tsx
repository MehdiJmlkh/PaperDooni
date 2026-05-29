import { useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";
import "./HomePage.css";
import { useArticles } from "../../queries/useArticles";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { data: articles } = useArticles();

  console.log(articles);

  return (
    <main className="home-page">
      {articles?.map((article) => (
        <ArticleCard article={article} />
      ))}
      <Pagination
        totalPages={5}
        pageNumber={page}
        onClick={(next) => setPage(next)}
      />
    </main>
  );
};

export default HomePage;
