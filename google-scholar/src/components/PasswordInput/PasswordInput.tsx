import "./PasswordInput.css";
import "../Input/Input.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ error, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div>
        <div className="password-input">
          <input
            className={`form-control ${error ? "form-control--error" : ""}`}
            ref={ref}
            {...rest}
            type={visible ? "text" : "password"}
          />
          <span onClick={() => setVisible(!visible)}>
            {visible ? (
              <AiOutlineEye className="password-input__icon" />
            ) : (
              <AiOutlineEyeInvisible className="password-input__icon" />
            )}
          </span>
        </div>
        {error && <p className="text-danger input__error">{error}</p>}
      </div>
    );
  },
);

export default PasswordInput;
