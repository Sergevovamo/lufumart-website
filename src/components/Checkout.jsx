import React, { useState } from "react";
import Address from "./checkout_routes/Address";
import Confirmation from "./checkout_routes/Confirmation";
import Delivery from "./checkout_routes/Delivery";
import PaymentMethod from "./checkout_routes/PaymentMethod";
const Checkout = () => {
    // store the cvisited steps in the state
    const [step, setStep] = useState(1);
    // store all the data collected in the  formData state
    const [formData, setFormData] = useState({
        username: "",
        delivery_address: "",
        country: "",
        city: "",
        zip_code: "",
        phone_no: "",
        alternative_phone_no: "",
        deliver_to: "",
        payment_method: "",
    });
    // function to move to the next step
    const nextStep = () => {
        setStep(step + 1);
    };
    // function to move to the prev step

    const prevStep = () => {
        setStep(step - 1);
    };
    const getFormData = (input) => (e) => {
        // destructure value from e.target
        const { value } = e.target;
        //capture previous data in the state , spread the state and create a new object
        setFormData((prevState) => ({
            ...prevState,
            [input]: value,
        }));
    };
    console.log("The form data is", formData);
    switch (step) {
        case 1:
            return (
                <section className="w-full bg-gray-100 h-screen pt-10 ">
                    <div className="w-container_width mx-auto  bg-white rounded-lg p-5">
                        <p className="text-xl text-center py-3">
                            SHIPPING ADDRESS DETAILS
                        </p>
                        <Address
                            nextStep={nextStep}
                            getFormData={getFormData}
                            values={formData}
                        />
                    </div>
                </section>
            );
        case 2:
            return (
                <section className="w-full h-screen bg-gray-100 pt-10">
                    <div className="w-container_width mx-auto bg-white rounded-lg p-5">
                        <p className="text-xl text-center py-3">
                            CHOOSE WHERE TO DELIVERY{" "}
                        </p>
                        <Delivery
                            prevStep={prevStep}
                            nextStep={nextStep}
                            getFormData={getFormData}
                            values={formData}
                        />
                    </div>
                </section>
            );
        case 3:
            return (
                <section className="w-full h-screen bg-gray-100 pt-10">
                    <div className="w-container_width mx-auto bg-white rounded-lg p-5">
                        <p className="text-xl text-center py-3">
                            CHOOSE HOW YOU WANT TO PAY
                        </p>
                        <PaymentMethod
                            prevStep={prevStep}
                            nextStep={nextStep}
                            getFormData={getFormData}
                            values={formData}
                        />
                    </div>
                </section>
            );
        case 4:
            return (
                <section className="w-full h-screen bg-gray-100 pt-10">
                    <div className="w-container_width mx-auto bg-white rounded-lg p-5">
                        <p className="text-xl text-center py-3">
                            CONFIRM YOU SUBMITTED THE FOLLOWING
                        </p>
                        <Confirmation prevStep={prevStep} values={formData} />
                    </div>
                </section>
            );
    }
};

export default Checkout;
// muliti step form
// https://medium.com/how-to-react/create-multi-step-form-in-react-with-validation-4ac09129a3a8
// https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968#0779
