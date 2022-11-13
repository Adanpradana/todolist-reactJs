import { useState } from "react";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [color, setColor] = useState(false);

  const scrollHandler = () =>
    window.scrollY > 0 ? setColor(true) : setColor(false);
  window.addEventListener("scroll", scrollHandler);

  const dropDownHandler = () => setDropDown((dropDown) => !dropDown);
  return (
    <header
      className={
        color
          ? "navbar-fixed fixed top-0 w-full bg-opacity-70 z-10"
          : "absolute top-0 w-full bg-transparent z-50"
      }
    >
      <div className="m-auto">
        <div className="flex justify-between relative items-center px-5 w-full">
          <div>
            <h1 className="font-semibold">LOOOOGOO</h1>
          </div>
          <button class="space-y-2 " onClick={dropDownHandler}>
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
          </button>
          <nav
            className={
              dropDown
                ? "hidden"
                : "absolute right-2  max-w-[220px] w-full bg-white shadow-lg top-10 rounded-xl "
            }
          >
            <div className="container m-auto text-center py-2">
              <ul className="py-2 hover:bg-red-200">
                <li>
                  <button className="">HOME</button>
                </li>
              </ul>
              <ul className="py-2 hover:bg-red-200">
                <li>
                  <button>REQUEST DEMO</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
