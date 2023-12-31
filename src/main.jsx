import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import siteRoute from "./Router/Route.jsx";
import AuthProvider from "./Router/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={siteRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
