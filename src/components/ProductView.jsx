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
    // console.log("The product is", productData);
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
                    <div className="w-container_width mx-auto rounded-lg shadow  bg-white h-auto grid grid-cols-3 gap-14 p-3 items-center">
                        <div className="">
                            <div className="h-72 bg-white flex justify-center mb-5">
                                <img
                                    src={productData.imageUrl[0]}
                                    alt={productData.name}
                                />
                            </div>
                            <div className="h-20 my-1 bg-gray-100 p-2 flex justify-between space-x-2  rounded-lg ">
                                <div className="w-16 flex justify-center bg-white border ">
                                    <img
                                        src={productData.imageUrl[1]}
                                        alt={productData.name}
                                    />
                                </div>
                                <div className="w-16 flex justify-center bg-white border ">
                                    <img
                                        src={productData.imageUrl[2]}
                                        alt={productData.name}
                                    />
                                </div>

                                <div className="w-16 flex justify-center bg-white border ">
                                    <img
                                        src={productData.imageUrl[3]}
                                        alt={productData.name}
                                    />
                                </div>

                                <div className="w-16 flex justify-center bg-white border ">
                                    <img
                                        src={productData.imageUrl[4]}
                                        alt={productData.name}
                                    />
                                </div>
                                <div className="w-16 flex justify-center bg-white border ">
                                    <img
                                        src={productData.imageUrl[5]}
                                        alt={productData.name}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" col-span-2  flex flex-col space-y-2">
                            <div className="flex justify-between items-center">
                                <p className="text-2xl ">
                                    {productData.description}
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green"
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
                                <s>$ {productData.price.toLocaleString()}</s>
                            </p>
                            <p>
                                <b>Availability:</b> {productData.availability}
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
                )}
            </section>
            <Footer />
        </>
    );
};

export default ProductView;
