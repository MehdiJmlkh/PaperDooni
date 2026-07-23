import { ReactNode } from "react";
import "./Modal.css";
import CloseIcon from "../CloseIcon";
import Button from "../Button";
import Input from "../Input";

interface Props {
  title: string;
  children: ReactNode;
  show: boolean;
  onClose?: () => void;
}

const Modal = ({ title, children, show, onClose }: Props) => {
  return (
    <div className={`modal-card modal-card--pop ${show ? "show" : ""}`}>
      <CloseIcon onClose={onClose} />
      <h1 className="modal-card__title">{title}</h1>
      <div className="modal-card__body">{children}</div>
    </div>
  );
};

export default Modal;
