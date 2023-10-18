import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-8xl">404</h2>
            <p className="text-center font-bold text-4xl text-red-500">Sorry! You Page Not Found</p>
            <div className="flex justify-center mt-5">
            <Link className="" to='/'>
                <button className="btn btn-info">Go Home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;