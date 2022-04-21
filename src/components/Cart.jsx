import React, { useEffect, useState } from "react";
import Test from "../../images/binarywp.jpg";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserCartItems } from "../redux/actions/ProductsActions";
const Cart = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserCartItems());
    }, []);

    const CartItems = useSelector((state) => state.Products.cart);
    console.log(CartItems);

    return (
        <section className="min-h-screen h-full bg-gray-50">
            <div className="w-container_width mx-auto py-7  grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-white shadow  rounded">
                    <div>
                        <p className="p-2  bg-gray-100 text-2xl  text-center">
                            There are 2 items in your cart
                        </p>
                    </div>
                    <div className="py-6 px-4">
                        <main
                            className="flex justify-between py-4"
                            style={{ borderBottom: "1px solid grey" }}
                        >
                            <div className="inline-flex gap-3">
                                <div className="h-20 w-20">
                                    <img
                                        src={Test}
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p>new comfortable converse shoe</p>
                                    <p className="text-xl">$ 354</p>
                                    <p>
                                        <s>$367</s>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-end space-y-7">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-black "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <button className="w-8 h-8 bg-green text-white rounded-lg ">
                                        -
                                    </button>
                                    <span className="mx-2">12</span>
                                    <button className="w-8 h-8 bg-green text-white rounded-lg ">
                                        +
                                    </button>
                                </div>
                            </div>
                        </main>
                        <main
                            className="flex justify-between py-4"
                            style={{ borderBottom: "1px solid grey" }}
                        >
                            <div className="inline-flex gap-3">
                                <div className="h-20 w-20">
                                    <img
                                        src={Test}
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p>new comfortable converse shoe</p>
                                    <p className="text-xl">$ 354</p>
                                    <p>
                                        <s>$367</s>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-end space-y-7">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-black "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <button className="w-8 h-8 bg-green text-white rounded-lg ">
                                        -
                                    </button>
                                    <span className="mx-2">12</span>
                                    <button className="w-8 h-8 bg-green text-white rounded-lg ">
                                        +
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className=" bg-white h-52 shadow-sm rounded ">
                    <div>
                        <p className="p-2  bg-gray-100 text-2xl text-center  ">
                            Cart summary
                        </p>
                    </div>

                    <div className="p-5">
                        <div className="flex justify-between">
                            <p className="text-lg">Subtotal</p>
                            <p className="text-2xl">$ 67</p>
                        </div>
                        <p>Delivery charges not included</p>
                        <div className="flex space-x-2 mt-5">
                            <button className="p-2 bg-green rounded-lg text-white ">
                                Proceed to checkout
                            </button>
                            <button className="p-2 bg-green rounded-lg text-white ">
                                Continue shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Cart;
