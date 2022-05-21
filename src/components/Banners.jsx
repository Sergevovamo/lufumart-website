import React from "react";

const Banners = () => {
    return (
        <section className="bg-uniform_grey">
            <div className="w-container_width mx-auto ">
                <div className="   grid gap-3 md:flex py-6 md:space-x-4 ">
                    <div className="p-2 w-full h-36 flex justify-center bg-black text-white rounded ">
                        <p>AD</p>
                    </div>
                    <div className="p-2 w-full h-36 flex justify-center bg-black text-white rounded ">
                        <p>AD</p>
                    </div>
                    <div className="p-2 w-full h-36 flex justify-center bg-black text-white rounded ">
                        <p>AD</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banners;
