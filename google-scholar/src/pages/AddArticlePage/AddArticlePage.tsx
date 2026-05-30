import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import "./AddArticlePage.css";

const AddArticlePage = () => {
  return (
    <main className="add-article">
      <h1>Add Article</h1>
      <form className="form">
        <Input className="add-article__input" placeholder="Title" />
        <Input className="add-article__input" placeholder="Publication Year" type="number" />
        <TextArea className="add-article__input" placeholder="Abstract" rows={8} />
        <TextArea className="add-article__input" placeholder="Body" rows={15} />

        <label className="form-label add-article__label">Citations</label>
        <CheckBox>Title</CheckBox>
        <CheckBox>Title</CheckBox>
        <Button>Clear</Button>
        <Button>Submit</Button>
      </form>
    </main>
  );
};

export default AddArticlePage;
