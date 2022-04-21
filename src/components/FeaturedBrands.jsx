import React from "react";
import binary from "../../images/binarywp.jpg";
import { Link } from "react-router-dom";
const FeaturedBrands = () => {
    return (
        <section className="w-full h-auto  bg-slate-600 py-8">
            {/* <p className="w-container_width mx-auto bg-orange text-white mb-5 p-2 rounded  ">
                Featured brands
            </p> */}
            <div className=" w-container_width mx-auto text-white  bg-orange mb-5 p-2 flex justify-between rounded">
                <span>Featured brands</span>
                <span className=" text-white underline">View more</span>
            </div>
            {/* <div className="w-container_width mx-auto grid grid-cols-6 gap-9"> */}
            <div className="w-container_width mx-auto flex justify-between ">
                <Link to="/">
                    <div
                        style={{
                            // width: "150px",
                            width: "100%",

                            height: "106px",
                            backgroundImage:
                                "url(data:image/jpeg;base64,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)",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        }}
                        className="flex justify-center items-center text-xl  text-white rounded-xl p-2 bg-no-repeat bg-cover bg-center bg-blend-multiply "
                    >
                        <p className="brands text-4xl">Nike Air</p>
                    </div>
                </Link>
                <Link to="/">
                    <div
                        style={{
                            width: "192px",
                            height: "106px",
                            backgroundImage:
                                "url(data:image/jpeg;base64,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)",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        }}
                        className="flex justify-center items-center text-xl  text-white rounded-xl p-2 bg-no-repeat bg-cover bg-center bg-blend-multiply "
                    >
                        <p className="brands text-4xl">Monster</p>
                    </div>
                </Link>
                <Link to="/">
                    <div
                        style={{
                            width: "192px",
                            height: "106px",
                            backgroundImage:
                                "url(https://res.cloudinary.com/lufumart-ecommerce/image/upload/v1645835911/d8adpfliuzbzbqbjl6ki.jpg)",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        }}
                        className="flex justify-center items-center text-xl  text-white rounded-xl p-2 bg-no-repeat bg-cover bg-center bg-blend-multiply "
                    >
                        <p className="brands text-4xl">Ramptons</p>
                    </div>
                </Link>
                <Link to="/">
                    <div
                        style={{
                            width: "192px",
                            height: "106px",
                            backgroundImage:
                                "url(https://res.cloudinary.com/lufumart-ecommerce/image/upload/v1645867034/xrmecmhtgustcvdx0u1r.jpg)",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        }}
                        className="flex justify-center items-center text-xl  text-white rounded-xl p-2 bg-no-repeat bg-cover bg-center bg-blend-multiply "
                    >
                        <p className="brands text-4xl">Samsung</p>
                    </div>
                </Link>
                <Link to="/">
                    <div
                        style={{
                            width: "192px",
                            height: "106px",
                            backgroundImage:
                                "url(data:image/png;base64,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)",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        }}
                        className="flex justify-center items-center text-xl  text-white rounded-xl p-2 bg-no-repeat bg-cover bg-center bg-blend-multiply "
                    >
                        <p className="brands text-4xl">Mercedes</p>
                    </div>
                </Link>
                <Link to="/">
                    <div
                        style={{
                            width: "192px",
                            height: "106px",
                            backgroundImage:
                                "url(data:image/png;base64,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)",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                        }}
                        className="flex justify-center items-center text-xl  text-white rounded-xl p-2 bg-no-repeat bg-cover bg-center bg-blend-multiply "
                    >
                        <p className="brands text-4xl">Mac book </p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedBrands;