import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import profile from "../../images/profile.png";
import Home from "./customer_dashboard_routes/Home";
import ManageProfile from "./customer_dashboard_routes/ManageProfile";
import Wishlist from "./customer_dashboard_routes/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../redux/actions/AuthActions";
import Orders from "./customer_dashboard_routes/Orders";
const CustomerDashboard = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.customer.current_user);

  useEffect(() => {
    dispatch(userAuth());
  }, []);
  // set clicked tab active
  const [active, setActive] = useState(false);
  console.log("active is", active);
  return (
    <section className="w-full  py-10 bg-uniform_grey">
      <div className="md:hidden z-50 fixed bottom-0 bg-green text-white w-full  grid grid-cols-4 ">
        <Link to="/dashboard/customer/">
          <div
            // onMouseEnter={() => setActive(true)}
            // onMouseLeave={() => setActive(false)}
            onClick={() => setActive(!active)}
            className={
              active
                ? "flex flex-col  items-center p-2 space-y-1 bg-white text-black"
                : "flex flex-col  items-center p-2 space-y-1 bg-green"
            }
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p>Home</p>
          </div>
        </Link>
        <Link
          onMouseEnter={() => setActive(true)}
          to="/dashboard/customer/orders"
        >
          <div className="flex flex-col  items-center p-2 space-y-1">
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
            <p>Orders</p>
          </div>{" "}
        </Link>
        <Link
          onMouseEnter={() => setActive(true)}
          to="/dashboard/customer/wishlist"
        >
          <div className="flex flex-col  items-center p-2 space-y-1">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <p>Wishlist</p>
          </div>
        </Link>
        <Link
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          to="/dashboard/customer/manage_profile"
        >
          <div className="flex flex-col  items-center p-2 space-y-1">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p> profile</p>
          </div>
        </Link>
      </div>
      <div className="h-auto w-mobile md:w-container_width  grid sm:grid-cols-9 gap-7  mx-auto  ">
        <div className="w-full  bg-white shadow rounded  sm:col-span-2 hidden md:block">
          <div className="items-center  flex flex-col space-y-2 bg-green p-5">
            <img
              src={profile}
              className="w-16 h-16 rounded-full object-cover "
              alt=""
            />
            <p className="text-gray-50 font-bold"> {currentUser?.name}</p>
            <p className="text-gray-100">+254769761893</p>
          </div>
          <div className="py-5 px-2 ">
            <Link to="/dashboard/customer/">
              <li className=" hover:shadow p-2 rounded-lg list-none flex space-x-3 items-center ">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="">Home</span>
              </li>
            </Link>
            <Link to="/dashboard/customer/orders">
              <li className="hover:shadow p-2 rounded-lg list-none  flex space-x-3 items-center">
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

                <span className="">Orders</span>
              </li>
            </Link>
            <Link to="/dashboard/customer/wishlist">
              <li className="hover:shadow p-2 rounded-lg list-none flex space-x-3 items-center ">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="">Wishlist</span>
              </li>
            </Link>
            <Link to="/dashboard/customer/manage_profile">
              <li className="hover:shadow p-2 rounded-lg list-none flex space-x-3 items-center">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="">Manage profile</span>
              </li>
            </Link>
          </div>
        </div>
        <div className="w-full sm:col-span-7">
          <Routes>
            <Route path="/" element={<Home currentUser={currentUser} />} />
            <Route path="/orders/*" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/manage_profile" element={<ManageProfile />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default CustomerDashboard;
