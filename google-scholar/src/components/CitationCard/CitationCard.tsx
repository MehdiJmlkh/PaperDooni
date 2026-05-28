import Card from "../Card";
import "./CitationCard.css";
import { VscReferences } from "react-icons/vsc";

const CitationCard = () => {
  return (
    <Card className="citation-card">
        <VscReferences className="citation-card__icon" size={30} />
        <span className="citation-card__title">Title</span>
    </Card>
  );
};

export default CitationCard;
