import { MdOutlineArticle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ArticleSummary } from "../../services/articleService";
import AnimatedCard from "../AnimatedCard";
import CitationBadge from "../CitationBadge";
import "./ArticleCard.css";

interface Props {
  article: ArticleSummary;
}

const ArticleCard = ({ article }: Props) => {
  const navigate = useNavigate();

  const visibleChars = 400;

  return (
    <AnimatedCard
      className="article-card"
      onClick={() => navigate(`/articles/${article.id}`)}
    >
      <div className="article__header">
        <MdOutlineArticle className="article__icon" size={35} />
        <span className="article__title">{article.title}</span>
      </div>
      <span className="article__year">{article.year}</span>
      <CitationBadge>{article.citedBy}</CitationBadge>
      <p className="article__abstract">
        {article.abs.slice(0, visibleChars)}
        {article.abs.length > visibleChars ? " ..." : ""}
      </p>
    </AnimatedCard>
  );
};

export default ArticleCard;
