import React from "react";
import "./Input.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input className={`form-control ${className}`} {...rest} ref={ref} />
    );
  },
);
export default Input;
