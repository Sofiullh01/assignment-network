import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import axios from "axios";

const ShowComplete = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    axios
      .get(`https://assignment-server-11-two.vercel.app/api/v1/showAssignment`)
      .then((res) => {
        console.log(res.data);
        setDatas(res.data);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, []);
  return (
    <div>
      <div className="space-y-4 text-center my-3">
        <h5 className="text-custom-500 font-bold">Submit</h5>
        <h2 className="text-5xl font-bold text-[#0DB4C7]">
          Submitted assignment
        </h2>
        <p className="text-gray-300  ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 px-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {datas?.map((items) => (
          <ShowCard items={items} key={items._id}></ShowCard>
        ))}
      </div>
    </div>
  );
};

export default ShowComplete;
