import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import CompanyProducts from "../Pages/CompanyProduct/CompanyProducts";
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";


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
                },
                {
                    path: '/companyProduct',
                    element: <CompanyProducts></CompanyProducts>,
                    loader: () => fetch('http://localhost:5000/product')
                },
                {
                    path: '/productDetails/:_id',
                    element: <ProductDetails></ProductDetails>,
                    loader: () => fetch('http://localhost:5000/product')
                },
                {
                    path: '/myCart',
                    element: <MyCart></MyCart>,
                }
            ]
        }
]);

export default siteRoute;