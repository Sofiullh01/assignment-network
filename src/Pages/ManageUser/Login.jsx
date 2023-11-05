import Google from "./Google";
import loginLogo from "../../assets/vecteezy_man-entering-security-password_4689193.jpg";

const Login = () => {
  return (
    <div className="w-full   px-12 py-6 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 flex justify-center items-center">
      <form className="space-y-3 max-w-md mx-auto  px-16 py-4 bg-[#3F989C] bg-opacity-10 shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-center ">Sign In </h1>
      <p className="text-base font-semibold text-center">Sign In to participate in our program</p>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-400">User Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
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
          Sign In
        </button>
        <div className="flex flex-col justify-center items-center">
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <Google></Google>
        </div>
      </form>
      <div className="w-1/2">
        <img src={loginLogo} alt="" />
      </div>
    </div>
  );
};

export default Login;
