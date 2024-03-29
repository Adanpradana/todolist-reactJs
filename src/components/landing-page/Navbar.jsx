import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(true);
  const [color, setColor] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    window.addEventListener("click", outsideTrigger, true);
  }, []);

  const outsideTrigger = (e) =>
    !refOne.current.contains(e.target) && setDropDown(true);

  const scrollHandler = () =>
    window.scrollY > 1 ? setColor(true) : setColor(false);
  window.addEventListener("scroll", scrollHandler);

  const dropDownHandler = () => setDropDown((dropDown) => !dropDown);
  return (
    <header
      className={
        color
          ? "navbar-fixed fixed top-0 w-full bg-opacity-70 z-10 py-5 md:py-0"
          : "fixed top-0 w-full bg-transparent z-50 py-5 md:py-0"
      }
    >
      <div className="m-auto relative ">
        <div className="flex justify-between items-center px-5 sm:px-20 w-full">
          <div>
            <h1 className="font-semibold">LOOOOGOO</h1>
          </div>
          <button className="space-y-2 md:hidden" onClick={dropDownHandler}>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
          </button>
          <nav
            className={
              !dropDown
                ? "absolute right-2 max-w-[220px] w-full bg-white shadow-lg top-10 "
                : "hidden md:shadow-none rounded-xl md:flex md:justify-center md:items-center md:static md:max-w-full md:bg-transparent"
            }
            ref={refOne}
          >
            <div className="container mx-auto text-center md:flex ">
              <ul className="md:flex md:gap-10">
                <li className="py-3 md:py-5 md:flex md:border-b-2 md:border-b-transparent hover:border-blue-400 hover:text-blue-400">
                  <button className="">HOME</button>
                </li>
                <li className="py-3 md:py-5 md:flex md:border-b-2 md:border-b-transparent hover:border-blue-400 hover:text-blue-400">
                  <button>REQUEST DEMO</button>
                </li>
                <li className=" py-3 md:py-5 md:hidden md:border-b-2 md:border-b-transparent hover:border-blue-400 hover:text-blue-400">
                  <Link to={"/auth/login"}>
                    <button>LOGIN</button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className="hidden md:flex border rounded-md  hover:shadow-lg 
                bg-blue-gray
                hover:opacity-70
                hover:bg-sky-400 
                transition duration-400
                ease-in-out
              border-zinc-300"
          >
            <Link to={"/auth/login"}>
              <button className="py-2 px-8 font-normal text-white">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
