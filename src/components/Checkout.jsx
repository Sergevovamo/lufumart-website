import React, { Fragment, useState, useEffect } from "react";
import front from "../../images/front_view.jpg";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getCustomerAddress } from "../redux/actions/AuthActions";
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
const Checkout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCustomerAddress());
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        shouldUnregister: true,
        shouldFocusError: true,
    });
    // getting the fileds value
    const onSubmit = (data) => {
        console.log(data);
        // if (data) {
        //     handleClose();
        //     setIsAddressAvailable(true);
        // }
    };
    // check the radio button
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };
    const [isClicked, setisClicked] = useState(false);
    const handleShow = () => {
        setisClicked(true);
    };
    const handleHide = () => {
        setisClicked(false);
    };
    // state to control open and closure of the modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const CustomerAddress = useSelector((state) => state.auth.address);
    const items = [1, 2, 3, 4, 5, 6];
    return (
        <section className="bg-gray-100 py-8 h-screen w-full">
            <div className="w-container_width mx-auto grid md:grid-cols-4 gap-2">
                <div className="col-span-3 rounded grid grid-rows-2 gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white  rounded shadow">
                            {CustomerAddress ? (
                                <Fragment>
                                    <div className=" flex justify-between p-2 mb-2 bg-orange text-white">
                                        <p>DEFAULT ADDRESS</p>
                                        <p onClick={handleOpen}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 cursor-pointer"
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
                                        </p>
                                    </div>
                                    <div className="space-y-2 p-2">
                                        <p>
                                            Username:{" "}
                                            <b>{CustomerAddress.username}</b>
                                        </p>
                                        <p>
                                            Delivery address:
                                            <b>
                                                {
                                                    CustomerAddress.deliveryAddress
                                                }
                                            </b>{" "}
                                        </p>{" "}
                                        <p>
                                            Country:{" "}
                                            <b>{CustomerAddress.country}</b>
                                        </p>{" "}
                                        <p>
                                            Zip code:{" "}
                                            <b>{CustomerAddress.zipCode}</b>
                                        </p>{" "}
                                        <p>
                                            Phone number:{" "}
                                            <b>{CustomerAddress.phoneNo}</b>
                                        </p>
                                        <p>
                                            Alternative phone number:{" "}
                                            <b>
                                                {CustomerAddress.alternativeNo}
                                            </b>
                                        </p>
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="p-2 mb-2 bg-orange text-white">
                                        <p>ADD ADDRESS</p>
                                    </div>
                                    <div className="p-2">
                                        <div
                                            onClick={handleOpen}
                                            className="h-44 border w-11/12 mx-auto  flex flex-col justify-center items-center cursor-pointer space-y-9"
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
                                    </div>
                                </Fragment>
                            )}
                        </div>
                        <div className="bg-white rounded shadow">
                            <div className=" p-2 mb-2 bg-orange text-white ">
                                <p>DELIVERY METHOD</p>
                            </div>
                            <div className="flex justify-around">
                                <div
                                    className="border p-3 flex items-center space-x-2 cursor-pointer"
                                    onClick={handleCheck}
                                >
                                    <input
                                        onClick={handleHide}
                                        type="radio"
                                        name="delivery_method"
                                        checked={isChecked ? false : true}
                                    />
                                    <p>my default address</p>
                                </div>
                                <div
                                    className="border p-3 flex items-center space-x-2 cursor-pointer"
                                    onClick={handleCheck}
                                >
                                    <input
                                        onClick={handleShow}
                                        type="radio"
                                        name="delivery_method"
                                        checked={isChecked ? true : false}
                                    />
                                    <p>pick up station</p>
                                </div>
                            </div>
                            <div
                                className={
                                    isChecked
                                        ? "block mx-auto w-11/12 mt-5"
                                        : "hidden"
                                }
                            >
                                <select
                                    defaultValue=""
                                    className="w-full p-3 bg-white border outline-none"
                                >
                                    {pickup_stations.map(
                                        (pickup_station, index) => (
                                            <Fragment key={index}>
                                                <option
                                                    value=""
                                                    disabled
                                                    hidden
                                                >
                                                    Select a pick up station
                                                </option>
                                                <option
                                                    value={pickup_station.name}
                                                >
                                                    {pickup_station.name}
                                                </option>
                                            </Fragment>
                                        )
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded">
                        <div className=" p-2 mb-2 bg-orange text-white ">
                            <p>PAYMENT METHOD</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded h-96">
                    <div className="p-2 bg-orange text-white rounded shadow">
                        YOUR ORDER
                    </div>
                    <div className="p-2 h-56  overflow-y-auto">
                        {items.map((itm) => (
                            <div
                                className="flex items-center space-x-3 py-2"
                                style={{
                                    borderBottom:
                                        "1px solid rgba(128, 128, 128, 0.418)",
                                }}
                            >
                                <div className="flex justify-between h-14">
                                    <img src={front} alt="img" />
                                </div>
                                <div>
                                    <p>Acer laptop 11th gen </p>
                                    <p className="flex justify-between my-2">
                                        <span>Qty:3</span>{" "}
                                        <span className="text-green">
                                            {" "}
                                            $ 3000
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 space-y-3">
                        <div className="flex justify-between">
                            <p>Total shipping fee :</p>
                            <p>$ 782</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Vat :</p>
                            <p>$ 4562</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Total :</p>
                            <p>$ 5362</p>
                        </div>
                    </div>
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
                                        defaultValue=""
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

export default Checkout;
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
const pickup_stations = [
    { name: "Koja,Afya Business plaza" },
    { name: "Utengano house,Eldoret opposite Moi University" },
    { name: "Moi Avenue,Bihi towers" },
    { name: "Umoja hse,Kisumu opposite EveCare" },
];
