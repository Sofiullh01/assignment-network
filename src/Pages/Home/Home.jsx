import PrivateRoute from "../../Routers/PrivateRoute/PrivateRoute";
import Banner from "./Banner";
import ShowComplete from "./ShowComplete";
import Sponsor from "./Sponsor";
import WhyChoose from "./WhyChoose";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Sponsor/>
            <PrivateRoute><ShowComplete/></PrivateRoute>
            <WhyChoose/>
        </div>
    );
};

export default Home;