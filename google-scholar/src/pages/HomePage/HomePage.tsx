import { useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";
import "./HomePage.css";
import { useArticles } from "../../queries/useArticles";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const { data: articlePage } = useArticles(page, pageSize);

  return (
    <main className="home-page">
      {articlePage?.content.map((article) => (
        <ArticleCard article={article} />
      ))}
      <Pagination
        totalPages={Math.ceil((articlePage?.total || 1) / pageSize)}
        pageNumber={page}
        onClick={(next) => setPage(next)}
      />
    </main>
  );
};

export default HomePage;
