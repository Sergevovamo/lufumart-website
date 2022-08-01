import React, { useEffect, useState } from "react";

import favicon from "../favicon.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { customerLogin } from "../redux/actions/AuthActions";
import { Link, useNavigate, useLocation } from "react-router-dom";
const CustomerLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.from?.pathname || "/";
  console.log("path", path);
  const auth = useSelector((state) => state.auth.isAuthenticated);

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
    dispatch(customerLogin(data));
  };

  useEffect(() => {
    if (auth) {
      navigate(path);
    }
  }, [auth]);
  return (
    <div className="items-center flex justify-center  py-10 w-full bg-uniform_grey  ">
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
          {errors.email && <p className="text-red"> Email is required </p>}

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

          <div>
            Don't have an account ?
            <Link to="/register/customer">
              <span className="text-orange"> Create account</span>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CustomerLogin;
