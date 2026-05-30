import React from "react";
import "./TextArea.css";

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  rows: number;
}

const Input = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, rows, ...rest }, ref) => {
    return (
      <textarea
        {...rest}
        className={`form-control ${className}`}
        rows={rows}
        ref={ref}
      />
    );
  },
);
export default Input;
