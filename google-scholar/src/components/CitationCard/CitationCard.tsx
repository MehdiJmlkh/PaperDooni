import AnimatedCard from "../AnimatedCard";
import "./CitationCard.css";
import { VscReferences } from "react-icons/vsc";

const CitationCard = () => {
  return (
    <AnimatedCard className="citation-card">
      <VscReferences className="citation-card__icon" size={30} />
      <span className="citation-card__title">Title</span>
    </AnimatedCard>
  );
};

export default CitationCard;
