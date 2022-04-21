import React, { useEffect, useState } from "react";
import favicon from "../favicon.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { customerLogin, getCustomer } from "../redux/actions/AuthActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const CustomerLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(
        (state) => state.auth.customer.current_user
    );
    currentUser && console.log(currentUser);

    useEffect(() => {
        dispatch(getCustomer());
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

    const onSubmit = async (data) => {
        const { email, password } = data;
        await dispatch(customerLogin(data));
        navigate("/");
    };
    return (
        <>
            <div className="items-center flex justify-center  min-h-screen h-full w-full bg-gray-100  ">
                <section className="rounded  bg-white w-11/12 md:w-1/3">
                    <h2 className=" rounded-tr rounded-tl  p-5 font-bold  bg-green text-center text-white">
                        <img
                            src={favicon}
                            alt="favicon"
                            className=" mx-auto mb-4 h-12 w-12 "
                        />
                        LOGIN TO YOUR LUFUMART ACCOUNT
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="  p-4 flex flex-col space-y-4  "
                    >
                        <input
                            type="text"
                            placeholder="Email"
                            className="border  focus:outline-0 p-2  w-full"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red"> Email is required </p>
                        )}

                        <input
                            type="password"
                            placeholder="Password"
                            className="border  focus:outline-0 p-2  w-full"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <p className="text-red"> Password is required </p>
                        )}

                        <button
                            type="submit "
                            className="border focus:outline-0 p-2 bg-green text-white rounded w-full  font-bold"
                        >
                            LOGIN
                        </button>
                        <ToastContainer />
                        <div>
                            Don't have an account ?
                            <Link to="/register/customer">
                                <span className="text-orange">
                                    {" "}
                                    Create account
                                </span>
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default CustomerLogin;