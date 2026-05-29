import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import "./AddArticlePage.css";

const AddArticlePage = () => {
  return (
    <main className="add-article">
      <form className="form">
        <div>
          <label className="form-label add-article__label">Title</label>
          <input className="form-control add-article__input" />
        </div>
        <div>
          <label className="form-label add-article__label">
            Publication Year
          </label>
          <input className="form-control add-article__input" type="number" />
        </div>
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
