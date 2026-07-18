import { ReactNode } from "react";
import "./Form.css";

interface Props {
  children: ReactNode;
}

const Form = ({ children }: Props) => {
  return <div className="form">{children}</div>;
};

export default Form;
