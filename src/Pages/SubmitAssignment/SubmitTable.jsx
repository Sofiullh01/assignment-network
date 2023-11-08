import PropTypes from "prop-types";
const SubmitTable = ({ submitVelue }) => {
  const { _id, name, email, pdfLink, note, status, submit } = submitVelue || {};
  const { cetagory, dueDate, thumbnail, title, marks } = submit || {};

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title.slice(0,25)}</div>
            <div className="text-sm opacity-50">
              <span className="badge badge-ghost badge-sm">
                Cetagory : {cetagory}{" "}
                <span className="ml-4">Marks : {marks ? marks : ""}</span>
              </span>
            </div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">
          {email}
        </span>
      </td>
      <td>{dueDate}</td>
      <th>
        <p className=" btn-xs">{status}</p>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs">Give Mark</button>
      </th>
    </tr>
  );
};

SubmitTable.propTypes = {
  submitVelue: PropTypes.object,
};
export default SubmitTable;
