import photo from "../assets/girl.webp";
import {FiArrowUpRight} from 'react-icons/fi'

const LandingPage = () => {
  return (
    <div>
      
      <div className="absolute left-1/2 top-24 -translate-x-1/2 text-center">
        <div className="my-4 w-full flex justify-center">
          <div className="w-fit px-5 text-2xl border-2 border-gray-900 rounded-full">{"Hello"}</div>
        </div>
        <div className="text-[4.7rem] leading-[4.7rem] font-bold font-raleway tracking-[.09em]">I'm <span className="text-[#e24324]">Shrithi,</span></div>
        <div className="text-[5rem] leading-[5rem] font-bold font-raleway tracking-[.09em]">UI Developer</div>
      </div>
      <div className="h-[45rem] w-[45rem] bg-[#d73b1a] rounded-full absolute -bottom-1/2 left-1/2 -translate-x-1/2"></div>
      <img
        className="h-[80vh] absolute -bottom-1 left-1/2 translate-x-[-45%]"
        src={photo}
        alt=""
      />
      <div className="bg-[#d6d6dc] h-14 rounded-full absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-around items-center gap-3 font-poppins">
        <button className="px-6 py-2 m-1 bg-[#d73b1a] rounded-full text-white text-2xl flex items-center gap-2">Portfolio<FiArrowUpRight/></button>
        <button className="px-10 py-2 m-1 ring-2 ring-black ring-inset rounded-full text-2xl">Hire Me</button>
      </div>
    </div>
  );
};

export default LandingPage;
