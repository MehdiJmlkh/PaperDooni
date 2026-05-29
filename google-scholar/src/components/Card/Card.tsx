import { ReactNode } from "react";
import "./Card.css";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className, onClick }: Props) => {
  return (
    <div onClick={onClick} className={`simple-card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
