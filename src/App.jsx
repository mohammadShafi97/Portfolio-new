import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";

const App = () => {
  const router = createBrowserRouter([{ path: "/", element: <HomeLayout /> }]);
  return <RouterProvider router={router} />;
};

export default App;
