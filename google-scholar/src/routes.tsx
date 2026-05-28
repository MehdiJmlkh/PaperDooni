import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "articles/:id", element: <ArticlePage /> },
    ],
  },
]);

export default router;
