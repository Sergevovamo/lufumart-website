import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCartItems, makeOrder } from "../redux/actions/ProductsActions";
import MapComponent from "./MapComponent";
const Checkout = () => {
  const dispatch = useDispatch();
  const orderedItems = useSelector(
    (state) => state?.Products?.cart?.cartDetail?.[0]?.items
  );
  const totalAmount = useSelector(
    (state) => state?.Products?.cart?.cartDetail?.[0]
  );
  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      dispatch(getUserCartItems());
    }
    return () => (subscribed = false);
  }, []);

  const handlePay = () => {
    dispatch(makeOrder(data));
  };

  const total = orderedItems?.length;
  // open google maps
  const [open, setOpen] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  console.log("Actual address is", deliveryAddress);
  const data = {
    deliveryAddress,
    paymentMethod: "Mpesa",
  };
  return (
    <section className="py-14 bg-uniform_grey">
      <div className="w-mobile md:w-container_width  grid md:grid-cols-5 gap-4 mx-auto">
        <div className="space-y-5 md:md:col-span-3">
          <div>
            <h2 className="text-lg my-2">Delivery Address</h2>
            <div
              onClick={() => setOpen(true)}
              className="cursor-pointer  flex justify-between items-center rounded-lg bg-white p-2 space-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 p-1.5 bg-orange text-white rounded-full"
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
              <p className="flex-auto">
                {deliveryAddress || "Search your delivery location "}
              </p>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-lg my-2">Payment Method</h2>
            <div className="flex justify-between items-center rounded-lg bg-white p-2 space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 p-1.5 bg-orange text-white rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="flex-auto">Cash on delivery</p>
              <form action="">
                <input type="radio" />
              </form>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-lg my-2">My Order</h2>
          {/* <div
            className={
              total <= 2
                ? "grid sm:grid-cols-1 gap-3  pb-5"
                : "grid sm:grid-cols-2 gap-3 h-[300px] overflow-y-auto pb-5"
            }
          >
            {orderedItems?.map((orderedItem) => {
              const { name, price, quantity, imageUrl, _id } = orderedItem;
              return (
                <div
                  key={_id}
                  className={
                    total <= 2
                      ? "flex items-center space-x-3  bg-white p-3 rounded-lg h-[110px]"
                      : "flex items-center space-x-3  bg-white p-3 rounded-lg"
                  }
                >
                  <div className="h-[100px] flex">
                    <img src={imageUrl?.[0]} alt={name} />
                  </div>
                  <div className="space-y-5 ">
                    <p>{name}</p>
                    <div className="flex justify-between">
                      <p>
                        Qty: <span>{quantity}</span>{" "}
                      </p>
                      <p className="text-green"> $ {price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}

          <div className="grid grid-cols-2 gap-2">
            {orderedItems?.map((orderedItem) => {
              const { name, price, quantity, imageUrl, _id } = orderedItem;
              return (
                <div key={_id} className="bg-white p-2 rounded">
                  <div className="h-[100px] w-full flex justify-center">
                    <img src={imageUrl[0]} alt={name} />
                  </div>
                  <p className="my-2">{name}</p>
                  <div className="flex justify-between">
                    <p>
                      Qty: <span>{quantity}</span>{" "}
                    </p>
                    <p className="text-green"> $ {price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="space-y-8">
            <div className="flex justify-between items-center mt-4 font-bold ">
              <h2>Total Amount</h2>
              <h2>USD {totalAmount?.total}</h2>
            </div>
            <div>
              <button
                onClick={handlePay}
                className="p-2  bg-green text-white w-full rounded-lg "
              >
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <MapComponent
          setOpen={setOpen}
          setDeliveryAddress={setDeliveryAddress}
        />
      ) : null}
    </section>
  );
};

export default Checkout;
const loop = [1, 2];
