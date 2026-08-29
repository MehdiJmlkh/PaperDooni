import "./NoResultIcon.css";
import NoResult from "../../assets/no-result.svg";

const NoResultIcon = () => {
  return (
    <div className="no-result-icon">
      <img className="no-result-icon__image" src={NoResult} />
    </div>
  );
};

export default NoResultIcon;
