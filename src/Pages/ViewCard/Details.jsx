import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const Details = ({ detals }) => {
  const [submitData, setSubmitData] = useState([]);
  const [pdfUrl, setPdfUrl] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState("pending");
  const { _id, title, description, thumbnail } = detals || {};
  const { user } = useAuth();

  const handlePostMongo = (event) => {
    event.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const pdfLink = pdfUrl;
    const note = message;
    const submit = submitData;
    const submitInfos = {
      name,
      email,
      pdfLink,
      note,
      submit,
      status,
    };
    console.log(submitInfos);

    fetch("http://localhost:5000/api/v1/addassignments/submit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submitInfos),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          toast.success('Your Assignment Done')
        }
        setMessage("");
        setPdfUrl("");
        setModal(false);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/assignments/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmitData(data);
      });
  }, [_id]);
  console.log(message);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl lg:h-[476px] mt-6 ">
        <figure className=" ">
          <img
            src={thumbnail}
            alt="Shoes"
            className="rounded-xl w-full lg:h-[400px] object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <button
              onClick={() => setModal(true)}
              className="text-[#ee2f75] py-3 px-3 bg-slate-100 flex gap-2 justify-center items-center hover:bg-gray-300 duration-700 rounded-md font-medium"
            >
              Take assignment
            </button>
          </div>
        </div>
      </div>
      {modal && (
        <div>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{title}</h3>
              <div className="p-4">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Assignment PDF URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="pdfUrl"
                  onChange={(e) => setPdfUrl(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                  aria-label="Website URL"
                  aria-describedby="website-description"
                />
                <p id="website-description" className="text-xs text-gray-500">
                  Please enter the URL of your website.
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
                <button className="btn " onClick={handlePostMongo}>
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Details.propTypes = {
  detals: PropTypes.object,
};
export default Details;