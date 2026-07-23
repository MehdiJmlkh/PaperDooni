import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import Footer from "../../components/Footer";

const ErrorPage = () => {
  const errpr = useRouteError();

  let status;
  let title;
  let message;

  if (isRouteErrorResponse(errpr)) {
    status = 404;
    title = "Page Not Found";
    message = "Oops! The page you're looking for doesn't exist.";
  } else {
    status = 500;
    title = "Unexpected Error";
    message = "An error occurred. Please try again later.";
  }

  return (
    <div className="error-page">
      <div className="error-page__box">
        <h1 className="error-page__heading">{status}</h1>
        <h2 className="error-page__sub-heading">{title}</h2>
        <p className="error-page__content">{message}</p>
        <Link to="/" className="error-page__home-btn">
          Go back home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
