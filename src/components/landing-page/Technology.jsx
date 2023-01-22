import image from "../../data/images";

export default function Technology() {
  return (
    <section className="w-full  bg-slate-300  p-5 lg:px-20 xl:px-48">
      <div className="container bg-red-200 w-full py-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-2xl font-semibold">
            Our Awesome Technology
          </h1>
          <div className=" flex items-center min-h-screen justify-center">
            {/* 1. */}
            <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
              {/* 2. */}
              <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate-animate  gap-5">
                {/* 3 */}
                {image.map((data) => {
                  return (
                    <div className="flex justify-center items-start w-[20rem] bg-blue-300">
                      <img src={data} alt="" />
                    </div>
                  );
                })}
                {image.map((data) => {
                  return (
                    <div className="flex justify-center items-start w-[20rem] bg-blue-300">
                      <img src={data} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
