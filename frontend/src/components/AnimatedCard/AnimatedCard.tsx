import { ReactNode } from "react";
import "./AnimatedCard.css";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnimatedCard = ({ children, className, onClick }: Props) => {
  return (
    <div onClick={onClick} className={`animated-card ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;
