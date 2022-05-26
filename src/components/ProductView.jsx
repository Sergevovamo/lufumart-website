import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addToCart, getSingleProduct } from "../redux/actions/ProductsActions";
import Footer from "./Footer";
const ProductView = () => {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, []);

    const productData = useSelector((state) => state.Products.product[0]);
    console.log("The product is", productData);
    const loadingStatus = useSelector((state) => state.Products.loading);
    // console.log("The loading status  is", loadingStatus);

    // handle add to cart
    const token = localStorage.getItem("loginToken");

    const handleAddToCart = async () => {
        // token
        //     ? (await dispatch(addToCart(id)))
        //     : navigate("/login/customer");

        if (token) {
            await dispatch(addToCart(id));
            toast.success("Succesfully added to cart", {
                position: toast.POSITION.TOP_CENTER,
            });
        } else {
            toast.error("Failed..Kindly login first ", {
                position: toast.POSITION.TOP_CENTER,
            });
            navigate("/login/customer");
        }
    };
    return (
        <>
            <section className=" h-full bg-gray-100 py-16 ">
                {loadingStatus ? (
                    <main className=" w-full text-orange text-center mt-7">
                        <div>Please wait</div>
                        <div className="lds-facebook">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </main>
                ) : (
                    <div className="  w-mobile md:w-container_width mx-auto rounded-lg shadow  bg-white h-auto p-3 ">
                        <div className="grid md:grid-cols-3 gap-14 items-center ">
                            <div className="">
                                <div className="h-80 w-full bg-white flex justify-center ">
                                    <img src={productData.imageUrl[0]} alt="" />
                                </div>
                                <div className="my-4 flex justify-center space-x-3   h-20   ">
                                    {productData &&
                                        productData.imageUrl.map((prdImg) => {
                                            return (
                                                <div className="bg-white  flex jusify-center   rounded-lg ">
                                                    <img src={prdImg} alt="" />
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                            <div className=" md:col-span-2  flex flex-col space-y-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-lg text-orange ">
                                        {productData.name}
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-green"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </div>

                                <p className="text-2xl font-bold">
                                    $ {productData.salePrice.toLocaleString()}
                                </p>
                                <p className="text-sm">
                                    {" "}
                                    <s>
                                        $ {productData.price.toLocaleString()}
                                    </s>
                                </p>
                                <p>
                                    <b>Availability:</b>{" "}
                                    {productData.availability}
                                </p>
                                <p>
                                    <b>Condition:</b> {productData.condition}
                                </p>
                                <p>
                                    <b>Items left:</b> {productData.quantity}
                                </p>
                                <p className="text-orange ">Offers for you</p>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>

                                <button
                                    onClick={handleAddToCart}
                                    className="bg-green p-2 rounded-xl w-1/2 text-white text-lg"
                                >
                                    Add to cart
                                </button>
                                <ToastContainer />
                            </div>
                        </div>
                        <div className=" w-full mt-3 space-y-3">
                            <p className="text-xl font-bold ">Description</p>
                            <p>{productData.description}</p>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default ProductView;

const products = [1, 2];
