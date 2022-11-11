import heroImg from "../../assets/37.png";
import icon1 from "../../assets/Untitled-1.png";
import icon2 from "../../assets/Untitled-2.png";
import icon3 from "../../assets/Untitled-3.png";

const Hero = () => {
  return (
    <div className="container m-auto ">
      <section>
        <div className="hero bg-slate-100  md:flex lg:px-10 ">
          <div className="self-center md:text-left px-5 lg:p-0 w-full text-center lg:text-left md:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-semibold text-sky-400 pb-5">Get aligned around your activity everywhere anywhere ✔</h1>
            <p className="leading-relaxed">turn your activity into a source of information instead of a list of frustration</p>
            <p className="leading-relaxed">make the timeframe & impact of your goals roadmap</p>
            <div className="pt-5 ">
              <button
                className="
              border
            border-zinc-300
              py-2
              px-5 
              font-medium
              rounded
              hover:shadow-lg 
              hover:opacity-70
              hover:text-neutral-50
              hover:bg-sky-400 
              transition duration-400
              
              ease-in-out"
              >
                GET STARTED
              </button>
            </div>
          </div>
          <div className="md:self-center md:w-1/2 lg:w-3/4 md:flex md:content-center">
            <img src={heroImg} alt="" className="w-full lg:h-full lg:bg-cover md:z-10" />
          </div>
        </div>
      </section>
      <section className="container m-auto pb-6 ">
        <div>
          {/* <img src={rocket} alt="" className="rounded-full w-28 bg-cover drop-shadow-2xl" /> */}
          <h1 className="font-semibold text-2xl text-center">build your habbit</h1>
        </div>
        <div className="text-center mt-5 md:mt-0">
          <div className="sm:flex">
            <div className=" rounded-md mx-10 py-10 bg-slate-300 mb-5">
              <img src={icon1} alt="" className="mx-auto mb-5" />
              <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, perferendis.</h1>
            </div>
            <div className=" rounded-md mx-10 py-10 bg-slate-300 mb-5">
              <img src={icon2} alt="" className="mx-auto mb-5" />
              <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, perferendis.</h1>
            </div>
            <div className=" rounded-md mx-10 py-10 bg-slate-300 mb-5">
              <img src={icon3} alt="" className="mx-auto mb-3" />
              <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, perferendis.</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
