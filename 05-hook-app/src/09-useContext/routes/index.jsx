import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainApp from "../MainApp";
import AboutPage from "../AboutPage";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
