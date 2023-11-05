import { Link } from "react-router-dom";
import Google from "./Google";
import register from '../../assets/register.jpg'

const Register = () => {
  //   const { createUser,setUser } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const handleRegister = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const name = form.username.value;
  //     const email = form.email.value;
  //     const photo = form.photo.value;
  //     const password = form.password.value;

  //     // Password validation
  //     const hasCapitalLetter = /[A-Z]/.test(password);
  //     const hasSpecialCharacter = /[!@#$%^&*]/.test(password);

  //     if (password.length < 6 || hasCapitalLetter || hasSpecialCharacter) {
  //       toast.error("Password must meet the criteria.");
  //       return;
  //     }

  //     // Create the user
  //     createUser(email, password)
  //       .then((userCredential) => {
  //         console.log(userCredential.user);
  //         toast.success("Successfully Your Registration Completed!");

  //         // Update the user's profile
  //         updateProfile(auth.currentUser, {
  //           displayName: name,
  //           photoURL: photo,
  //         })
  //           .then(() => {
  //             console.log(auth.currentUser)
  //             setUser(auth.currentUser)
  //           })
  //           .catch((updateProfileError) => {
  //             console.error("Error updating user profile:", updateProfileError);
  //           });

  //         navigate(location?.state ? location.state : "/");
  //       })
  //       .catch((createUserError) => {
  //         console.error("Error creating user:", createUserError);
  //       });

  //     const userAdd = {
  //       name,
  //       email,
  //       photo,
  //       password,
  //     };
  //     console.log(userAdd);
  //   };

  return (
    <div className="w-full h-screen  px-12 py-6 space-y-3 rounded-xl dark:bg-gray-900  dark:text-gray-100 flex justify-center items-center ">
      <form className="space-y-3  px-16 py-4  shadow-lg rounded-md max-w-md mx-auto bg-[#BD00BF] bg-opacity-10  ">
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <p className="text-base font-semibold text-center">Get started with our program .</p>
        <div className="flex gap-3">
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">User Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">User Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-400">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Profile URL"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block  p-3 text-center rounded-sm dark:text-gray-900 text-white btn btn-block  bg-gray-700 hover:bg-black duration-700">
          Sign Up
        </button>
        <div className="flex flex-col justify-center items-center">
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <Google></Google>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Do have an account?
          <Link to="/login">
            <span className="text-base font-semibold">Register</span>
          </Link>
        </p>
      </form>
      <div className="w-1/2">
        <img src={register} alt="" />
      </div>
    </div>
  );
};

export default Register;
