import React from "react";

const Footer = () => {
  return (
    <section className="bg-black text-white py-6">
      <div className="w-container_width mx-auto grid sm:grid-cols-3 gap-14">
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/lufumart-ecommerce/image/upload/q_auto/c_scale,w_214,h_33/v1649943020/lufumart-logo/Lufumart_Logo_owimai.png"
              alt="logo"
            />
          </div>
          <p className="py-4 text-gray-200">
            Welcome to the lufumart.com website operated within DRC Congo &
            Kenya. We respect your privacy and want to protect your personal
            information. To learn more, please read the Privacy Policy.
          </p>
          <div className="flex text-green space-x-3">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
        <div>
          <p className="text-2xl pb-4">Quick Links</p>
          <div className="text-gray-200">
            <div className="grid grid-cols-2 ">
              <div className="space-y-2">
                <li className="list-none underline">Home</li>
                <li className="list-none underline">Privacy policy</li>
                <li className="list-none underline">Other services</li>
                <li className="list-none underline">Trending</li>
              </div>
              <div className="space-y-2">
                <li className="list-none underline text-orange text-lg">
                  Become a seller
                </li>
                <li className="list-none underline">Advertise with lufumart</li>
                <li className="list-none underline">All brands</li>
                <li className="list-none underline">All categories</li>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl pb-4">Contact us</p>
          <div className="text-gray-200 space-y-2">
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Lufu Road , South Congo</p>
            </div>
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p>+233 123 456 789</p>
            </div>
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                />
              </svg>
              <p>contact@lufumart.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
