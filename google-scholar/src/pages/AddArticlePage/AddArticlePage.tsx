import { Path, useForm } from "react-hook-form";
import AddCitationCard from "../../components/AddCitationCard";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { useAddArticle } from "../../queries/useAddArticle";
import { AddArticleRequest } from "../../services/articleService";
import "./AddArticlePage.css";

const AddArticlePage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<AddArticleRequest>();

  const registerRequired = (name: Path<AddArticleRequest>) =>
    register(name, { required: true });

  const addArticle = useAddArticle();

  const handleReset = () => reset();
  
  const handleSubmitArticle = handleSubmit((data) =>
    addArticle.mutate({ ...data, citations: [] }),
  );

  return (
    <main className="add-article">
      <h1 className="add-article__heading">Add Article</h1>
      <form className="form">
        <Input
          {...registerRequired("title")}
          className="add-article__input"
          placeholder="Title"
        />
        <Input
          {...registerRequired("year")}
          className="add-article__input"
          placeholder="Publication Year"
          type="number"
        />
        <TextArea
          {...registerRequired("abs")}
          className="add-article__input"
          placeholder="Abstract"
          rows={8}
        />
        <TextArea
          {...registerRequired("body")}
          className="add-article__input"
          placeholder="Body"
          rows={15}
        />
        <AddCitationCard />
        <div className="add-article__btns">
          <Button onClick={handleReset} type="reset">
            Clear
          </Button>
          <Button disable={!isValid} onClick={handleSubmitArticle}>
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
};

export default AddArticlePage;
