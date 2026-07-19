import "./Button.css";

interface Props {
  children: string;
  disable?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset";
}

const Button = ({
  children,
  disable = false,
  onClick,
  type = "submit",
}: Props) => {
  return (
    <button
      type={type}
      disabled={disable}
      className="btn btn-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
