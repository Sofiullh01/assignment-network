import spon1 from '../../../public/1.svg'
import spon2 from '../../../public/2.svg'
import spon3 from '../../../public/3.svg'
import spon4 from '../../../public/4.svg'

const Sponsor = () => {
    return (
        <div className='flex justify-center items-center my-16 flex-wrap max-w-3xl  mx-auto gap-20'>
            <img src={spon1} alt="sponsor" />
            <img src={spon2} alt="sponsor" />
            <img src={spon3} alt="sponsor" />
            <img src={spon4} alt="sponsor" />
        </div>
    );
};

export default Sponsor;