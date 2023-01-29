import Typewriter from "typewriter-effect";
import heroImg from "../../assets/38.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useState } from "react";
import { useEffect } from "react";
const Hero = () => {
  const [randomUsers, setRandomUsers] = useState(0);

  useEffect(() => {
    const number = 60;
    const random = Math.floor(Math.random() * number);
    setRandomUsers(random);
  }, []);

  return (
    <div className="xxl:container mx-auto ">
      <section className="hero pt-20 pb-10 bg-slate-200">
        <div className=" relative flex flex-wrap md:flex-nowrap px-5 pb-5 sm:px-28 lg:justify-around xl:px-48 ">
          <div className="flex flex-wrap gap-5 justify-center self-center w-full text-center md:justify-start md:text-left leading-[40px]">
            <div className="text-3xl md:text-4xl xl:text-5xl  font-medium text-purple-plum ">
              Get aligned around your activity
              <span className="font-semibold text-dark-sea-green">
                <Typewriter
                  options={{
                    strings: ["everywhere", "anywhere"],
                    autoStart: true,
                    loop: true,
                    cursor: "&#10074",
                  }}
                />
              </span>
            </div>
            <p className="text-lg">
              turn your activity into a source of information instead of a list
              of frustration, make the timeframe & impact of your goals roadmap
            </p>
            <div
              className=" border rounded-xl  hover:shadow-lg 
              bg-purple-plum
              hover:opacity-70
              hover:bg-sky-400 
              transition duration-400
              ease-in-out
            border-zinc-300"
            >
              <Link to={"/auth/login"}>
                <button className="py-2 px-14 font-semibold text-white  ">
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:h-fit w-full flex justify-center md:justify-end">
            <img src={heroImg} alt="" className="" />
          </div>
          <div className="w-full  md:absolute px-5 md:px-10 lg:px-48 left-0 -bottom-24  flex self-center justify-center">
            <div className=" container w-full h-auto flex self-center justify-center gap-5 flex-wrap md:flex-nowrap">
              <div className="stats w-full md:w-auto text-center md:text-left stats-vertical md:stats-horizontal shadow">
                <div className="stat">
                  <div className="stat-title">Web Performance</div>
                  <div className="stat-value">
                    <CountUp end={98} duration={1} />%
                  </div>
                  <div className="stat-desc text-violet-900">GTmetrik</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <div className="stat-value">
                    <CountUp end={randomUsers} duration={1} />
                  </div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value">
                    <CountUp end={randomUsers} duration={1} />
                  </div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
