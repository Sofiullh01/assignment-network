import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useEffect, useState } from "react";


const Assignments = () => {
    const [cetagory,setCetagory] = useState('');
    const [assignments,setAssignments] = useState([]);

    const url = `http://localhost:5000/api/v1/assignments?cetagory=${cetagory}`;
    console.log(cetagory)
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAssignments(data)
        })
    },[url])
    return (
        <div>
            <div className=" mt-6 flex gap-4">
              <label className="text-sm lg:ml-20">Assignment Type</label>
              <select
                className=""
                name="cetagory"
                onChange={(e)=>setCetagory(e.target.value)}
              >
                <option value="">All</option>
                <option value="Hard">Hard</option>
                <option value="Medium">Medium</option>
                <option value="Easy">Easy</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    assignments.map(cardInfo => <AssignmentCard 
                        key={cardInfo._id}
                        cardInfo={cardInfo}
                        ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;