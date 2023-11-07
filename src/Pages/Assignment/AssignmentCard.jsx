import PropTypes from "prop-types";
import { GrView } from "react-icons/gr";
import { MdOutlineUpdate } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const AssignmentCard = ({ cardInfo }) => {
  const { user } = useAuth();
  const { _id, title, description, thumbnail, email, cetagory, marks,dueDate } =
    cardInfo || {};
  return (
    <div className="card  bg-base-100 shadow-xl mt-10">
      <figure className="px-10 pt-10">
        <img src={thumbnail} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="font-medium ml-16 -mt-6 text-white "> Due Date : {dueDate.slice(0,16)}</p>
      <div className="card-body ">
      
        <div>
          <p className="font-medium  flex justify-between text-white ">
            {" "}
            <span className="inline-block bg-[#2B3440] rounded-md  py-1 px-2 ">
              Marks : {marks && marks}
            </span>{" "}
            <span className="inline-block bg-[#2B3440] rounded-md  py-1 px-2 ">
              {cetagory}
            </span>
          </p>
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 50)} ...</p>
        </div>
        <div className="card-actions justify-between">
          <Link to={`/view/${_id}`}>
            <button className=" text-[#ee2f75] py-2 px-3 bg-slate-100 flex gap-2 justify-center items-center hover:bg-gray-300 duration-700 rounded-md ">
              <GrView className=" text-2xl"></GrView>{" "}
              <span className="inline-block font-medium">View</span>
            </button>
          </Link>
          {/* delete button */}
          {user?.email === email && (
            <Link to={`/update/${_id}`} >
            <button className=" text-[#ee2f75] py-2 px-3 bg-slate-100 flex gap-2 justify-center items-center hover:bg-gray-300 duration-700 rounded-md ">
              <MdOutlineUpdate className=" text-2xl"></MdOutlineUpdate>{" "}
              <span className="inline-block font-medium">Update</span>
            </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  cardInfo: PropTypes.object,
};
export default AssignmentCard;
