import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    height: 550,
    bgcolor: "background.paper",
    boxShadow: 24,
    outline: 0,
    p: 2,
};

const Address = ({ nextStep, getFormData, values }) => {
    const navigate = useNavigate();
    // continue to delivery step functionality
    const Next = (e) => {
        e.preventDefault();
        nextStep();
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        shouldUnregister: true,
        shouldFocusError: true,
    });
    // toggle form and the actual details
    const [isAddressAvailable, setIsAddressAvailable] = useState(false);
    // getting the fileds value
    const onSubmit = (data) => {
        console.log(data);
        if (data) {
            handleClose();
            setIsAddressAvailable(true);
        }
    };
    console.log("ADDRESS", isAddressAvailable);
    // state to control open and closure of the modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section className=" pt-8 ">
            <div className="w-96 mx-auto">
                {isAddressAvailable ? (
                    <div className="w-full  border relative p-4   ">
                        <div
                            onClick={handleOpen}
                            className="absolute  right-0 top-1 text-orange cursor-pointer"
                        >
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
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold">Username:</span>
                                {values.username}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Delivery address:
                                </span>
                                {values.delivery_address}
                            </p>
                            <p>
                                <span className="font-semibold">Country:</span>
                                {values.country}
                            </p>
                            {/* <p>
                                <span className="font-semibold">City:</span>
                                {values.city}
                            </p> */}
                            <p>
                                <span className="font-semibold">Zip code:</span>
                                {values.zip_code}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Phone number:
                                </span>
                                {values.phone_no}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Alternative phone number:
                                </span>
                                {values.alternative_phone_no}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={handleOpen}
                        className=" h-52 relative border w-full  flex flex-col justify-center items-center cursor-pointer space-y-9"
                    >
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
                                d="M12 4v16m8-8H4"
                            />
                        </svg>

                        <p>Add address</p>
                    </div>
                )}
            </div>
            {/* next and previous buttons */}
            <div className="flex justify-between my-5">
                <div
                    onClick={() => navigate("/cart")}
                    className="flex items-center text-orange p-2 cursor-pointer"
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
                    <p>Back to cart</p>
                </div>
                <div onClick={Next}>
                    <button className="p-2 bg-orange text-white rounded-sm">
                        Continue to delivery
                    </button>
                </div>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div
                            className="p-2 flex justify-between items-center"
                            style={{
                                borderBottom:
                                    "1px solid rgba(128, 128, 128, 0.418)",
                            }}
                        >
                            <div>SHIPPING ADDRESS INFORMATION</div>
                            <div
                                onClick={handleClose}
                                className="bg-gray-500  rounded-full w-10 h-10 flex justify-center items-center font-semibold text-gray-200 cursor-pointer hover:bg-gray-400"
                            >
                                X
                            </div>
                        </div>
                        <div
                            className="w-full  overflow-y-auto p-3"
                            style={{ height: "450px" }}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col space-y-2 mb-5">
                                    <label className="text-sm">Username</label>
                                    <input
                                        type="text"
                                        className="border p-2 rounded outline-0"
                                        {...register("username", {
                                            required: true,
                                        })}
                                        value={values.username}
                                        onChange={getFormData("username")}
                                    />
                                    {errors.username && (
                                        <p className="text-red">
                                            Username is required{" "}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2 mb-5">
                                    <label className="text-sm">
                                        Delivery address
                                    </label>
                                    <input
                                        type="text"
                                        className="border p-2 rounded outline-0"
                                        placeholder="Apt/suite,Street name,Floor No etc.."
                                        {...register("address", {
                                            required: true,
                                        })}
                                        value={values.delivery_address}
                                        onChange={getFormData(
                                            "delivery_address"
                                        )}
                                    />
                                    {errors.address && (
                                        <p className="text-red">
                                            {" "}
                                            Delivery address is required{" "}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col space-y-2 mb-5">
                                    <label className="text-sm">Country</label>
                                    <select
                                        className="border bg-white p-2 rounded outline-0"
                                        {...register("country", {
                                            required: true,
                                        })}
                                        defaultValue={values.country}
                                        onChange={getFormData("country")}
                                    >
                                        {countries.map((country, index) => (
                                            <Fragment key={index}>
                                                <option
                                                    value=""
                                                    disabled
                                                    hidden
                                                >
                                                    Select country
                                                </option>
                                                <option value={country.name}>
                                                    {country.name}
                                                </option>
                                            </Fragment>
                                        ))}
                                    </select>
                                    {errors.country && (
                                        <p className="text-red">
                                            {" "}
                                            Country is required{" "}
                                        </p>
                                    )}
                                </div>
                                {/* <div className="flex flex-col space-y-2 mb-5">
                                    <label className="text-sm">
                                        City/state
                                    </label>
                                    <select
                                        className="border bg-white p-2 rounded outline-0"
                                        {...register("city", {
                                            required: true,
                                        })}
                                    >
                                        {cities.map((city, index) => (
                                            <option
                                                key={index}
                                                value={city.name}
                                            >
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.city && (
                                        <p className="text-red">
                                            {" "}
                                            City/state is required{" "}
                                        </p>
                                    )}
                                </div> */}
                                <div className="flex flex-col space-y-2 mb-5">
                                    <label className="text-sm">Zip code</label>
                                    <input
                                        type="number"
                                        className="border p-2 rounded outline-0"
                                        placeholder="Enter zip code"
                                        {...register("zipCode", {
                                            required: true,
                                        })}
                                        value={values.zip_code}
                                        onChange={getFormData("zip_code")}
                                    />
                                    {errors.zipCode && (
                                        <p className="text-red">
                                            {" "}
                                            Zip code is required{" "}
                                        </p>
                                    )}
                                </div>

                                <div className="flex space-x-1 justify-between">
                                    <div className="flex flex-col space-y-2 mb-5 w-full">
                                        <label className="text-sm">
                                            Phone number
                                        </label>
                                        <input
                                            type="number "
                                            className="border p-2 rounded outline-0 "
                                            placeholder="Enter your phone number "
                                            {...register("phone", {
                                                required: true,
                                            })}
                                            value={values.phone_no}
                                            onChange={getFormData("phone_no")}
                                        />
                                        {errors.phone && (
                                            <p className="text-red">
                                                {" "}
                                                Phone number is required{" "}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-col space-y-2 mb-5 w-full">
                                        <label className="text-sm">
                                            Alternative phone number
                                        </label>
                                        <input
                                            type="number"
                                            className="border p-2 rounded outline-0 w-full"
                                            placeholder="Optional"
                                            {...register("alternative_phone", {
                                                required: false,
                                            })}
                                            value={values.alternative_phone_no}
                                            onChange={getFormData(
                                                "alternative_phone_no"
                                            )}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    value="SAVE"
                                    className="border p-2 rounded outline-0 w-full  bg-green text-white "
                                />
                            </form>
                        </div>
                    </Box>
                </Modal>
            </div>
        </section>
    );
};

export default Address;
const countries = [
    { name: "Kenya" },
    { name: "Tanzania" },
    { name: "Uganda" },
    { name: "Rwanda" },
    { name: "Congo" },
    { name: "Burundi" },
];
const cities = [
    { name: "Nairobi" },
    { name: "Daresalam" },
    { name: "Kampala" },
    { name: "Kisumu" },
    { name: "Cote D'vore" },
    { name: "Meru" },
];
