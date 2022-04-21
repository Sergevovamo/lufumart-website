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
    // console.log("loading is ", loadingStatus);
    // console.log("THe state is ", categories);
    return (
        <section className="bg-gray-100 py-7">
            <div className=" w-container_width mx-auto text-white  bg-orange p-2 flex justify-between rounded">
                <span>Top categories</span>
                <span className=" text-white underline">View more</span>
            </div>
            <div className="w-container_width mx-auto py-4 grid grid-cols-4 gap-3 ">
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
                    categories &&
                    categories.map((category) => (
                        <div
                            key={category._id}
                            className="flex space-x-4 px-2 justify-between items-center h-24 cursor-pointer shadow-sm bg-white rounded-lg"
                        >
                            <div className=" h-20 w-full  items-center flex ">
                                <img
                                    src={category.imageUrl}
                                    alt=""
                                    className="max-h-full max-w-full "
                                />
                            </div>
                            <div className=" w-full ">
                                <p>{category.name}</p>
                            </div>
                            <div className="  ">
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
                    ))
                )}
            </div>
        </section>
    );
};

export default TopCategories;
