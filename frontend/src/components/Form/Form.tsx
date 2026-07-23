import { FormEvent, ReactNode } from "react";
import "./Form.css";

interface Props {
  children: ReactNode;
  onSubmit?: (event: FormEvent) => void;
}

const Form = ({ children, onSubmit }: Props) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
