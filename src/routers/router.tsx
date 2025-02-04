import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/layout/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Dashboard from "../components/layout/Dashbord";
import AllProduct from "../pages/AllProduct";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "/all-product",
            element: <AllProduct/>
        },
        {
            path: "/:id/product-detail",
            element: <ProductDetails/>
        },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Registration />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
]);

export default router