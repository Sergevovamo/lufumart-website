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
    // <section className="bg-uniform_grey py-10 h-[450px] hidden md:block ">
    //   <div className="w-mobile md:w-container_width h-full  mx-auto grid sm:grid-cols-4 gap-2 ">
    //     <div className="bg-white p-3 flex flex-col h-full justify-around items-center ">
    //       <h2 className=" animate-bounce text-center text-orange text-lg mb-3">
    //         Enjoy amazing deals!!
    //       </h2>
    //       <div className="shadow p-2 rounded-xl  text-white">
    //         {/* <marquee behavior="" direction="top"> */}
    //         <div className="space-y-4">
    //           <div className="  space-x-2 flex items-center justify-between">
    //             <div className="h-[100px] w-[100px] flex">
    //               <img
    //                 src="https://res.cloudinary.com/lufumart-ecommerce/image/upload/v1652469503/yyuvsyutrswvmxp8eufi.jpg"
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <h2 className="text-lg">Iphone 12 pro</h2>
    //               <div className="flex justify-between items-center">
    //                 <s className="text-sm"> $ 700</s>
    //                 <p className="text-lg text-green">$ 650</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         {/* </marquee> */}
    //       </div>
    //       <div className="shadow px-2 py-4 rounded-xl flex items-center">
    //         <div>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-14 w-14 text-orange"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //             />
    //           </svg>
    //         </div>
    //         <div>
    //           <h2>BECOME A SELLER</h2>
    //           <p className=" text-center text-green  cursor-pointer">
    //             Register now
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className=" sm:col-span-3   -z-10 text-white relative  ">
    //       <div className="hero">
    //         <div className="carousel_container">
    //           <Swiper
    //             ref={swiperRef}
    //             spaceBetween={10}
    //             slidesPerView={1}
    //             navigation={false}
    // loop={true}
    // autoplay={{
    //   delay: 3000,
    //   disableOnInteraction: false,
    // }}
    // pagination={true}
    //             // onSlideChange={() => console.log("slide change")}
    //             // onSwiper={(swiper) => console.log(swiper)}
    //           >
    //             <div
    //               className="previousButton "
    //               onClick={() => swiperRef.current.swiper.slidePrev()}
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-6 w-6"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M15 19l-7-7 7-7"
    //                 />
    //               </svg>
    //             </div>
    //             <div
    //               className="nextButton "
    //               onClick={() => swiperRef.current.swiper.slideNext()}
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-6 w-6"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M9 5l7 7-7 7"
    //                 />
    //               </svg>
    //             </div>
    //             {images.map((image, index) => (
    //               <SwiperSlide>
    //                 <div key={index}>
    //                   <img
    //                     src={image.img}
    //                     alt=""
    //                     style={{
    //                       width: "900px",
    //                       height: "350px",
    //                     }}
    //                   />
    //                 </div>
    //               </SwiperSlide>
    //             ))}
    //           </Swiper>
    //         </div>
    //       </div>
    //       {/* <div className="flex justify-center h-full w-full">
    //         <img
    //           src="https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png"
    //           alt=""
    //           className="object-cover"
    //         />
    //       </div> */}
    //     </div>
    //   </div>
    // </section>

    <div className="bg-uniform_grey py-10">
      <div className="w-mobile md:w-container_width h-[400px] mx-auto grid bg-white rounded md:grid-cols-4 gap-3">
        <div className=" p-2">
          <h2 className="text-orange animate-bounce text-center text-xl -z-10">
            Enjoy amazing deals!!
          </h2>
          <div className="grid grid-rows-2 h-full  items-center">
            <div className="grid grid-cols-2 gap-4 ">
              {deals.map((deal, index) => {
                return (
                  <div key={index} className="shadow rounded-lg p-2">
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
            <div>
              <div className="shadow px-3 py-6 rounded-xl flex items-center">
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
                <div className="text-center space-y-2">
                  <h2>BECOME A SELLER</h2>
                  <button className="  bg-green text-white rounded-lg p-2 ">
                    Register now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 md:block hidden ">
          <Swiper
            // install Swiper modules
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() => console.log("slide change")}
            className=" h-full "
          >
            <div>
              <div onClick={() => swiperRef.current.swiper.slidePrev()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10  p-2 bg-white border hover:bg-gray-200  rounded-full cursor-pointer absolute top-[43%] z-50 left-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div onClick={() => swiperRef.current.swiper.slideNext()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 p-2 bg-white border hover:bg-gray-200  rounded-full cursor-pointer absolute top-[43%] z-50 right-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index} className="h-full  flex">
                  <img src={image.img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
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
