import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HeaderFooterLayout from "../components/HeaderFooterLayout";
import HomePage from "../pages/Homepage";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/logement/:id", element: <ApartmentPage /> },
      { path: "/about", element: <About /> }
    ]
  }
]);
