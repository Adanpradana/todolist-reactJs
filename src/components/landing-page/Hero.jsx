import heroImg from "../../assets/37.jpg";

const Hero = () => {
  return (
    <div className="container pt-10 mx-auto">
      <main className="flex flex-wrap">
        <div className="self-center px-5 w-full lg:w-1/2">
          <h1 className="text-4xl font-semibold text-sky-400 pb-1">TODOLSIT</h1>
          <h2 className="font-semibold text-slate-800 pb-2">simple way to ease your activity everywhere and anywhere ✔</h2>
          <p className="leading-relaxed">your favorite apps, we help you manage your activity, we noticed something very special</p>
          <div className="pt-4 ">
            <button
              className="
              border
            border-zinc-300
              py-2 px-5
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
        <div className="  self-end p-5 w-full lg:w-1/2">
          <div className="mt-5">
            <img src={heroImg} alt="" className="w-full mx-auto" />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Hero;
