import { useState } from "react";
import { useArticles } from "../../queries/useArticles";
import CheckBox from "../CheckBox";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import SimpleCard from "../SimpleCard";
import "./AddCitationCard.css";
import CountBadge from "../CountBadge/CountBadge";

interface Props {
  selectedArticleIds: number[];
  onToggleArticle: (articleId: number) => void;
}

const AddCitationCard = ({ selectedArticleIds, onToggleArticle }: Props) => {
  const [searchText, setSearchText] = useState("");

  const pageSize = 4;
  const [page, setPage] = useState(1);

  const { data: articlePage } = useArticles(searchText, page, pageSize);

  const handleSubmit = (text: string) => {
    setSearchText(text);
    setPage(1);
  };

  return (
    <SimpleCard className="add-citation">
      <div className="add-citation__heading">
        <span>Citations</span>
        <CountBadge count={selectedArticleIds.length} />
      </div>
      <SearchBar onSubmit={handleSubmit} />
      <div className="add-citation__articles">
        {articlePage?.content.map((article) => (
          <CheckBox
            key={article.id}
            checked={selectedArticleIds.includes(article.id)}
            onChange={() => onToggleArticle(article.id)}
          >
            {article.title}
          </CheckBox>
        ))}
      </div>
      <Pagination
        totalPages={Math.ceil((articlePage?.total || 1) / pageSize)}
        pageNumber={page}
        onClick={(next) => setPage(next)}
      />
    </SimpleCard>
  );
};

export default AddCitationCard;
