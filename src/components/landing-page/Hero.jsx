import heroImg from "../../assets/37.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="xxl:container mx-auto ">
      <section className="hero h-screen bg-slate-100 lg:flex py-20">
        <div className=" bg-slate-100  lg:self-center sm:px-20  lg:flex ">
          <div className=" lg:text-left  lg:self-center text-center  lg:h-1/2 lg:w-1/2 ">
            <h1 className="text-3xl lg:text-5xl font-semibold text-sky-400 pb-5">
              Get aligned around your activity everywhere anywhere ✔
            </h1>
            <p className="leading-relaxed">
              turn your activity into a source of information instead of a list
              of frustration
            </p>
            <p className="leading-relaxed">
              make the timeframe & impact of your goals roadmap
            </p>
            <div className="pt-5 ">
              <Link to={"/login"}>
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
              </Link>
            </div>
          </div>
          <div className=" lg:w-1/2 lg:h-full ">
            <img src={heroImg} alt="" className="w-full lg:h-3/4  md:z-10" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
