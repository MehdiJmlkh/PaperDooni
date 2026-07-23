import "./CitationBadge.css";

interface Props {
  children: string | number;
}

const CitationBadge = ({ children }: Props) => {
  return <span className="citation-badge">Cited by {children}</span>;
};

export default CitationBadge;
