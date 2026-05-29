import { Citation } from "../../services/articleService";
import AnimatedCard from "../AnimatedCard";
import "./CitationCard.css";
import { VscReferences } from "react-icons/vsc";

interface Props {
  citation: Citation;
}

const CitationCard = ({ citation }: Props) => {
  return (
    <AnimatedCard className="citation-card">
      <VscReferences className="citation-card__icon" size={30} />
      <span className="citation-card__title">{citation?.title}</span>
    </AnimatedCard>
  );
};

export default CitationCard;
