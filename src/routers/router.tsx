import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/layout/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Home />,
        }]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Registration />
    },
]);

export default router