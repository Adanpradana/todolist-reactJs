import { useState } from "react";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [color, setColor] = useState(false);

  const scrollHandler = () =>
    window.scrollY > 0 ? setColor(true) : setColor(false);

  window.addEventListener("scroll", scrollHandler);

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
          <div class="space-y-2">
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
            <div class="w-8 h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
