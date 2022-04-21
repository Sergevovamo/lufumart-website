import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/AuthActions";
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // setting navbar fixed on scroll
    const [fixed, setFixed] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", fixedNav);

        return () => {
            window.removeEventListener("scroll", fixedNav);
        };
    }, []);

    const fixedNav = () => {
        let heightY = window.scrollY;
        if (heightY > 200) {
            setFixed(false);
        } else {
            setFixed(true);
        }
    };
    // display login,logout &register,dashboard buttons conditionally in respect with the token availability

    const [logState, setLogState] = useState("");
    useEffect(() => {
        log();
        console.log("The state is", logState);
    }, [logState]);

    const log = () => {
        const token = localStorage.getItem("loginToken");
        token ? setLogState("Logout") : setLogState("Login");
    };
    // toggling between login and logout
    const handleLogState = () => {
        logState === "Logout"
            ? dispatch(logout())
            : navigate("/login/customer");
    };
    return (
        <nav className={fixed ? "navbar" : "Fixed"}>
            <main style={{ borderBottom: "1px solid gray" }}>
                <div className="flex justify-between items-center  h-full w-container_width mx-auto ">
                    <div className="flex items-center ">
                        {/* <div >
                            <div> English</div>
                        </div> */}
                        <span>
                            <form>
                                <select className="bg-white border-0 outline-0">
                                    <option
                                        value="english"
                                        className="bg-white "
                                    >
                                        English
                                    </option>
                                    <option
                                        value="French"
                                        className="bg-white "
                                    >
                                        French
                                    </option>
                                </select>
                            </form>
                        </span>
                    </div>
                    <div className="flex items-center ">
                        <span
                            className="p-2 pr-5 "
                            style={{ borderRight: "1px solid gray" }}
                        >
                            Call us on: +233 123 456 789
                        </span>

                        <span
                            className="p-2 hover:bg-green hover:text-white "
                            style={{ borderRight: "1px solid gray" }}
                        >
                            <button onClick={handleLogState}>{logState}</button>
                            <ToastContainer />
                        </span>
                        <span
                            className="p-2 hover:bg-green hover:text-white"
                            style={{ borderRight: "1px solid gray" }}
                        >
                            <button>Register</button>
                        </span>
                    </div>
                </div>
            </main>
            <main style={{ borderBottom: "1px solid gray" }}>
                <div className="flex justify-between items-center py-5 h-full w-container_width mx-auto">
                    <div className="flex justify-between items-center space-x-4">
                        <span className="">
                            <Link to="/">
                                <img
                                    src="https://res.cloudinary.com/lufumart-ecommerce/image/upload/q_auto/c_scale,w_187,h_29/v1649943020/lufumart-logo/Lufumart_Logo_owimai.png"
                                    alt="logo"
                                    className=""
                                />
                            </Link>
                        </span>
                    </div>
                    <div className="w-2/4 ">
                        <form className="w-full flex">
                            <input
                                type="text"
                                placeholder="Search products here.."
                                className=" w-11/12  border p-2 rounded-tl-lg rounded-bl-lg"
                            />
                            <input
                                type="submit"
                                className="w-1/5 p-2 border bg-green text-white font-bold rounded-tr-lg rounded-br-lg"
                                value="Search"
                            />
                        </form>
                    </div>
                    <div className="flex space-x-7">
                        <span className="">
                            <button className="relative">
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
                                <p className="absolute left-6 -top-3 text-white  rounded-full w-5 h-5 flex justify-center items-center bg-orange">
                                    2
                                </p>
                            </button>
                        </span>
                        <Link to="/cart">
                            <span>
                                <button className="relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <p className="absolute left-6 -top-3 text-white rounded-full w-5 h-5 flex justify-center items-center bg-orange">
                                        2
                                    </p>
                                </button>
                            </span>
                        </Link>
                    </div>
                </div>
            </main>
            <main>
                <div className="flex justify-around items-center  h-full w-4/5  mx-auto">
                    <ul className="flex ">
                        <li className="px-4 hover:bg-green hover:text-white rounded py-2 mx-1 ">
                            Home
                        </li>
                        <li className="px-4 hover:bg-green hover:text-white rounded py-2 mx-1  ">
                            All brands
                        </li>
                        <li className="px-4 hover:bg-green hover:text-white rounded py-2 mx-1  ">
                            Flash sales
                        </li>
                        <li className="px-4 hover:bg-green hover:text-white rounded py-2 mx-1  ">
                            All categories
                        </li>
                        <li className="px-4 hover:bg-green hover:text-white rounded py-2 mx-1  ">
                            sports & entertainment
                        </li>
                        <li className="px-4 hover:bg-green hover:text-white rounded py-2 mx-1  ">
                            New products
                        </li>
                    </ul>
                </div>
            </main>
        </nav>
    );
};

export default Navbar;
