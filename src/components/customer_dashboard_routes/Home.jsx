import React from "react";

const Home = ({ currentUser }) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 h-28 w-full l">
        <div className="shadow rounded-lg flex flex-col justify-center bg-white items-center p-3">
          <p className="font-bold">Items in your cart</p>
          <p className="font-bold bg-orange text-white p-2 rounded-lg h-10 w-10  text-center mt-3 ">
            {currentUser?.cart?.length || 0}
          </p>
        </div>
        <div className="shadow rounded-lg flex flex-col justify-center bg-white items-center p-3">
          <p className="font-bold">Items in your wishlist</p>
          <p className="font-bold bg-orange text-white p-2 rounded-lg h-10 w-10  text-center mt-3 ">
            11
          </p>
        </div>
        <div className="shadow rounded-lg flex flex-col justify-center bg-white items-center p-3">
          <p className="font-bold">Total ordered products</p>
          <p className="font-bold bg-orange text-white p-2 rounded-lg h-10 w-10  text-center mt-3 ">
            16
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
