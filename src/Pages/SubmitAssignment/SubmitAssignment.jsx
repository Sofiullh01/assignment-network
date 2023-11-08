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
  if(!submitData.length ){
    return <h2 className="text-4xl font-bold text-center"> No data found</h2>
}
  return (
    <div>
      
      <div className="overflow-x-auto my-8">
      <h2 className="text-center text-3xl font-semibold">Submitted Assignments : {submitData.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>

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
                    setSubmitData={setSubmitData} 
                    submitData={submitData}
                key={submit._id}></SubmitTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmitAssignment;
