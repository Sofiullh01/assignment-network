import { useEffect, useState } from "react";
import SubmitTable from "./SubmitTable";


const SubmitAssignment = () => {
  const [submitData, setSubmitData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/submit?status=pending`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmitData(data);
      });
  }, []);
  return (
    <div>
      <h2>Submitted Assignments : {submitData.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Assignment</th>
              <th>Examinee Name</th>
              <th>Due Date</th>
              <th>Stutas</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                submitData.map(submit => <SubmitTable
                    submitVelue={submit} 
                key={submit._id}></SubmitTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmitAssignment;
