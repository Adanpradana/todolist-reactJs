import whatsapp from "./../../assets/sosial-media/whatsapp-white.svg";
import instagram from "./../../assets/sosial-media/instagram.svg";
import linkedin from "./../../assets/sosial-media/linkedin.svg";
import email from "./../../assets/sosial-media/gmail_old.svg";
import github from "./../../assets/sosial-media/github.svg";
import heroImg from "../../assets/38.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="xxl:container mx-auto  h-screen bg-slate-100">
      <section className="hero pt-20 pb-5 w-full">
        <div className="flex flex-wrap md:flex-nowrap px-5 sm:px-20 lg:justify-around xl:px-48">
          <div className="flex flex-wrap justify-center self-center w-full text-center md:justify-start md:text-left  ">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-sky-400 pb-5">
              Get aligned around your activity everywhere anywhere ✔
            </h1>
            <p className="leading-relaxed">
              turn your activity into a source of information instead of a list
              of frustration, make the timeframe & impact of your goals roadmap
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
          <div className="lg:h-fit w-full flex justify-center md:justify-end">
            <img src={heroImg} alt="" className="" />
          </div>
        </div>
      </section>
      <div className="container items-center mx-auto bg-slate-100">
        <div className="text-center h-full">
          <p className="text-md">We'd love to hear from you !</p>
          <div className=" w-full flex justify-center gap-2 py-2">
            <div className="cursor-pointer">
              <img
                onClick={() =>
                  window.open("https://www.instagram.com/Adanpradanaa/")
                }
                src={instagram}
                alt=""
                className="w-7 h-7 bg-slate-400 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1 rounded-md"
              />
            </div>
            <div className="cursor-pointer">
              <img
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=081999984880"
                  )
                }
                src={whatsapp}
                alt=""
                className="w-7 h-7 bg-slate-400 hover:bg-[#25D366] p-1 rounded-md"
              />
            </div>
            <div className="cursor-pointer">
              <img
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/adan-pradana-31a7041a1/"
                  )
                }
                src={linkedin}
                alt=""
                className="w-7 h-7 bg-slate-400 hover:bg-[#0077b5] p-1 rounded-md"
              />
            </div>
            <div className="cursor-pointer">
              <img
                onClick={() => window.open("mailto:adanrizkahariz@gmail.com")}
                src={email}
                alt=""
                className="w-7 h-7 bg-slate-400 hover:bg-white p-1 rounded-md"
              />
            </div>
            <div className="cursor-pointer">
              <img
                onClick={() => window.open("https://github.com/Adanpradana")}
                src={github}
                alt=""
                className="w-7 h-7 bg-slate-400 hover:bg-[#171515] p-1 rounded-md"
              />
            </div>
          </div>
          <div className="py-4">
            <p className="text-xs text-slate-400">
              &#169; Copyright{" "}
              <span className="font-semibold">Adan Pradana</span> 2022-2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
