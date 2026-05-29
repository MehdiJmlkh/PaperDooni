import { ReactNode } from "react";
import "./SimpleCard.css";

interface Props {
  children: ReactNode;
  className?: string;
}

const SimpleCard = ({ children, className }: Props) => {
  return <div className={`simple-card ${className}`}>{children}</div>;
};

export default SimpleCard;
