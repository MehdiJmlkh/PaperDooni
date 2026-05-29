import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Input from "../../components/Input";
import "./AddArticlePage.css";

const AddArticlePage = () => {
  return (
    <main className="add-article">
        <h1>Add Article</h1>
      <form className="form">
        <Input placeholder="Title" className="add-article__input"/>
        <Input placeholder="Publication Year" type="number"/>
        <div>
          <label className="form-label add-article__label">Abstract</label>
          <textarea
            className="form-control add-article__input"
            name="abstract"
            rows={8}
          />
        </div>
        <div>
          <label className="form-label add-article__label">Body</label>
          <textarea
            className="form-control add-article__input"
            name="body"
            rows={15}
          />
        </div>
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
