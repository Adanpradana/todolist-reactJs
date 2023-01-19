import { HiStar } from "react-icons/hi";

export default function Testimony() {
  return (
    <section className="w-full  bg-slate-200 p-5 lg:px-48">
      <div className="container m-auto w-full  bg-red-300  h-screen flex flex-wrap ">
        <div className="w-full bg-slate-500 text-center lg:text-left flex flex-col  lg:self-center gap-5 lg:flex-1">
          <h2 className="font-semibold text-lg uppercase ">meet todolist</h2>
          <h1 className="font-semibold text-4xl w-full text-violet-900">
            Todo solution for your activity
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            ullam quas excepturi nisi nesciunt, corrupti deleniti adipisci
            assumenda veniam commodi qui, laborum, eos voluptate iste.
          </p>
          <div className="flex justify-center lg:justify-start text-center">
            <div
              className=" border rounded-xl  hover:shadow-lg  w-1/2
              bg-purple-plum
              hover:opacity-70
              hover:bg-sky-400 
              transition duration-400
              ease-in-out
            border-zinc-300"
            >
              <button className="py-4  font-semibold text-white  ">
                GET STARTED
              </button>
            </div>
          </div>
          <div className=" flex justify-center self-center lg:self-start gap-2 pt-20">
            <HiStar className="text-slate-900 text-2xl bg-yellow-300" />
            <p className="text-[0.9rem]">Rated 4,9/5 form over 485 review</p>
          </div>
        </div>
        <div className="w-full bg-yellow-300 lg:flex-1 py-5 lg:py-0 lg:px-10 ">
          <div className="container bg-slate-400  flex flex-col gap-3 lg:w-[500px] lg:p-5">
            <div className="bg-red-200  relative ">
              <div className="  flex self-center gap-5 bg-green-200 p-3">
                <img src="https://i.pravatar.cc/100" alt="" />
                <div className="flex flex-col gap-1 self-center">
                  <h1 className="text-lg font-medium">Name</h1>
                  <p className="text-[0.9rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, voluptatum.
                  </p>
                  <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="bg-red-200  relative ">
              <div className="  flex self-center gap-5 bg-green-200 p-3">
                <img src="https://i.pravatar.cc/100" alt="" />
                <div className="flex flex-col gap-1 self-center">
                  <h1 className="text-lg font-medium">Name</h1>
                  <p className="text-[0.9rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, voluptatum.
                  </p>
                  <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="bg-red-200  relative ">
              <div className="  flex self-center gap-5 bg-green-200 p-3">
                <img src="https://i.pravatar.cc/100" alt="" />
                <div className="flex flex-col gap-1 self-center">
                  <h1 className="text-lg font-medium">Name</h1>
                  <p className="text-[0.9rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, voluptatum.
                  </p>
                  <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="bg-red-200  relative ">
              <div className="  flex self-center gap-5 bg-green-200 p-3">
                <img src="https://i.pravatar.cc/100" alt="" />
                <div className="flex flex-col gap-1 self-center">
                  <h1 className="text-lg font-medium">Name</h1>
                  <p className="text-[0.9rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, voluptatum.
                  </p>
                  <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
