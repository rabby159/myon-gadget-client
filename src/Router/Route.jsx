import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";


const siteRoute = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('company-data.json')
                },
                {
                    path: '/addProduct',
                    element: <AddProduct></AddProduct>
                }
            ]
        }
]);

export default siteRoute;