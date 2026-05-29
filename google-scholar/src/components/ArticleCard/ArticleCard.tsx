import { Link, useNavigate } from "react-router-dom";
import AnimatedCard from "../AnimatedCard";
import CitationBadge from "../CitationBadge";
import "./ArticleCard.css";
import { MdOutlineArticle } from "react-icons/md";

const ArticleCard = () => {
  const navigate = useNavigate();
  return (
    <AnimatedCard
      className="article-card"
      onClick={() => navigate("/articles/1")}
    >
      <div className="article__header">
        <MdOutlineArticle className="article__icon" size={35} />
        <span className="article__title">Title</span>
      </div>
      <span className="article__year">2026</span>
      <CitationBadge>2</CitationBadge>
      <p className="article__abstract">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quos magnam commodi aliquam doloremque, minus quis distinctio beatae aut
        mollitia, vero dolor, iste maxime ea quibusdam tempora corporis atque
        magni debitis nulla. Quidem fugiat aspernatur recusandae ratione
        necessitatibus incidunt dicta iure est sed accusantium, ad nobis
        tempora...
      </p>
    </AnimatedCard>
  );
};

export default ArticleCard;
