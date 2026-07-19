import "./Button.css";

interface Props {
  children: string;
  disable?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset";
  className?: string;
}

const Button = ({
  children,
  disable = false,
  onClick,
  type = "submit",
  className,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disable}
      className={`btn btn-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
