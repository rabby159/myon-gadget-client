import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import CompanyProducts from "../Pages/CompanyProduct/CompanyProducts";
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register.jsx/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateRoute from "../Pages/UpdateRoute/UpdateRoute";


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
                    element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
                },
                {
                    path: '/companyProduct',
                    element: <CompanyProducts></CompanyProducts>,
                    loader: () => fetch('https://myon-gadget-server-qyfz8kcw0-md-rabbys-projects.vercel.app/product')
                },
                {
                    path: '/productDetails/:_id',
                    element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                    loader: () => fetch('https://myon-gadget-server-qyfz8kcw0-md-rabbys-projects.vercel.app/product')
                },
                {
                    path: '/myCart',
                    element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/updateRoute/:id',
                    element: <PrivateRoute><UpdateRoute></UpdateRoute></PrivateRoute>,
                    loader: ({params}) => fetch(`https://myon-gadget-server-qyfz8kcw0-md-rabbys-projects.vercel.app/product/${params.id}`)
                }
            ]
        }
]);

export default siteRoute;