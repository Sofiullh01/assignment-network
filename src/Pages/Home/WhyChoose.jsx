import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <div
      className="hero lg:h-96 rounded-md my-10"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/HW2sG6Wp/vecteezy-abstract-background-design-background-texture-design-with-18752866.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40 rounded-md"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-center ">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="lg:text-6xl md:text-5xl text-[#0DB4C7] text-4xl mb-5">Mastering</span> <br />   Network  Website Creation.
          </h1>
          <p className="mb-5">
            Provide an Overview: In the description, give a brief overview of
            what your assignment covers. Mention the key aspects and goals of
            creating a network website. Include the Scope: Mention what the
            readers can expect to learn from your assignment. For instance, you
            can say, "This assignment will guide you through the process of
            designing, developing, and launching a network website.
          </p>
          <Link to='/about' className="flex justify-center items-center">
                <button className=" text-white  py-2 px-3 rounded-md flex justify-center items-center gap-2 btn bg-transparent my-7 border-[#0DB4C7] text-#0DB4C7] hover:bg-[#0DB4C7] hover:text-white duration-700 text-lg">See More <AiOutlineArrowRight className="text-2xl"></AiOutlineArrowRight> </button>
                </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
