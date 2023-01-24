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
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-2xl font-semibold">
            Our Awesome Technology
          </h1>
          <div>
            <Slider {...settings}>
              {images.map((image) => {
                return (
                  <div className="container p-5">
                    <div className="flex justify-center self-center bg-slate-200 shadow-md p-2 rounded-2xl w-auto ">
                      <img
                        src={image}
                        alt=""
                        className="h-[15%] aspect-[4/1] object-contain mix-blend-multiply"
                      />
                    </div>
                  </div>
                );
              })}
              <div className=""></div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
