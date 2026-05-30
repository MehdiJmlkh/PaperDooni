import { useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";
import "./HomePage.css";
import { useArticles } from "../../queries/useArticles";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const [searchParams] = useSearchParams();

  const { data: articlePage } = useArticles(
    searchParams.get("searchText") || "",
    page,
    pageSize,
  );

  return (
    <main className="home-page">
      <div className="home-page__articles">
        {articlePage?.content.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
      <Pagination
        totalPages={Math.ceil((articlePage?.total || 1) / pageSize)}
        pageNumber={page}
        onClick={(next) => setPage(next)}
      />
    </main>
  );
};

export default HomePage;
