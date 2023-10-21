import { useLoaderData} from "react-router-dom";
import CompanyProduct from "./CompanyProduct";



const CompanyProducts = () => {
    
  const products = useLoaderData();

  return (
    <div>
      <div>
        <div className="carousel w-full h-[70vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={`https://i.ibb.co/0B1w6sK/black-friday-sales-arrangement-with-shopping-cart.jpg`}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={`https://i.ibb.co/5xRvWp8/Screenshot-2023-10-20-080806.jpg`}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={`https://i.ibb.co/QfSj9dp/Screenshot-2023-10-20-080941.jpg`}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        {products.map((product) => (
          <CompanyProduct key={product._id} product={product}></CompanyProduct>
        ))}
      </div>
    </div>
  );
};

export default CompanyProducts;
