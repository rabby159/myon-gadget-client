import Swal from 'sweetalert2'

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = { image, name, brand, type, price, description, rating };
    console.log(newProduct);

    fetch("https://myon-gadget-server-qyfz8kcw0-md-rabbys-projects.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Your new product added successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-10 bg-gradient-to-r from-cyan-100 to-blue-200 p-5 rounded-md">
      <div className="text-center text-4xl font-bold pb-10">
        <h2>Add New Product</h2>
      </div>

      <div>
        <form onSubmit={handleAddProduct}>
          {/* 1st row */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="https://"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-10">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
          </div>

          {/* 2nd row */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <select className="select select-bordered w-full" name="brand">
                  <option disabled selected>
                    Brand
                  </option>
                  <option>Apple</option>
                  <option>Xiaomi</option>
                  <option>realme</option>
                  <option>Newegg</option>
                  <option>B&H</option>
                  <option>Gadget & Gear</option>
                </select>
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-10">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="gadget/accessories"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
          </div>

          {/* 3rd row */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="amount"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-10">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="description.."
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
          </div>

          {/* 4th row */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
          </div>

          <div>
            <input
              type="submit"
              value="Add Product"
              className="btn btn-info w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
