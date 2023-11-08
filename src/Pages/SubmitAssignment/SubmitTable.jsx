import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
const SubmitTable = ({ submitVelue, submitData, setSubmitData }) => {
  const { _id, name, email, pdfLink, note, status, submit } = submitVelue || {};
  const { cetagory, dueDate, thumbnail, title, marks } = submit || {};
  const [modal, setModal] = useState(false);
  const [giveMarks, setgiveMarks] = useState("");
  const [message, setMessage] = useState("");

  const handleGiveMarks = (id) => {
    // update
    fetch(`http://localhost:5000/api/v1/submit/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Assignment completed");
          setMessage("");
          setgiveMarks("");
          setModal(false);
          const remining = submitData.filter((subData) => subData._id !== id);
          const updated = submitData.find((subData) => subData._id === id);
          const newSubmitData = [updated, ...remining];
          setSubmitData(newSubmitData);
        }
      });
  };

  return (
    <tr>
      <td className="md:flex md:items-center md:space-x-3">
        <div className="md:avatar">
          <div className="mask mask-squircle w-20 h-20">
            <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{title.slice(0, 25)}</div>
          <div className="text-sm opacity-50">
            <span className="badge badge-ghost badge-sm">
              Cetagory: {cetagory}{" "}
              <span className="ml-4">Marks: {marks ? marks : ""}</span>
            </span>
          </div>
        </div>
      </td>
      <td className="md:text-center md:font-bold">
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td className="md:pl-4">{dueDate}</td>
      <th className="md:p-2">
        <p className="btn-xs">{status}</p>
      </th>
      <th className="md:p-2">
        <button onClick={() => setModal(true)} className="btn btn-ghost btn-xs">
          Give Mark
        </button>
      </th>

      {modal && (
        <div>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg"> {title}</h3>
              <p className="font-medium text-center mt-2">
                <span className="text-red-500">NOTE : </span>
                {note}
              </p>
              <p className="font-medium text-center mt-2">
                PDF Link :{" "}
                <span className="font-light cursor-pointer hover:bg-slate-100 px-1 py-[2px] rounded-md duration-1000">
                  {pdfLink}
                </span>
              </p>
              <div className="p-4">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Marks
                </label>
                <input
                  type="number"
                  id="website"
                  name="giveMarks"
                  placeholder={`Total Marks = ${marks}`}
                  onChange={(e) => setgiveMarks(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                  aria-label="Website URL"
                  aria-describedby="website-description"
                />
                <p id="website-description" className="text-xs text-gray-500">
                  Please give assignment marks.
                </p>

                <label
                  htmlFor="message"
                  className="block mt-4 text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                  aria-label="Message"
                  aria-describedby="message-description"
                ></textarea>
                <p id="message-description" className="text-xs text-gray-500">
                  Please enter your message.
                </p>
              </div>
              <div className="modal-action ">
                <button className="btn " onClick={() => handleGiveMarks(_id)}>
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </tr>
  );
};

SubmitTable.propTypes = {
  submitVelue: PropTypes.object,
  submitData: PropTypes.object,
  setSubmitData: PropTypes.func,
};
export default SubmitTable;
