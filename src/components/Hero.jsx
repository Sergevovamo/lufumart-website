import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);

const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-uniform_grey py-5">
      <div className="w-mobile md:w-container_width mx-auto sm:h-[400px]">
        <div className="grid sm:grid-cols-4">
          <div>
            {" "}
            <div className="md:block hidden p-2 bg-white">
              <h2 className="text-orange animate-bounce text-center text-xl -z-10">
                Enjoy amazing deals!!
              </h2>
              <div className="grid grid-rows-2 h-full  items-center">
                <div className="grid grid-cols-2 gap-4 ">
                  {deals.map((deal, index) => {
                    return (
                      <div key={index} className="rounded p-2 shadow">
                        <div className="h-10 flex justify-center ">
                          <img
                            src="https://res.cloudinary.com/lufumart-ecommerce/image/upload/v1654433142/dbmng2xdi2ynm77qeamy.jpg"
                            alt=""
                          />
                        </div>
                        <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">
                          Fashion baby products{" "}
                        </h2>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-black text-white rounded-lg">
                  <div className="shadow px-3 py-6 rounded-xl flex items-center ">
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
                    <div className="text-center space-y-2 ">
                      <a>BECOME A SELLER</a>
                      <button className="  bg-green text-white rounded-lg p-2">
                        <a
                          target="_blank"
                          href="https://play.google.com/store/search?q=lufumart&c=apps"
                        >
                          Get started
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3   items-center   ">
            <div className="h-full  flex justify-center   ">
              <img
                src="https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png"
                alt=""
                className="rounded-xl md:rounded-none"
              />
            </div>
          </div>
        </div>
        <div className="bg-black text-white rounded-lg sm:hidden block mt-8">
          <div className="shadow px-3 justify-center space-x-6 py-6 rounded-xl flex items-center ">
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
            <div className=" space-y-2 ">
              <h2>BECOME A SELLER</h2>
              <button className="  bg-green text-white rounded-lg p-2">
                <a
                  target="_blank"
                  href="https://play.google.com/store/search?q=lufumart&c=apps"
                >
                  Get started
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
const images = [
  {
    img: "https://demo.activeitzone.com/ecommerce/public/uploads/all/qQR6fBE9MAjTWuIzGkZeI2wTDYAlIeBKQaezchPM.jpg",
  },
  {
    img: "https://demo.activeitzone.com/ecommerce/public/uploads/all/jJjPcgUsldYlpgdxpKBKmR6gIwtXIcuYtxeloijR.jpg",
  },
  {
    img: "https://demo.activeitzone.com/ecommerce/public/uploads/all/qQR6fBE9MAjTWuIzGkZeI2wTDYAlIeBKQaezchPM.jpg",
  },
  {
    img: "https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png",
  },
  {
    img: "https://demo.activeitzone.com/ecommerce/public/uploads/all/qQR6fBE9MAjTWuIzGkZeI2wTDYAlIeBKQaezchPM.jpg",
  },
];

const deals = [1, 2, 3, 4];
