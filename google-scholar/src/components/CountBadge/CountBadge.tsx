import "./CountBadge.css";

interface Props {
  count: number;
}

const CountBadge = ({ count }: Props) => {
  return <span className="count-badge">{count}</span>;
};

export default CountBadge;
