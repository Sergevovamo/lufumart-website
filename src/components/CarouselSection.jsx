import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions/ProductsActions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/carousel.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);
const CarouselSection = () => {
    const swiperRef = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    // getting all the categories from state
    const categories = useSelector((state) => state.Products.categories);
    const loadingStatus = useSelector((state) => state.Products.loading);
    return (
        <section className="bg-gray-100 py-5">
            <div className=" w-container_width mx-auto block md:grid md:grid-cols-4 md:gap-2">
                <div className="bg-white h-96 hidden relative md:block overflow-y-auto ">
                    <p className="font-semibold py-1 px-3 text-center ">
                        Categories
                    </p>
                    {loadingStatus ? (
                        <main className=" w-full text-center mt-10 ">
                            <div className="lds-spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </main>
                    ) : (
                        categories &&
                        categories.map((category) => {
                            const { name, createdAt } = category;

                            return (
                                <>
                                    <ul>
                                        <div
                                            key={createdAt}
                                            className="flex justify-between items-center py-1.5 px-3 hover:bg-gray-200 cursor-pointer "
                                        >
                                            <li className="list-none ">
                                                {name}
                                            </li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
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
                                    </ul>
                                </>
                            );
                        })
                    )}
                </div>
                <div className="col-span-3 bg-white  h-96">
                    <div className="carousel_container">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={false}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={true}
                            // onSlideChange={() => console.log("slide change")}
                            // onSwiper={(swiper) => console.log(swiper)}
                        >
                            <div
                                className="previousButton"
                                onClick={() =>
                                    swiperRef.current.swiper.slidePrev()
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                            <div
                                className="nextButton"
                                onClick={() =>
                                    swiperRef.current.swiper.slideNext()
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                            {images.map((image, index) => (
                                <SwiperSlide>
                                    <div key={index}>
                                        <img
                                            src={image.img}
                                            alt=""
                                            style={{
                                                width: "900px",
                                                height: "350px",
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselSection;

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
