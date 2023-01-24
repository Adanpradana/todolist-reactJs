import images from "../../data/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Technology() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  };
  return (
    <section className=" w-full bg-slate-300  p-5 lg:px-20 xl:px-0">
      <div className="  w-full py-5">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-center text-2xl font-semibold">
            Our Awesome Technology
          </h1>
          <div className="  flex justify-end overflow-hidden relative w-full mt-10">
            <div className="w-[200%] flex animate-animate gap-10 px-5">
              {images.map((image) => {
                return (
                  <div className="flex self-center w-64 max-h-46 rounded-lg bg-white  shadow-lg">
                    <img src={image} alt="" className="p-5" />
                  </div>
                );
              })}
            </div>
            <div className="w-[200%] flex animate-animate gap-10 px-5">
              {images.map((image) => {
                return (
                  <div className="flex self-center w-64 max-h-46 rounded-lg bg-white shadow-lg">
                    <img src={image} alt="" className="p-5" />
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
