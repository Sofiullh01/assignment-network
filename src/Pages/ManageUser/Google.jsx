import { FcGoogle} from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Google = () => {
  const {googleLigin} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = async() => {
    const toastId = toast.loading('Logging In ...')
    try{
      await googleLigin()
      toast.success("Successfully User Sign In!", {id: toastId});
        navigate(location?.state ? location.state : "/");
    } catch(error){
      toast.error(error.message, {id: toastId})
    }
  }
    return (
        <div >
        <button onClick={handleLogin}
         aria-label="Log in with Google" className="px-3 pt-4 rounded-sm">
          <FcGoogle className=" text-3xl "></FcGoogle>
        </button>
      </div>
    );
};

export default Google;