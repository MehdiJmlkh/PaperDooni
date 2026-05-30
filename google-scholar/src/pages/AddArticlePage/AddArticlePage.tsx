import AddCitationCard from "../../components/AddCitationCard";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import "./AddArticlePage.css";

const AddArticlePage = () => {
  return (
    <main className="add-article">
      <h1 className="add-article__heading">Add Article</h1>
      <form className="form">
        <Input className="add-article__input" placeholder="Title" />
        <Input className="add-article__input" placeholder="Publication Year" type="number" />
        <TextArea className="add-article__input" placeholder="Abstract" rows={8} />
        <TextArea className="add-article__input" placeholder="Body" rows={15} />
        <AddCitationCard />
        <div className="add-article__btns">
        <Button>Clear</Button>
        <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
};

export default AddArticlePage;
