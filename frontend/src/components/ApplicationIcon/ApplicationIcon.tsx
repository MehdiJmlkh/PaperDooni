import "./ApplicationIcon.css";
import Icon from "../../assets/icon.png";
import { Link, useNavigate } from "react-router-dom";

const ApplicationIcon = () => {
  const navigate = useNavigate();
  return (
    <Link to="/">
      <img className="application-icon" src={Icon} alt="" />
    </Link>
  );
};

export default ApplicationIcon;
