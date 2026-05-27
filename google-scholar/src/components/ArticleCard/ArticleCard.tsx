import CitationBadge from "../CitationBadge";
import "./ArticleCard.css";
import { MdOutlineArticle } from "react-icons/md";

const ArticleCard = () => {
  return (
    <div className="article">
      <div className="article__header">
        <MdOutlineArticle className="article__icon" size={30} />
        <a className="article__title">Title</a>
        <CitationBadge>2</CitationBadge>
      </div>
      <div className="article__year">2026</div>
      <p className="article__abstract">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quos magnam commodi aliquam doloremque, minus quis distinctio beatae aut
        mollitia, vero dolor, iste maxime ea quibusdam tempora corporis atque
        magni debitis nulla. Quidem fugiat aspernatur recusandae ratione
        necessitatibus incidunt dicta iure est sed accusantium, ad nobis tempora
        repellendus. Inventore harum ratione nobis vitae perspiciatis alias
        ducimus quae quas beatae voluptatum. Placeat suscipit sapiente voluptas
        labore iure consectetur mollitia consequatur ab at et dolorum, ullam
      </p>
    </div>
  );
};

export default ArticleCard;
