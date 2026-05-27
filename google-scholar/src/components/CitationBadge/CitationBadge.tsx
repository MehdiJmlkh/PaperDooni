import "./CitationBadge.css";

interface Props {
  children: number;
}

const CitationBadge = ({ children }: Props) => {
  return <span className="citation-badge">Cited by {children}</span>;
};

export default CitationBadge;
