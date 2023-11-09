import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

const ShowComplete = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/showAssignment`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(data);
      });
  }, []);
  return (
    <div>
      <div className="space-y-4 text-center my-3">
        <h5 className="text-custom-500 font-bold">Team</h5>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 px-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {
            datas?.map(items => <ShowCard 
                items={items}
                key={items._id}></ShowCard>)
        }
      </div>
    </div>
  );
};

export default ShowComplete;
