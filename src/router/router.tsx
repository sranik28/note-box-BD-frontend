import { createBrowserRouter } from "react-router-dom";
import Login from "../page/authentication/Login";
import Root from "../components/layout/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
