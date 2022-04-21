import React from "react";

const Deals = () => {
    return (
        <div className="w-full h-auto py-14 bg-gray-100">
            <h2 className="p-2 rounded  w-container_width mx-auto  mb-6 bg-orange text-white">
                Easter deals
            </h2>
            <div className="w-container_width mx-auto h-96 flex justify-between">
                <div className=" w-full grid grid-rows-2">
                    <div className="h-full w-full flex justify between p-3 space-x-3">
                        <div className="w-full h-full flex justify-around items-center bg-white rounded-xl ">
                            <img
                                className="h-28 w-28"
                                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                                alt=""
                            />
                            <span>
                                <h2 className="">product name</h2>
                                <h2 className="font-bold py-2">Ksh 2,200</h2>
                                <button className="bg-orange rounded-full text-white  p-2  ">
                                    Shop now
                                </button>
                            </span>
                        </div>
                        <div className="w-full h-full flex justify-around items-center bg-white rounded-xl ">
                            {" "}
                            <img
                                className="h-28 w-28"
                                src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
                                alt=""
                            />
                            <span>
                                <h2 className="">product name</h2>
                                <h2 className="font-bold py-2">Ksh 2,200</h2>
                                <button className="bg-orange rounded-full text-white  p-2  ">
                                    Shop now
                                </button>
                            </span>
                        </div>
                    </div>

                    <div className="h-full shadow-lg  bg-white rounded-sm w-full flex justify-around  items-center  ">
                        <img
                            className="h-full w-1/2"
                            src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
                            alt=""
                        />
                        <div className="f">
                            <p>Lorem ipsum dolor sit.</p>
                            <h2 className="font-bold py-2">Ksh 1,550</h2>
                            <button className="bg-orange rounded-full text-white  p-2  ">
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="  w-full grid grid-rows-2 ">
                    <div className="h-full shadow-lg  bg-white rounded-sm w-full flex justify-around  items-center  ">
                        <img
                            className="h-full w-1/2"
                            src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                            alt=""
                        />
                        <div className="">
                            <p>Lorem ipsum dolor sit.</p>
                            <h2 className="font-bold py-2">Ksh 1,550</h2>
                            <button className="bg-orange rounded-full text-white  p-2  ">
                                Shop now
                            </button>
                        </div>
                    </div>
                    <div className="h-full w-full ">
                        {" "}
                        <div className="h-full w-full flex justify between p-3 space-x-3">
                            <div className="w-full h-full flex justify-around items-center bg-white rounded-xl ">
                                <img
                                    className="h-28 w-28"
                                    src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
                                    alt=""
                                />
                                <span>
                                    <h2 className="">product name</h2>
                                    <h2 className="font-bold py-2">
                                        Ksh 2,200
                                    </h2>
                                    <button className="bg-orange rounded-full text-white  p-2  ">
                                        Shop now
                                    </button>
                                </span>
                            </div>
                            <div className="w-full h-full flex justify-around items-center bg-white rounded-xl ">
                                {" "}
                                <img
                                    className="h-28 w-28"
                                    src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                                    alt=""
                                />
                                <span>
                                    <h2 className="">product name</h2>
                                    <h2 className="font-bold py-2">
                                        Ksh 2,200
                                    </h2>
                                    <button className="bg-orange rounded-full text-white  p-2  ">
                                        Shop now
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
