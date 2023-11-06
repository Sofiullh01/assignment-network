import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";


const Assignments = () => {
    const lodeData = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    lodeData.map(cardInfo => <AssignmentCard 
                        key={cardInfo._id}
                        cardInfo={cardInfo}
                        ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;