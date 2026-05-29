import { useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";
import "./HomePage.css";

const HomePage = () => {
  const [page, setPage] = useState(1);

  return (
    <main className="home-page">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <Pagination
        totalPages={5}
        pageNumber={page}
        onClick={(next) => setPage(next)}
      />
    </main>
  );
};

export default HomePage;
