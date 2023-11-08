import person1 from "../../../public/about1.jpg";
import person2 from "../../../public/about2.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen my-8 ">
      <div className="hero-content flex-col lg:flex-row md:flex-col-reverse ">
        <div className="lg:w-1/2 relative mb-16">
          <img
            src={person2}
            className="w-3/4 lg:h-96 object-cover rounded-lg shadow-2xl"
          />
          <img
            src={person1}
            className="w-2/4 rounded-lg shadow-2xl object-cover absolute lg:right-5 lg:top-2/4 border-8 right-0 top-32 border-white md:h-72 h-48 md:top-56"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-lg font-bold text-custom-500 mb-3 text-[#0DB4C7]">
            About Us
          </h3>
          <h1 className="text-[#0DB4C7] lg:text-5xl md:text-4xl text-3xl">
            <span className="text-4xl lg:text-6xl md:text-5xl font-bold text-[#082948]">
              About Student Network -
            </span>{" "}
            Your Academic Compass
          </h1>
          <p className="py-6 text-gray-500">
            Welcome to Student Network, your ultimate destination for academic
            success and student empowerment. We are here to guide and support
            students on their educational journey, offering a wealth of
            resources and a vibrant online community that fosters learning,
            growth, and collaboration
          </p>
          <p className="text-gray-500">
            Student Network is not just a website; it is a platform designed by
            students, for students. We believe that the path to success is best
            navigated together, and we are committed to being your compass as
            you embark on your educational journey.
          </p>
          <button className="btn bg-transparent my-7 border-[#0DB4C7] text-#0DB4C7] hover:bg-[#0DB4C7] hover:text-white duration-700  ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
