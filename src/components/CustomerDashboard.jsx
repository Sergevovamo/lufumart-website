import React, { useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import profile from "../../images/profile.png";
import Home from "./customer_dashboard_routes/Home";
import ManageProfile from "./customer_dashboard_routes/ManageProfile";
import PurchaseHistory from "./customer_dashboard_routes/PurchaseHistory";
import Wishlist from "./customer_dashboard_routes/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../redux/actions/AuthActions";
const CustomerDashboard = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.customer.current_user);

  useEffect(() => {
    dispatch(userAuth());
  }, []);
  return (
    <section className="w-full min-h-screen h-auto py-10 bg-gray-50 ">
      <div className="h-auto w-11/12  mx-auto dashboard">
        <div className="w-full h-96 bg-white shadow rounded-lg">
          <div className="items-center rounded-lg flex flex-col space-y-2 bg-green p-5">
            <img
              src={profile}
              className="w-16 h-16 rounded-full object-cover "
              alt=""
            />
            <p className="text-gray-50 font-bold">{currentUser?.name}</p>
            <p className="text-gray-100">+254769761893</p>
          </div>
          <div className="py-5 px-2">
            <Link to="/dashboard/customer/">
              <li className=" hover:bg-gray-200 p-2 rounded-lg list-none flex space-x-3 items-center ">
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
                <span>Home</span>
              </li>
            </Link>
            <Link to="/dashboard/customer/purchase_history">
              <li className="hover:bg-gray-200 p-2 rounded-lg list-none  flex space-x-3 items-center">
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

                <span>Purchase history</span>
              </li>
            </Link>
            <Link to="/dashboard/customer/wishlist">
              <li className="hover:bg-gray-200 p-2 rounded-lg list-none flex space-x-3 items-center ">
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
                <span>Wishlist</span>
              </li>
            </Link>
            <Link to="/dashboard/customer/manage_profile">
              <li className="hover:bg-gray-200 p-2 rounded-lg list-none flex space-x-3 items-center">
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
                <span>Manage profile</span>
              </li>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home currentUser={currentUser} />} />
            <Route path="/purchase_history" element={<PurchaseHistory />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/manage_profile" element={<ManageProfile />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default CustomerDashboard;
