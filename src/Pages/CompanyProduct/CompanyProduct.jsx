import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const CompanyProduct = ({product}) => {

  const { _id, image, name, brand, type, price, rating } = product;
  
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-[300px] h-[300px] bg-slate-200 rounded-full"
            src={image}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Brand: {brand}</p>
          <p>Type: {type}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          
          <div className="card-actions justify-end">
            <Link to={`/productDetails/${_id}`}>
              <button className="btn btn-info">Details</button>
            </Link>
            <Link to={`/updateRoute/${_id}`}>
              <button className="btn btn-info">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProduct;
