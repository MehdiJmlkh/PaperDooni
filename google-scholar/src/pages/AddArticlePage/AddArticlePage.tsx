import "./AddArticlePage.css";

const AddArticlePage = () => {
  return (
    <main className="add-article">
      <form className="form">
        <div>
          <label className="form-label add-article__label">Title</label>
          <input className="form-control" />
        </div>
        <div>
          <label className="form-label add-article__label">
            Publication Year
          </label>
          <input className="form-control" type="number" />
        </div>
        <div>
          <label className="form-label add-article__label">Abstract</label>
          <textarea
            className="form-control"
            name="abstract"
            rows={8}
          ></textarea>
        </div>
        <div>
          <label className="form-label add-article__label">Body</label>
          <textarea className="form-control" name="body" rows={15}></textarea>
        </div>
        <div>
          <label className="form-label add-article__label">Citations</label>
          <div>
            <div className="article">
              <input
                className="form-check-input article__checkbox"
                type="checkbox"
                name="citations[] value=%s"
              />
              <label className="form-check-label">
                <a href="ArticleDetails?title=%s" className="article__header">
                  Title
                </a>
              </label>
            </div>
          </div>
        </div>
        <button className="form__btn btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddArticlePage;
