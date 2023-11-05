import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navber = () => {
    const {user,logOut} = useAuth()
    console.log(user)
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addassignment">Add Assignment</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );

  const hndleLogOut = async () => {
      const toastId = toast.loading('Logging In ...')
    try{
        logOut()
        toast.success("User Sign Out seccess !", {id: toastId});
    } catch(error){
        toast.error(error.message, {id: toastId})
    }
    
  }
  return (
    <div className="navbar shadow-md px-8 justify-between">
      <div className="">
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
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {
        user? <div className="dropdown ">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user.photoURL} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44  relative right-0"
        >
          <li>
            <a className="justify-between text-sm">
              {user.displayName}
              <span className="badge ">New</span>
            </a>
          </li>
          <li onClick={hndleLogOut}>
            <a> <FiLogOut className="text-2xl "></FiLogOut></a>
          </li>
        </ul>
      </div>
      : <Link to='/login' className="btn btn-sm">  LogIn</Link>
      }
    </div>
  );
};

export default Navber;
