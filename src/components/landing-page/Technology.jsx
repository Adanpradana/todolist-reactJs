import images from "../../data/images";

export default function Technology() {
  return (
    <section className=" w-full bg-slate-300  p-5  lg:px-0">
      <div className="  w-full py-5">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-center text-2xl font-semibold">
            Our Awesome Technology
          </h1>
          <div className="  flex justify-end overflow-hidden relative w-full mt-10">
            <div className=" bg-red-300 flex animate-animate gap-10 px-5">
              {images.map((image) => {
                return (
                  <div className="flex self-center w-[350px] min-h-[250px]  justify-center rounded-lg bg-white  shadow-lg">
                    <img src={image} alt="" className="p-5 h-[10%]" />
                  </div>
                );
              })}
            </div>
            <div className=" bg-red-300  flex animate-animate gap-10 px-5">
              {images.map((image) => {
                return (
                  <div className="flex self-center w-[350px] min-h-[250px] justify-center rounded-lg bg-white shadow-lg">
                    <img src={image} alt="" className="p-5 h-[10%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
