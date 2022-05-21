import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    decreaseProdQty,
    getUserCartItems,
    removeProduct,
} from "../redux/actions/ProductsActions";

const Cart = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserCartItems());
    }, []);

    const CartItems = useSelector((state) => state.Products.cart.cartProducts);
    const totals = useSelector((state) => state.Products.cart.cartProductTotal);

    const Totals = totals && totals.subTotal;

    const itemQuantity = useSelector(
        (state) => state.Products.cart.cartProductQuantity
    );
    const loadingStatus = useSelector((state) => state.Products.loading);

    // increase cart product quantity
    const increaseCartProdQty = async (e, id) => {
        e.preventDefault();
        await dispatch(addToCart(id));
    };
    // increase cart product quantity

    const decreaseCartProdQty = async (e, id) => {
        e.preventDefault();

        await dispatch(decreaseProdQty(id));
    };
    // remove product from cart
    const handleRemoveProduct = async (id) => {
        await dispatch(removeProduct(id));
    };
    // Total cart items
    let totalCartItems = CartItems && CartItems.length;
    // get token
    const token = localStorage.getItem("loginToken");

    return (
        <>
            <section className=" h-full  bg-gray-50 py-16">
                {Totals === 0 || !token ? (
                    <div className="text-center space-y-8">
                        <p className=" text-xl">Your cart is empty</p>
                        {/* <Link to="/"> */}
                        <button className="p-2 bg-orange text-white rounded-sm">
                            Start shopping
                        </button>
                        {/* </Link> */}
                    </div>
                ) : (
                    <div className="w-container_width mx-auto  flex flex-col  md:grid md:grid-cols-3 gap-4 ">
                        <div className="col-span-2 bg-white shadow  rounded pb-5">
                            <div>
                                {totalCartItems === 1 ? (
                                    <p className="p-2  bg-gray-100 text-2xl  text-center">
                                        There is 1 item in your cart
                                    </p>
                                ) : (
                                    <p className="p-2  bg-gray-100 text-2xl  text-center">
                                        There are {totalCartItems || 0} items in
                                        your cart
                                    </p>
                                )}
                            </div>
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
                                CartItems &&
                                CartItems.map((item) => {
                                    const {
                                        imageUrl,
                                        description,
                                        name,
                                        _id,
                                        price,
                                        salePrice,
                                    } = item;
                                    const items =
                                        itemQuantity &&
                                        itemQuantity.find(
                                            (item) => item.productId === _id
                                        );
                                    const { quantity, vat } = items;

                                    return (
                                        <div key={_id} className="  px-4">
                                            <main
                                                className="flex b justify-between py-4"
                                                style={{
                                                    borderBottom:
                                                        "1px solid rgba(128, 128, 128, 0.418)",
                                                }}
                                            >
                                                <div className="inline-flex gap-4 items-center">
                                                    <div className="h-20 w-20 flex justify-center items-center">
                                                        <img
                                                            src={imageUrl[0]}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <p>{name}</p>
                                                        <p className="text-xl">
                                                            ${" "}
                                                            {price.toLocaleString()}
                                                        </p>
                                                        <p>
                                                            <s>
                                                                ${" "}
                                                                {salePrice.toLocaleString()}
                                                            </s>
                                                        </p>
                                                        <p>Vat: $ {vat}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center items-end space-y-7">
                                                    <div
                                                        onClick={() =>
                                                            handleRemoveProduct(
                                                                _id
                                                            )
                                                        }
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6 text-black cursor-pointer "
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
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() =>
                                                                decreaseCartProdQty(
                                                                    event,
                                                                    _id
                                                                )
                                                            }
                                                            disabled={
                                                                quantity <= 1
                                                                    ? true
                                                                    : false
                                                            }
                                                            className={
                                                                quantity <= 1
                                                                    ? "bg-gray-200 w-8 h-8 cursor-not-allowed  rounded-lg"
                                                                    : "w-8 h-8 bg-green text-white  rounded-lg "
                                                            }
                                                        >
                                                            -
                                                        </button>

                                                        <span className="mx-2">
                                                            {quantity}
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                increaseCartProdQty(
                                                                    event,
                                                                    _id
                                                                )
                                                            }
                                                            className="w-8 h-8 bg-green text-white rounded-lg "
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </main>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        <div className=" bg-white h-full md:h-56 shadow-sm rounded ">
                            <div>
                                <p className="p-2  bg-gray-100 text-2xl text-center  ">
                                    Cart summary
                                </p>
                            </div>

                            <div className=" p-3  space-y-2">
                                <div className="flex justify-between">
                                    <p className="text-lg">Subtotal</p>
                                    <p className="text-xl ">
                                        ${" "}
                                        {(totals &&
                                            totals.subTotal.toLocaleString()) ||
                                            0}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-lg">Vat</p>
                                    <p className="text-xl ">
                                        ${" "}
                                        {(totals &&
                                            totals.vat.toLocaleString()) ||
                                            0}
                                    </p>
                                </div>

                                <p className="text-orange">
                                    Delivery charges not included
                                </p>
                                <div className="flex space-x-2 ">
                                    <Link to="/checkout">
                                        <button className=" p-2 bg-green rounded-lg text-white ">
                                            Checkout
                                        </button>
                                    </Link>
                                    <Link to="/">
                                        <button className="p-2 bg-green rounded-lg text-white ">
                                            Continue shopping
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Cart;
