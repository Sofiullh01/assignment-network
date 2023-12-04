import { useContext } from "react";
import Banner from "./Banner";
import ShowComplete from "./ShowComplete";
import Sponsor from "./Sponsor";
import WhyChoose from "./WhyChoose";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsor />
      <ShowComplete />

      <WhyChoose />
    </div>
  );
};

export default Home;
