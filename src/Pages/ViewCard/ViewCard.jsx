
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";


const ViewCard = () => {
    const lodeData = useLoaderData();
    const {id} = useParams();
    const cardInfo = lodeData.filter(data => data._id == id);
    console.log( typeof id,cardInfo)
  return (
    <div>
        {
            cardInfo.map(detals => <Details 
                detals={detals}
                key={detals._id}></Details>)
        }
    </div>
  );
};


export default ViewCard;