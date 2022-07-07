import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getSubCategories,
  getUserCartItems,
} from "../redux/actions/ProductsActions";
import { logout } from "../redux/actions/AuthActions";

const Nav_bar = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    dispatch(getSubCategories());
  }, []);
  // check if user is authenticated
  const auth = useSelector((state) => state.auth.isAuthenticated);
  // getting all the categories from state
  const categories = useSelector((state) => state?.Products?.categories);
  const categoriesLoading = useSelector((state) => state?.Products?.loading);
  // getting all the sub-categories from state
  const subCategories = useSelector((state) => state?.Products?.sub_categories);
  const [filtered_sub_category, set_filtered_sub_category] = useState([]);
  const handleShow = (sub) => {
    setIsOpen(true);
    set_filtered_sub_category(sub);
  };
  // function to  navigate to respective sub-categories clicked by the user
  const handleView = (id) => {
    navigate(`/sub-category/${id}`);
  };
  // get the total cart items
  useEffect(() => {
    dispatch(getUserCartItems());
  }, []);
  const CartItems = useSelector((state) => state.Products.cart.cartProducts);
  let totalCartItems = CartItems && CartItems.length;
  console.log(totalCartItems);
  // display login,logout &register,dashboard buttons conditionally in respect with the token availability

  //   toggle login& logout
  const [signUp, setSignUp] = useState("");
  const [dashboard, setDashboard] = useState("");
  const [cartTotal, setCartTotal] = useState(null);
  useEffect(() => {
    if (auth) {
      setSignUp("Logout");
    } else {
      setSignUp("Login");
    }
  }, [auth]);

  useEffect(() => {
    if (auth) {
      setDashboard("Dashboard");
    } else {
      setDashboard("Register");
    }
  }, [auth]);
  useEffect(() => {
    if (auth) {
      setCartTotal(totalCartItems);
    } else {
      setCartTotal(0);
    }
  }, [auth, totalCartItems]);

  const handleSignUp = () => {
    if (signUp === "Logout") {
      dispatch(logout());
    } else {
      navigate("/login/customer");
    }
  };
  const handleDashboard = () => {
    if (dashboard === "Register") {
      navigate("/register/customer");
    } else {
      navigate("/dashboard/customer");
    }
  };

  return (
    <section className="bg-white h-[85px] ">
      <div className="w-mobile   mx-auto grid grid-cols-12 items-center  h-full gap-5">
        <div className="col-span-4 flex   justify-around  ">
          <div className="">
            <Link to="/">
              <div>
                <img
                  src="https://res.cloudinary.com/lufumart-ecommerce/image/upload/q_auto/c_scale,w_187,h_29/v1649943020/lufumart-logo/Lufumart_Logo_owimai.png"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="flex items-center space-x-1 cursor-pointer relative "
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-orange hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div className="text-orange">
              <span>CATEGORIES</span>
            </div>
            <div className="absolute right-0 -left-6 w-[190px]  z-50  top-5 h-[40px]"></div>
            <div
              className={
                isOpen
                  ? "bg-white shadow absolute right-0 -left-6 top-[55px] z-50 w-[250px]  h-[400px] overflow-y-auto "
                  : "hidden"
              }
            >
              {categoriesLoading ? (
                <main className=" w-full text-center mt-10 ">
                  <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </main>
              ) : (
                <ul>
                  {categories.map((category) => {
                    const { name, _id } = category;
                    const filteredSubCategories = subCategories?.filter(
                      (filteredSubCategory) =>
                        filteredSubCategory?.category?._id === _id
                    );
                    return (
                      <div
                        onMouseEnter={() => handleShow(filteredSubCategories)}
                        key={_id}
                        className="flex justify-between items-center p-2 hover:bg-gray-100"
                      >
                        <li>{name}</li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-orange"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className={
                isOpen
                  ? "absolute bg-gray-200  shadow z-50 h-[400px]  w-[350px]  top-[55px] left-[226px] overflow-y-auto p-3"
                  : "hidden"
              }
            >
              <ul>
                {filtered_sub_category?.map((item) => {
                  const { name, _id } = item;
                  return (
                    <li
                      onClick={() => handleView(_id)}
                      key={_id}
                      className="my-2 hover:text-orange"
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-6 ">
          <form>
            <div className="relative">
              <input
                type="text"
                placeholder="search products categories,brands etc here...."
                className="border p-2.5 w-full rounded-full outline-green"
              />

              <input
                type="submit"
                className="border p-2.5 absolute right-0 rounded-tr-full rounded-br-full bg-green text-white cursor-pointer   "
                value="search"
              />
            </div>
          </form>
        </div>
        <div className="col-span-2   ">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={handleSignUp}
                className="bg-gray-100  p-2 rounded  "
              >
                {signUp}
              </button>
              <button
                onClick={handleDashboard}
                className="bg-gray-100  p-2 rounded "
              >
                {dashboard}
              </button>
            </div>
            <Link to="/cart">
              <div className="text-orange  relative ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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

                <div className="absolute -top-3 left-4 bg-orange text-white w-5 h-5 rounded-full flex items-center justify-center p-2">
                  <span>{cartTotal}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav_bar;
