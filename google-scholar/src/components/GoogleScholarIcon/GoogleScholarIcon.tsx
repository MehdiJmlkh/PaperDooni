import "./GoogleScholarIcon.css";
import Icon from "../../assets/icon.png";
import { useNavigate } from "react-router-dom";

const GoogleScholarIcon = () => {
  const navigate = useNavigate();
  return (
    <img
      className="google-scholar-icon"
      src={Icon}
      alt=""
      onClick={() => navigate("/")}
    />
  );
};

export default GoogleScholarIcon;
