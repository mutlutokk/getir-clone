import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    TR: "+90",
    US: "+1",
    GB: "+44",
    FR: "+33",
    DE: "+49",
    IT: "+39",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h1 className="mt-12 text-4xl text-white font-semibold">
            Dakikalar içinde <br /> kapınızda
          </h1>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex gap-x-2">
            <div>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
            </div>
            <label className="flex-1 relative block">
              <input
                required
                className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button
            className="h-12 flex items-center
           justify-center w-full mt-4 rounded-md text-sm font-semibold bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow "
          >
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
}
