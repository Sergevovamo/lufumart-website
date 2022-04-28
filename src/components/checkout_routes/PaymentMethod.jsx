import React from "react";

const PaymentMethod = ({ prevStep, nextStep, getFormData, values }) => {
    // continue to confirmation step functionality
    const Next = (e) => {
        e.preventDefault();
        nextStep();
    };
    // back  to delivery step functionality
    const Back = (e) => {
        e.preventDefault();
        prevStep();
    };
    return (
        <>
            <div className=" grid grid-cols-2 gap-3">
                <div className=" bg-gray-100 rounded p-2">
                    select payment method
                </div>
                <div className="bg-gray-100 rounded p-2">Your order</div>
            </div>

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
                    <p>Back to delivery</p>
                </div>
                <div onClick={Next}>
                    <button className="p-2 bg-orange text-white rounded-sm">
                        Continue to confirmation
                    </button>
                </div>
            </div>
        </>
    );
};

export default PaymentMethod;
