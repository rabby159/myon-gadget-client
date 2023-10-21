import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";


const ProductDetails = () => {

    const [product, setProduct] = useState({});

    const { _id } = useParams();

    const products = useLoaderData();

    useEffect(()=> {
        const productFind = products?.find((product)=> product._id == _id);
        setProduct(productFind)
    }, [products, _id])

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-20">
                <ProductDetail product={product}></ProductDetail>
            </div>
        </div>
    );
};

export default ProductDetails;