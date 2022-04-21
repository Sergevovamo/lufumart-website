import React, { useEffect } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    getProducts,
    getSingleProduct,
} from "../redux/actions/ProductsActions";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 768, itemsToShow: 5 },
    { width: 1270, itemsToShow: 5, itemsToScroll: 5 },
];
function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? "<" : ">";
    return (
        <button onClick={onClick} disabled={isEdge}>
            {pointer}
        </button>
    );
}

const Elastic = () => {
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
        <section className="bg-gray-100 py-7">
            <h2 className="w-container_width  text-white rounded mx-auto bg-orange p-2 ">
                {" "}
                Featured products
            </h2>
            <div className="w-container_width mx-auto py-5">
                <Carousel
                    breakPoints={breakPoints}
                    itemsToShow={5}
                    showEmptySlots={true}
                    renderArrow={myArrow}
                >
                    {loadingStatus ? (
                        <main className=" w-full text-orange text-center">
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
                            // <Carousel
                            //     breakPoints={breakPoints}
                            //     itemsToShow={5}
                            //     showEmptySlots={true}
                            //     renderArrow={myArrow}
                            // >
                            <main key={product._id} className=" ">
                                <div
                                    onClick={() =>
                                        handleProductView(product._id)
                                    }
                                    className=" bg-white relative card shadow  rounded-lg  h-72 min-h-full   max-h-full  cursor-pointer "
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
                                    <div className=" w-52">
                                        <div className="flex justify-center h-32 ">
                                            <img
                                                src={product.imageUrl[0]}
                                                stroke="currentColor"
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
                </Carousel>
            </div>
        </section>
    );
};

export default Elastic;
