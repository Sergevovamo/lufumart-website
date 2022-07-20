import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getSubCategories,
  getUserCartItems,
} from "../redux/actions/ProductsActions";
import { logout } from "../redux/actions/AuthActions";
// import SidebarItem from "./SidebarItem";

const Navbar = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  //   category and navbar state
  const [isFixed, setisFixed] = useState(false);
  const [menu, setMenu] = useState(false);
  const [subCategoryMenu, setSubCategoryMenu] = useState(false);
  const [heading, setHeading] = useState("");
  const [filtered_sub_category, set_filtered_sub_category] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  // getting all the categories from state
  const categories = useSelector((state) => state?.Products?.categories);
  const categoriesLoading = useSelector((state) => state?.Products?.loading);
  // getting all the sub-categories from state
  const subCategories = useSelector((state) => state?.Products?.sub_categories);
  // auth state
  // check if user is authenticated
  const [dashboard, setDashboard] = useState("");
  const [signUp, setSignUp] = useState("");

  const auth = useSelector((state) => state.auth.isAuthenticated);
  // console.log("Auth", auth);

  // dispatch categories and sub-categories
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    dispatch(getSubCategories());
  }, []);

  // show sub categories
  const handleShow = (sub) => {
    set_filtered_sub_category(sub);
    setMenu(true);
    setSubCategoryMenu(true);
  };
  // const handleHide = () => {
  //   setMenu(false);

  // };

  // cart totals
  useEffect(() => {
    dispatch(getUserCartItems());
  }, []);
  const [cartTotal, setCartTotal] = useState(null);
  const CartItems = useSelector((state) => state.Products.cart.cartProducts);
  let totalCartItems = CartItems && CartItems.length;
  // console.log(totalCartItems);
  useEffect(() => {
    if (auth) {
      setCartTotal(totalCartItems);
    } else {
      setCartTotal(0);
    }
  }, [auth, totalCartItems]);

  // function to set navbar fixed on scroll
  const fixedNav = () => {
    window.addEventListener("scroll", () => {
      let height = window.scrollY;
      if (height > 100) {
        setisFixed(true);
      } else setisFixed(false);
    });
  };
  fixedNav();
  // show the categories and sub-categories
  const showMenus = () => {
    setMenu(true);
  };

  const hideMenus = () => {
    setSubCategoryMenu(false);
    setMenu(false);
  };
  const showSubMenu = () => {
    setSubCategoryMenu(true);
    setMenu(true);
  };
  const hideSubmenu = () => {
    setMenu(false);
    setSubCategoryMenu(false);
  };
  const handleView = (id) => {
    setSubCategoryMenu(false);
    setMenu(false);
    navigate(`/sub-category/${id}`);
  };
  // handle authentication
  useEffect(() => {
    if (auth) {
      setDashboard("Dashboard");
      setSignUp("Logout");
    } else {
      setDashboard("Register");
      setSignUp("Login");
    }
  }, [auth]);

  const handleDashboard = () => {
    if (dashboard === "Register") {
      navigate("/register/customer");
    } else {
      navigate("/dashboard/customer");
    }
  };

  const handleSignUp = () => {
    if (signUp === "Logout") {
      dispatch(logout());
      // navigate("/login/customer");
    } else {
      navigate("/login/customer");
    }
  };

  return (
    <section
      className={
        isFixed
          ? "  bg-white h-[85px]  z-50  fixed left-0 right-0 top-0  border-b-[1px] border-gray-200"
          : " bg-white h-[85px] z-50 "
      }
      // className={
      //   isFixed
      //     ? "  bg-white h-[85px]  fixed left-0 right-0 top-0  border-b-[1px] border-gray-200"
      //     : " bg-white h-[85px]  fixed left-0 right-0 top-0  border-b-[1px] border-gray-200"
      // }
    >
      <div className=" relative w-mobile h-full sm:w-container_width mx-auto flex justify-between items-center space-x-6">
        <div className="text-orange" onClick={() => setMenu(!menu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 sm:hidden block "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // d="M4 6h16M4 12h16M4 18h16"
              d={menu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
        <Link to="/">
          <div>
            <img
              src="https://res.cloudinary.com/lufumart-ecommerce/image/upload/q_auto/c_scale,w_187,h_29/v1649943020/lufumart-logo/Lufumart_Logo_owimai.png"
              alt=""
            />
          </div>
        </Link>
        <div
          onMouseEnter={showMenus}
          onMouseLeave={hideMenus}
          className="text-orange relative"
        >
          <h2 className="hidden sm:block ">CATEGORIES</h2>
          <div className="absolute left-0 w-full right-0 h-8"></div>
        </div>
        <div className="flex-auto hidden sm:block">
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
        <div className=" flex items-center space-x-2 ">
          <div>
            <button
              onClick={handleSignUp}
              className="bg-gray-100  p-2 rounded hidden sm:block "
            >
              {signUp}
            </button>
          </div>
          <div>
            <button
              onClick={handleDashboard}
              className="bg-gray-100  p-2 rounded hidden sm:block "
            >
              {dashboard}
            </button>
          </div>
          {/* <div>
            <svg
              onClick={() => setOpenSearch(!openSearch)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-orange sm:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div> */}
          <Link to="/login/customer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-orange sm:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Link>
          <Link to="/cart">
            <div className="text-orange  relative ml-2 ">
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
                {/* <span>{cartTotal || 0}</span> */}
                <span>{cartTotal || 0}</span>
              </div>
            </div>
          </Link>
        </div>

        <div
          className={
            menu
              ? "sm:shadow  md:h-[400px] h-screen overflow-auto  w-[250px] bg-white text-black z-50  absolute md:left-[180px] translate-x-[-42px] md:translate-x-0  top-[85px] transition"
              : "md:hidden translate-x-[-300px] h-screen overflow-auto w-[250px] absolute  bg-white top-[85px] transition z-50"
          }
          // className="h-[400px] w-[250px] bg-white text-black z-50 overflow-y-auto absolute left-[180px] top-[85px]"
        >
          <h2 className="p-2 text-xl text-orange border-b-2 border-dashed sm:hidden block">
            Categories
          </h2>
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
              {categories?.map((category) => {
                let { name, _id } = category;
                const filteredSubCategories = subCategories?.filter(
                  (filteredSubCategory) =>
                    filteredSubCategory?.category?._id === _id
                );
                // console.log("filteredSubCategories are", filteredSubCategories);
                return (
                  <Fragment>
                    <div
                      onMouseEnter={() => handleShow(filteredSubCategories)}
                      // onMouseLeave={handleHide}
                      onClick={() =>
                        heading !== name ? setHeading(name) : setHeading("")
                      }
                      key={_id}
                      className="  flex justify-between items-center px-3 py-1.5 hover:bg-gray-100"
                    >
                      <li className="font-bold md:font-normal">{name} </li>
                      {/* <li>{heading === name ? heading : ""}</li> */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          heading === name
                            ? "rotate-[-90deg]  transition md:rotate-[0deg] h-5 w-5 text-orange"
                            : "rotate-[90deg]   transition md:rotate-[0deg] h-5 w-5 text-orange"
                        }
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
                    <div
                      className={heading === name ? "md:hidden " : " hidden"}
                    >
                      {filteredSubCategories.map((item) => {
                        const { name, _id } = item;
                        return (
                          <div
                            onClick={() => handleView(_id)}
                            className="text-gray-600 px-4 my-1.5"
                          >
                            <p> {name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </Fragment>
                );
              })}
            </ul>
          )}
        </div>
        <div
          onMouseEnter={showSubMenu}
          onMouseLeave={hideSubmenu}
          className={
            subCategoryMenu
              ? "sm:bg-gray-200  absolute hidden sm:block sm:top-[85px] top-[130px] sm:left-[430px]   z-50 w-[250px] sm:h-[400px] h-screen p-2 "
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
                  className="my-2 hover:text-orange cursor-pointer"
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
