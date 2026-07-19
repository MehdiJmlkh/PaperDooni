import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AddArticlePage from "./pages/AddArticlePage";
import ErrorPage from "./pages/ErrorPage";
import SignInPage from "./pages/SignInPage";
import AuthLayout from "./pages/AuthLayout/AuthLayout";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";

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
          { path: "users/me", element: <UserPage /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "/sign-in", element: <SignInPage /> },
          { path: "/sign-up", element: <SignUpPage /> },
        ],
      },
    ],
  },
]);

export default router;
