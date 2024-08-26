import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Overview from "../pages/Overview";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Route;
