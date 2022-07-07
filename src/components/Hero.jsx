import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./css/carousel.css";
// import Swiper core and required modules
// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// install Swiper modules
// SwiperCore.use([Navigation, Autoplay, Pagination]);
const Hero = () => {
  //   const swiperRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section className="bg-uniform_grey py-10 h-[450px]">
      <div className="w-mobile md:w-container_width h-full  mx-auto grid sm:grid-cols-4 gap-2">
        <div className="bg-white p-3 flex flex-col h-full justify-around items-center ">
          <h2 className=" animate-bounce text-center text-orange text-lg mb-3">
            Enjoy amazing deals!!
          </h2>
          <div className="shadow p-2 rounded-xl">
            {/* <marquee behavior="" direction="top"> */}
            <div className="space-y-4">
              <div className="  space-x-2 flex items-center justify-between">
                <div className="h-[100px] w-[100px] flex">
                  <img
                    src="https://res.cloudinary.com/lufumart-ecommerce/image/upload/v1652469503/yyuvsyutrswvmxp8eufi.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-lg">Iphone 12 pro</h2>
                  <div className="flex justify-between items-center">
                    <s className="text-sm"> $ 700</s>
                    <p className="text-lg text-green">$ 650</p>
                  </div>
                </div>
              </div>
            </div>
            {/* </marquee> */}
          </div>
          <div className="shadow px-2 py-4 rounded-xl flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2>BECOME A SELLER</h2>
              <p className=" text-center text-green  cursor-pointer">
                Register now
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 bg-black  ">
          <div className="flex justify-center h-full w-full">
            <img
              src="https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// const images = [
//   {
//     img: "https://demo.activeitzone.com/ecommerce/public/uploads/all/qQR6fBE9MAjTWuIzGkZeI2wTDYAlIeBKQaezchPM.jpg",
//   },
//   {
//     img: "https://demo.activeitzone.com/ecommerce/public/uploads/all/jJjPcgUsldYlpgdxpKBKmR6gIwtXIcuYtxeloijR.jpg",
//   },
//   {
//     img: "https://demo.activeitzone.com/ecommerce/public/uploads/all/qQR6fBE9MAjTWuIzGkZeI2wTDYAlIeBKQaezchPM.jpg",
//   },
//   {
//     img: "https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png",
//   },
//   {
//     img: "https://demo.activeitzone.com/ecommerce/public/uploads/all/qQR6fBE9MAjTWuIzGkZeI2wTDYAlIeBKQaezchPM.jpg",
//   },
// ];
