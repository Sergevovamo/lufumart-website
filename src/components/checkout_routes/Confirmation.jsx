import React from "react";

const Confirmation = ({ values, prevStep }) => {
    // back  to payment step functionality
    const Back = (e) => {
        e.preventDefault();
        prevStep();
    };
    return (
        <>
            {/* <div className="py-5 space-y-2 ">
                <p>
                    Username: <b>{values.username}</b>{" "}
                </p>
                <p>
                    Delivery address: <b> {values.delivery_address}</b>
                </p>
                <p>
                    Country: <b>{values.country}</b>{" "}
                </p>
                <p>
                    Zip code: <b>{values.zip_code}</b>{" "}
                </p>
                <p>
                    Phone number: <b>{values.phone_no}</b>{" "}
                </p>
                {values.alternative_phone_no && (
                    <p>
                        {" "}
                        Altenative number : <b>
                            {values.alternative_phone_no}
                        </b>{" "}
                    </p>
                )}
                <p>
                    Deliver my order to : <b>{values.deliver_to}</b>{" "}
                </p>
                <p>
                    Payment method : <b>{values.payment_method}</b>{" "}
                </p>
            </div> */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-100 h-auto p-2 rounded space-y-2">
                    <p className="text-xl text-center">
                        Shipping address details
                    </p>
                    <p>
                        Username: <b>{values.username}</b>{" "}
                    </p>
                    <p>
                        Delivery address: <b> {values.delivery_address}</b>
                    </p>
                    <p>
                        Country: <b>{values.country}</b>{" "}
                    </p>
                    <p>
                        Zip code: <b>{values.zip_code}</b>{" "}
                    </p>
                    <p>
                        Phone number: <b>{values.phone_no}</b>{" "}
                    </p>
                    {values.alternative_phone_no && (
                        <p>
                            {" "}
                            Altenative number :{" "}
                            <b>{values.alternative_phone_no}</b>{" "}
                        </p>
                    )}
                </div>
                <div className="bg-gray-100 h-32 p-2 rounded">
                    <p className="text-xl text-center">Deliver item(s) to</p>
                    <p className="text-center mt-5">
                        <b>{values.deliver_to}</b>{" "}
                    </p>
                </div>
                <div className="bg-gray-100 h-32 p-2 rounded">
                    <p className="text-xl text-center">Payment method</p>
                    <p className="text-center mt-5">
                        <b>{values.payment_method}</b>{" "}
                    </p>
                </div>
            </div>

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
                <p>Back to payment</p>
            </div>
        </>
    );
};

export default Confirmation;
