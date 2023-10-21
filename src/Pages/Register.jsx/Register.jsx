import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import swal from "sweetalert";

const Register = () => {
    const {createUser, handleUpdateProfile} = useContext(AuthContext);

    const handleRegister =(event)=>{

        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const name = form.get('name');
        const imageURL = form.get('imageURL')
        const email = form.get('email');
        const password = form.get('password');

        // console.log(name,imageURL, email, password);

        if(password.length < 6){
          swal("Invalid!", "Password must should be 6 character", "error");
          return;
           
        }

        if(!/[A-Z]/.test(password)){
          swal("Invalid!", "Password must should be a 1 capital latter", "error");
          return;
        }

        if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
          swal("Invalid!", "Password must should be a 1 Special latter", "error");
          return;
        }


        createUser(email, password)
          .then(res => {
            handleUpdateProfile(name, imageURL)
            .then(()=> {
              swal("Welcome!", "Registration Successful", "success");
             
            })
          })
          .catch(error => {
            swal("Invalid!", "Provide right email/password", "error");
          })
        
    }

    return (
        <div className="flex justify-center items-center h-[95vh]">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleRegister} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Register in to our platform
          </h5>
          <div>
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name"
              required
            />
          </div>
          <div>
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image URI
            </label>
            <input
              type="text"
              name="imageURL"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="image url..."
             
            />
          </div>
          <div>
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                />
              </div>
              <label
                
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login account
            </Link>
          </div>
        </form>
        {/* <GoogleLogin></GoogleLogin> */}
      </div>
    </div>
    );
};

export default Register;