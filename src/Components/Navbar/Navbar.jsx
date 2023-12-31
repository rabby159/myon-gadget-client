import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then(res => console.log(res.user))
    .catch(err=> console.log(err))
  }


  const navLink = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addProduct'>Add Product</NavLink></li>
      <li><NavLink to='/myCart'>My Cart</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/Contact'>Contact</NavLink></li>
      
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navLink}

            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-[50px]" src={'https://i.ibb.co/rHtqjF0/LOGO.jpg'} alt="" />
          <p className="text-2xl font-semibold">Myon <span className="bg-cyan-400 px-2 py-1 rounded-full ">Gadget</span></p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
        {
            user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="btn btn-sm  btn-ghost">Logout</button>
                  </li>
                </ul>
              </div>
            )
            :
            <Link to='/login'>
            <button className="btn btn-info">Login</button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
