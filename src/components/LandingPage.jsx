import photo from "../assets/girl.png";

const LandingPage = () => {
  return (
    <div>
      
      <div className="absolute left-1/2 top-24 -translate-x-1/2 text-center">
        <div className="my-4 w-full flex justify-center">
          <div className="w-fit px-5 text-2xl border-2 border-gray-900 rounded-full">{"Hello"}</div>
        </div>
        <div className="text-[4.7rem] leading-[4.7rem] font-bold font-raleway tracking-[.03em]">I'm <span className="text-[#e24324]">Shrithi,</span></div>
        <div className="text-[5rem] leading-[5rem] font-bold font-raleway tracking-[.03em]">UI Developer</div>
      </div>
      <div className="h-[45rem] w-[45rem] bg-[#d73b1a] rounded-full absolute -bottom-1/2 left-1/2 -translate-x-1/2"></div>
      <img
        className="h-[80vh] absolute bottom-0 left-1/2 translate-x-[-45%]"
        src={photo}
        alt=""
      />
      <div className="bg-[#d6d6dc] h-14 rounded-full absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-around items-center">
        <button className="px-6 py-2 m-2 bg-[#d73b1a] rounded-full text-white text-2xl">Portfolio</button>
        <button className="px-6 py-2 m-2 border-i border-[rgba(0,0,0,0.3)] rounded-full text-2xl">Hire Me</button>
      </div>
    </div>
  );
};

export default LandingPage;
