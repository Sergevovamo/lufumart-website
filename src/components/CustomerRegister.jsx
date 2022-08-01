import React, { useEffect } from "react";
import favicon from "../favicon.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { customerRegister } from "../redux/actions/AuthActions";
// import toast from "react-hot-toast";

const CustomerRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state?.auth?.errorMsg);
  const auth = useSelector((state) => state.auth.isAuthenticated);

  // useEffect(() => {
  //   if (!error) {
  //     navigate("/login/customer");
  //   }
  // }, [error]);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    shouldUnregister: true,
    shouldFocusError: true,
  });
  // getting the fileds value

  const onSubmit = (data) => {
    if (data) {
      dispatch(customerRegister(data));
      console.log(data);
    }
  };
  // ensuring the user is authenticated
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);
  return (
    <div className=" items-center flex justify-center   w-full bg-uniform_grey py-10  ">
      <section className="rounded  bg-white w-11/12 md:w-1/3">
        <h2 className=" rounded-tr rounded-tl  p-5 font-bold  bg-green text-center text-white">
          <img
            src={favicon}
            alt="favicon"
            className=" mx-auto mb-4 h-12 w-12 "
          />
          CREATE YOUR LUFUMART ACCOUNT
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  p-4 flex flex-col space-y-4  "
        >
          <input
            type="text"
            placeholder="Name"
            className="border  focus:outline-0 p-2 w-full "
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red"> Name is required </p>}
          <input
            type="text"
            placeholder="Email"
            className="border  focus:outline-0 p-2  w-full"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red"> Email is required </p>}
          <div className="flex space-x-3">
            <div>
              <input
                type="password"
                placeholder="Password"
                className="border  focus:outline-0 p-2  w-full"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && (
                <p className="text-red"> Password is required </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder=" Confirm Password"
                className="border  focus:outline-0 p-2  w-full"
                {...register("password_confirmation", {
                  required: true,
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const password = getValues("password");
                      return password === value || "Passwords do not match!";
                    },
                  },
                })}
              />
              {errors.password_confirmation && (
                <p className="text-red">Passwords do not match!</p>
              )}
            </div>
          </div>
          <input
            type="text"
            placeholder=" Phone Number"
            className="border  focus:outline-0 p-2  w-full"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <p className="text-red"> Phone Number is required </p>
          )}
          <select
            className="border  focus:outline-0 p-2  w-full bg-white"
            placeholder="Gender"
            {...register("gender", { required: true })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p className="text-red"> Gender is required </p>}

          <button
            type="submit "
            className="border focus:outline-0 p-2 bg-green text-white rounded w-full  font-bold"
          >
            REGISTER
          </button>

          <div>
            I already have an account.
            <Link to="/login/customer">
              <span className="text-orange"> Login</span>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CustomerRegister;

// kelvinmati @gmail.com
// kelvinmatitest
