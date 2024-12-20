// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home";
import Login from "../page/login";
import Signup from "../page/signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
