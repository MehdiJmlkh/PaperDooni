import { MdOutlineArticle } from "react-icons/md";
import { useParams } from "react-router-dom";
import CitationCard from "../../components/CitationCard";
import SimpleCard from "../../components/SimpleCard";
import { useArticle } from "../../queries/useArticle";
import "./ArticlePage.css";

const ArticlePage = () => {
  const { id } = useParams();
  const { data: article } = useArticle(parseInt(id || ""));

  return (
    <main className="article-page">
      <SimpleCard className="article-page__header">
        <span>
          <MdOutlineArticle className="article-page__title-icon" size={45} />
          <h1 className="article-page__title">{article?.title}</h1>
        </span>
        <span className="article-page__year">{article?.year}</span>
      </SimpleCard>
      <SimpleCard>
        <h2 className="article-page__heading">Abstract</h2>
        <p className="article-page__content">{article?.abs}</p>
      </SimpleCard>
      <SimpleCard>
        <h2 className="article-page__heading">Body</h2>
        <p className="article-page__content">{article?.body}</p>
      </SimpleCard>
      {article && article?.citations.length > 0 && (
        <h2 className="article-page__heading">Citations</h2>
      )}
      {article?.citations.map((citaion) => (
        <CitationCard citation={citaion} />
      ))}
    </main>
  );
};

export default ArticlePage;
