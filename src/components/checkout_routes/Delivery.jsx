import React, { useState, Fragment } from "react";
const Delivery = ({ prevStep, nextStep, getFormData, values }) => {
    // continue to payment method step functionality
    const Next = (e) => {
        e.preventDefault();
        nextStep();
    };
    // back  to address step functionality
    const Back = (e) => {
        e.preventDefault();
        prevStep();
    };

    // hide and show pick up station depending in the checked btn
    const [isChecked, setIsChecked] = useState(false);
    const handleShow = () => {
        setIsChecked(true);
    };
    const handleHide = () => {
        setIsChecked(false);
    };
    return (
        <section className="p-5 ">
            <form className="flex justify-around">
                <div className="w-full">
                    <p>choose delivery type</p>
                </div>
                <div className="space-y-3 w-full">
                    <div className="flex space-x-3 ">
                        <div className=" w-full  p-2 bg-gray-200  flex items-center space-x-2">
                            <input
                                onClick={handleHide}
                                type="radio"
                                name="deliver_to"
                                value="my address"
                                onChange={getFormData("deliver_to")}
                            />
                            <span>My address</span>
                        </div>
                        <div className="w-full p-2 bg-gray-200 flex items-center space-x-2 ">
                            {" "}
                            <input
                                onClick={handleShow}
                                type="radio"
                                name="deliver_to"
                            />
                            <span>pick Up station</span>
                        </div>
                    </div>
                    <div className={isChecked ? "block" : "hidden"}>
                        <select
                            defaultValue={values.deliver_to}
                            className="w-full p-2 bg-gray-200 outline-none"
                            onChange={getFormData("deliver_to")}
                        >
                            {pickup_stations.map((pickup_station, index) => (
                                <Fragment key={index}>
                                    <option value="" disabled hidden>
                                        Select a pick up station
                                    </option>
                                    <option value={pickup_station.name}>
                                        {pickup_station.name}
                                    </option>
                                </Fragment>
                            ))}
                        </select>
                    </div>
                    <div className="text-right">
                        <p className="text-lg text-orange">
                            Shipping fee : $ 117
                        </p>
                    </div>
                </div>
            </form>
            {/* next and previous buttons */}
            <div className="flex justify-between mt-16">
                <div
                    onClick={Back}
                    className="flex text-orange p-2 cursor-pointer items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                        />
                    </svg>
                    <p>Back to address</p>
                </div>
                <div onClick={Next}>
                    <button className="p-2 bg-orange text-white rounded-sm">
                        Continue to payment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
const pickup_stations = [
    { name: "Koja,Afya Business plaza" },
    { name: "Utengano house,Eldoret opposite Moi University" },
    { name: "Moi Avenue,Bihi towers" },
    { name: "Umoja hse,Kisumu opposite EveCare" },
];
