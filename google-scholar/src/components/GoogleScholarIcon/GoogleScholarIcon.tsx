import "./GoogleScholarIcon.css";
import Icon from "../../assets/icon.png";
import { Link, useNavigate } from "react-router-dom";

const GoogleScholarIcon = () => {
  const navigate = useNavigate();
  return (
    <Link to="/">
      <img className="google-scholar-icon" src={Icon} alt="" />
    </Link>
  );
};

export default GoogleScholarIcon;
