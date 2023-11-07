import { AiOutlineArrowRight } from "react-icons/ai";
import bannerImg from '../../../public/banner.jpg'
const Banner = () => {
    return (
        <div className="flex justify-center items-center gap-4 md:flex-row-reverse flex-col-reverse p-4 md:py-8 md:px-10">
            <div className='md:w-1/2'>
                <img src={bannerImg} alt="" />
            </div>
            <div className='md:w-1/2 space-y-5'>
                <h1 className=' text-4xl lg:text-6xl md:text-5xl font-bold '>The Ultimate Student <span className='text-[#0DB4C7] lg:text-5xl md:text-4xl text-3xl'>Assignment <br /> Network</span> </h1>
                <p>Immerse yourself in the captivating world of Academic Odyssey, where the aroma of knowledge wafts through the air. Our platform offers an enriching assignment experience, igniting your academic senses. !</p>
                <div className=" text-white font-medium  flex justify-center items-center ">
                <button className="  py-2 px-3 bg-[#0DB4C7] hover:bg-[#082948] duration-700 rounded-md flex justify-center items-center gap-2">More <AiOutlineArrowRight className="text-2xl"></AiOutlineArrowRight> </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;