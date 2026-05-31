import React from "react";
import "./Input.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ error, className, ...rest }, ref) => {
    return (
      <div className={`${className}`}>
        <input
          className={`form-control ${error ? "form-control--error" : ""}`}
          {...rest}
          ref={ref}
        />
        <p className="text-danger input__error">{error}</p>
      </div>
    );
  },
);
export default Input;
