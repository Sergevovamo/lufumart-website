import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions/ProductsActions";
const TopCategories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    // getting all the categories from state
    const categories = useSelector((state) => state.Products.categories);
    const loadingStatus = useSelector((state) => state.Products.loading);
    return (
        <section className="bg-uniform_grey py-7">
            {/* <div className=" w-container_width mx-auto text-white  bg-orange p-2 flex justify-between rounded">
                <span>Top categories</span>
                <span className=" text-white underline">View more</span>
            </div> */}
            <p className="text-2xl text-center pb-7 ">TOP CATEGORIES</p>
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
                <div className="w-container_width mx-auto py-4 grid  grid-cols-2 md:grid-cols-4 gap-3 ">
                    {categories &&
                        categories.map((category) => (
                            <div
                                key={category._id}
                                className="md:flex p-2 md:p-0 md:space-x-4 space-y-3 px-2 justify-between items-center md:h-24 cursor-pointer shadow-sm bg-white rounded-lg  hover:shadow-lg"
                            >
                                <div className=" h-20 w-full   flex justify-center ">
                                    <img src={category.imageUrl} alt="" />
                                </div>
                                <div className=" w-full ">
                                    <p>{category.name}</p>
                                </div>
                                <div className="hidden md:block">
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
                            </div>
                        ))}
                </div>
            )}
        </section>
    );
};

export default TopCategories;
