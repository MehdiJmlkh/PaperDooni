import { useState } from "react";
import CheckBox from "../CheckBox";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import SimpleCard from "../SimpleCard";
import "./AddCitationCard.css";
import { useArticles } from "../../queries/useArticles";

const AddCitationCard = () => {
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const { data: articlePage } = useArticles(page, pageSize);
  return (
    <SimpleCard>
      <div className="add-citation__heading">Citations</div>
      <SearchBar />
      <div className="add-citation__articles">
        {articlePage?.content.map((article) => (
          <CheckBox>{article.title}</CheckBox>
        ))}
        <Pagination
          totalPages={Math.ceil((articlePage?.total || 1) / pageSize)}
          pageNumber={page}
          onClick={(next) => setPage(next)}
        />
      </div>
    </SimpleCard>
  );
};

export default AddCitationCard;
