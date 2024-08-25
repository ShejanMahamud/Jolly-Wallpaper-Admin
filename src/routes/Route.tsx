import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default Route;
