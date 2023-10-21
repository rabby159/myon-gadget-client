/* eslint-disable react/prop-types */


const ProductDetail = ({ product }) => {
  const {_id, image, name, price, description } = product;


  const handleAddCart = () => {

  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddCart} className="btn btn-info">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
