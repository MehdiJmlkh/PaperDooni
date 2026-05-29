import React, { ReactNode } from "react";
import "./CheckBox.css";

interface Props {
  children: ReactNode;
}

const CheckBox = ({ children }: Props) => {
  return (
    <div className="checkbox-container">
      <input className="form-check-input checkbox__box" type="checkbox" />
      <label className="checkbox__label">
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
