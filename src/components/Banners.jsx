import React from "react";

const Banners = () => {
    return (
        <section className="bg-gray-100">
            <div className="w-container_width mx-auto">
                {/* <marquee behavior="scroll" direction="right"> */}
                <div className="  flex py-6 ">
                    <div className="p-2 w-full h-36 bg-white mx-1">
                        FIRST BANNER
                    </div>
                    <div className="p-2 w-full h-36 bg-white mx-1">
                        SECOND BANNER
                    </div>
                    <div className="p-2 w-full h-36 bg-white mx-1">
                        THIRD BANNER
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banners;
