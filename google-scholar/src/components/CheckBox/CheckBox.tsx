import React, { ReactNode } from "react";
import "./CheckBox.css";

interface Props {
  children: ReactNode;
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ children, checked, onChange }: Props) => {
  return (
    <div className="checkbox-container">
      <input
        className="form-check-input checkbox__box"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="checkbox__label">{children}</label>
    </div>
  );
};

export default CheckBox;
