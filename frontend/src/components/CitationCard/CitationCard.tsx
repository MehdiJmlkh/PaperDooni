import { VscReferences } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Citation } from "../../services/articleService";
import AnimatedCard from "../AnimatedCard";
import "./CitationCard.css";

interface Props {
  citation: Citation;
}

const CitationCard = ({ citation }: Props) => {
  const navigate = useNavigate();
  return (
    <AnimatedCard
      className="citation-card"
      onClick={() => navigate(`/articles/${citation.id}`)}
    >
      <VscReferences className="citation-card__icon" size={30} />
      <span className="citation-card__title">{citation?.title}</span>
    </AnimatedCard>
  );
};

export default CitationCard;
