/* eslint-disable react/prop-types */


const ProductDetail = ({ product }) => {
  const {_id, image, name, price, description } = product;


  const handleAddCart = () => {
    const addProduct = []

    const productList = fetch('http://localhost:5000/product');

    // if(!donationCategory){
    //     addDonation.push(donation);
    //     localStorage.setItem('donation', JSON.stringify(addDonation));
    //     swal("Good job!", "Donation Successful!", "success");
    // }
    // else{

    //   const isExits = donationCategory?.find(donation => donation.id === id);

    //   if(!isExits){
        
    //     addDonation.push(...donationCategory, donation);
    //     localStorage.setItem('donation', JSON.stringify(addDonation));
    //     swal("Good job!", "Donation Successful!", "success");

    //   }
    //   else{
    //     swal("Error!", "Already Donation done in this package", "error");
    //   }

    // if(!productList){
    //     addProduct.push(product)
    // }
    // else{
    //     const isExits = productList?.find(product => product._id === _id)
    // }

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
