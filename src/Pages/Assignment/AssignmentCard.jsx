import PropTypes from 'prop-types'
import {GrView} from "react-icons/gr";
import {MdOutlineDelete} from "react-icons/md";

const AssignmentCard = ({cardInfo}) => {
    const {title,description,thumbnail,} = cardInfo || {};
  return (
    <div className="card  bg-base-100 shadow-xl mt-10">
      <figure className="px-10 pt-10">
        <img
          src={thumbnail}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0,50)} ...</p>
        <div className="card-actions justify-between">
          <button className=" text-[#ee2f75] py-2 px-3 bg-slate-100 flex gap-2 justify-center items-center hover:bg-gray-300 duration-700 rounded-md "><GrView className=' text-2xl'></GrView> <span className='inline-block font-medium'>View</span></button>
          <button className=" text-[#ee2f75] py-2 px-3 bg-slate-100 flex gap-2 justify-center items-center hover:bg-gray-300 duration-700 rounded-md "><MdOutlineDelete className=' text-2xl'></MdOutlineDelete> <span className='inline-block font-medium'>View</span></button>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
    cardInfo: PropTypes.object,
}
export default AssignmentCard;
