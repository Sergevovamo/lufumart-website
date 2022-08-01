import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="py-20 ">
      <div className=" flex flex-col  space-y-6 text-center  items-center w-mobile md:w-container_width mx-auto">
        <div className="">
          <img
            src="https://res.cloudinary.com/lufumart-ecommerce/image/upload/q_auto/c_scale,w_214,h_33/v1649943020/lufumart-logo/Lufumart_Logo_owimai.png"
            alt=""
          />
        </div>
        <ul className="flex md:flex-row flex-col md:space-x-10 space-x-0 space-y-2 md:space-y-0">
          <Link className="hover:text-orange" to="/">
            <li>Home</li>
          </Link>
          <Link className="hover:text-orange" to="/">
            <li>Sell</li>
          </Link>
          <Link className="hover:text-orange" to="/">
            <li>Categories</li>
          </Link>
          <Link className="hover:text-orange" to="/">
            <li>Advertise with us</li>
          </Link>
          <Link className="hover:text-orange" to="/">
            <li>Privacy policy</li>
          </Link>
        </ul>
        <div className="flex space-x-4 text-orange ">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>
        <div>
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} Lufumart.All rights
            reserved{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
