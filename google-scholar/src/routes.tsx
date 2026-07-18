import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AddArticlePage from "./pages/AddArticlePage";
import ErrorPage from "./pages/ErrorPage";
import SignInPage from "./pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "articles", element: <HomePage /> },
          { path: "articles/:id", element: <ArticlePage /> },
          { path: "articles/new", element: <AddArticlePage /> },
        ],
      },
      { path: "/sign-in", element: <SignInPage /> },
    ],
  },
]);

export default router;
