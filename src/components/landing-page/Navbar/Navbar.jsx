import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(true);
  const [color, setColor] = useState(false);

  const scrollHandler = () =>
    window.scrollY > 1 ? setColor(true) : setColor(false);
  window.addEventListener("scroll", scrollHandler);

  const dropDownHandler = () => setDropDown((dropDown) => !dropDown);
  return (
    <header
      className={
        color
          ? "navbar-fixed fixed top-0 w-full bg-opacity-70 z-10  h-fit "
          : "fixed top-0 w-full bg-transparent z-50 h-fit"
      }
    >
      <div className="m-auto  relative ">
        <div className="flex justify-between items-center  px-5 md:h-fit sm:px-10 md:px-20 w-full">
          <div>
            <h1 className="font-semibold">LOOOOGOO</h1>
          </div>
          <button class="space-y-2 md:hidden" onClick={dropDownHandler}>
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
          </button>
          <nav
            className={
              !dropDown
                ? "absolute right-2 max-w-[220px] w-full bg-white shadow-lg top-10 "
                : "hidden  md:shadow-none rounded-xl md:flex md:justify-center md:items-center md:static md:max-w-full md:bg-transparent"
            }
          >
            <div className="container mx-auto text-center py-2 md:flex md:py-0">
              <ul className="md:flex md:gap-10">
                <li className="py-3 md:py-5 md:flex md:border-b-2 md:border-b-transparent hover:border-blue-400 hover:text-blue-400">
                  <button className="">HOME</button>
                </li>
                <li className="py-3 md:py-5 md:flex md:border-b-2 md:border-b-transparent hover:border-blue-400 hover:text-blue-400">
                  <button>REQUEST DEMO</button>
                </li>
              </ul>
            </div>
          </nav>
          <div className="hidden md:flex hover:bg-[#b6b7ee] rounded-md bg-[#AEB0E1] hover:text-slate-100">
            <Link to={"/login"}>
              <button className="py-2 px-6 text-white font-normal">
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
