import { ReactNode } from "react";
import "./Card.css";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return <div className={`plain-card ${className}`}>{children}</div>;
};

export default Card;
