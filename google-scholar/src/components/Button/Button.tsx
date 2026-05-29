import { Children } from "react";
import "./Button.css";

interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return <button className="btn btn-primary">{children}</button>;
};

export default Button;
