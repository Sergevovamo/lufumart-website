import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    getProducts,
    getSingleProduct,
} from "../redux/actions/ProductsActions";

function SampleNextArrow(props) {
    const { style, onClick } = props;

    return (
        <div
            className="slick-arrow"
            style={{
                ...style,
                display: "flex",
                background: "#fff",
                color: "gray",
                border: "1px solid rgba(128, 128, 128, 0.342)",
                position: "absolute",
                right: "0px",
                top: "40%",
                cursor: "pointer",
                zIndex: "200",
                width: "40px",
                height: "40px",
                justifyContent: "center",
                borderRadius: "50%",
                alignItems: "center",
            }}
            onClick={onClick}
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
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="slick-arrow"
            style={{
                ...style,
                display: "flex",
                background: "#fff",
                color: "gray",
                border: "1px solid rgba(128, 128, 128, 0.342)",
                position: "absolute",
                left: "0px",
                top: "40%",
                cursor: "pointer",
                zIndex: "200",
                width: "40px",
                height: "40px",
                justifyContent: "center",
                borderRadius: "50%",
                alignItems: "center",
            }}
            onClick={onClick}
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
    );
}

const MenClothing = () => {
    // slick carousel functionalities
    let settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };
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
    // console.log("all products", allProducts);
    const loadingStatus = useSelector((state) => state.Products.loading);
    // console.log(loadingStatus);
    return (
        <div className="w-full bg-gray-100 py-14">
            <h2 className="w-container_width  text-white rounded mx-auto bg-orange p-2 ">
                {" "}
                Men's clothing
            </h2>

            <Slider
                {...settings}
                className=" w-container_width  mx-auto py-4 relative "
            >
                {loadingStatus ? (
                    <main className=" w-full text-orange">
                        <div>Please wait</div>
                        <div className="lds-facebook">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </main>
                ) : (
                    allProducts &&
                    allProducts.map((product) => (
                        <main key={product._id} className="  ">
                            <div
                                onClick={() => handleProductView(product._id)}
                                className=" bg-white relative card shadow-sm  rounded-lg  h-72 min-h-full max-h-full cursor-pointer mx-1"
                            >
                                <svg
                                    className="absolute right-2 top-1 rounded-sm p-0.5 h-6 w-6 bg-green  text-gray-50 svg "
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-2 top-8 rounded-sm p-0.5  h-6 w-6 bg-green  text-gray-50 svg "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <div>
                                    <div className="flex justify-center h-32  ">
                                        <img
                                            src={product.imageUrl[0]}
                                            alt={product.name}
                                        />
                                    </div>

                                    <div className="p-2">
                                        <p className="text-lg py-1 ">
                                            {product.name}
                                        </p>
                                        <p className="text-sm">
                                            {product.description}
                                        </p>
                                        <div className="flex justify-between items-center pt-3">
                                            <div>
                                                <p>
                                                    {" "}
                                                    <s>
                                                        ${" "}
                                                        {product.price.toLocaleString()}
                                                    </s>{" "}
                                                </p>
                                            </div>
                                            <div>
                                                <p className=" font-extrabold text-green text-2xl">
                                                    ${" "}
                                                    {product.salePrice.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    ))
                )}
            </Slider>
        </div>
    );
};

export default MenClothing;
