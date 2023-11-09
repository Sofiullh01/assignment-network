import Proptypes from "prop-types";
const ShowCard = ({ items }) => {
  const { submit, giveMarks, message, pdfLink, name } = items || {};
  const { cetagory,  thumbnail, title, marks } = submit || {};
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnail} alt="Shoes" />
      </figure>
      <span className="   font-light cursor-pointer hover:bg-slate-100 px-5 py-[2px] rounded-md duration-1000">
        {pdfLink.slice(0,30) }...
      </span>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{cetagory}</div>
        </h2>
        <p>
          <span className="text-red-500">Examiner Feedback : </span>
          {message}
        </p>
        <div className="card-actions justify-end">
          <p className="text-sm font-medium">
            {name} <span className="">Got : {giveMarks}</span>
            <span className="ml-1">out of</span>
            {marks}
          </p>
        </div>
      </div>
    </div>
  );
};
ShowCard.propTypes = {
  items: Proptypes.object,
};
export default ShowCard;
