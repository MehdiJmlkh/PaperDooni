import { Children } from "react";
import "./Button.css";

interface Props {
  children: string;
  disable?: boolean;
}

const Button = ({ children, disable = false }: Props) => {
  return (
    <button disabled={disable} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
