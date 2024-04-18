import banner_img from "../assets/3rd_floor/UtilTrack-UI/banner-bg.png"

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${banner_img})`,
      }}
    >
      {/* <div className="hero-overlay bg-opacity-40"></div> */}
      <div className="hero-content text-center text-black">
        <div className="">
          <h1 className="mb-5 text-5xl font-medium"> Effortless Utility Management <br />with UtilTrack</h1>
          
          <button className="btn btn-primary rounded-[50px] bg-violet-500 text-black font-medium border-0 w-[150px] h-[40px] shadow-xl hover:bg-violet-400 my-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
