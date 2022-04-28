import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    getProducts,
    getSingleProduct,
} from "../redux/actions/ProductsActions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Swiper core and required modules
import SwiperCore, { Navigation, A11y } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, A11y]);
const FlashSale = () => {
    const swiperRef = React.useRef(null);
    // getting the products from the state
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    // getting a single product from the state
    const handleProductView = async (id) => {
        await dispatch(getSingleProduct(id));
        Navigate(`/product_view/${id}`);
    };

    const allProducts = useSelector((state) => state.Products.products);
    const loadingStatus = useSelector((state) => state.Products.loading);

    return (
        <section className=" bg-gray-100">
            <div className="w-container_width mx-auto relative py-5 ">
                <p className="p-2 mb-5 rounded bg-orange text-white">
                    Flash sale
                </p>
                {loadingStatus ? (
                    <main className=" bg-full text-center mt-5 ">
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
                    <div className="slides_container">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={10}
                            slidesPerView={2}
                            navigation={false}
                            // onSlideChange={() => console.log("slide change")}
                            // onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 6,
                                },
                            }}
                        >
                            {allProducts &&
                                allProducts.map((product) => {
                                    let text = product.description;

                                    const truncateDescription = (str, num) => {
                                        if (str.length > num) {
                                            let subStr = str.substring(0, num);
                                            return subStr + ".....";
                                        } else {
                                            return str;
                                        }
                                    };
                                    return (
                                        <SwiperSlide
                                            key={product._id}
                                            onClick={() =>
                                                handleProductView(product._id)
                                            }
                                        >
                                            <main className="space-y-1 card">
                                                <div className="flex justify-center h-32 bg-white">
                                                    <img
                                                        src={
                                                            product.imageUrl[0]
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="text-lg">
                                                    {product.name}
                                                </p>
                                                <p className="text-sm">
                                                    {truncateDescription(
                                                        text,
                                                        40
                                                    )}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <s className="text-sm">
                                                            ${" "}
                                                            {product.price.toLocaleString()}
                                                        </s>
                                                    </div>
                                                    <div>
                                                        <p className=" text-2xl text-green">
                                                            ${" "}
                                                            {product.salePrice.toLocaleString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </main>
                                        </SwiperSlide>
                                    );
                                })}
                            {loadingStatus ? (
                                ""
                            ) : (
                                <>
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
                                </>
                            )}
                        </Swiper>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FlashSale;
