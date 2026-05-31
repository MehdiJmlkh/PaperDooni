import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import router from "./routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        autoClose={3000}
        theme="dark"
        toastStyle={{
          borderRadius: "10px",
          fontSize: "14px",
        }}
      />
      <RouterProvider router={router} />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
);
