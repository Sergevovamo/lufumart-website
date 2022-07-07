import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getCategories,
  getProductBySubCategory,
  getSubCategories,
} from "../redux/actions/ProductsActions";
const MegaMenu = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let allCategories = useSelector((state) => state?.Products?.categories);
  let subCategories = useSelector((state) => state?.Products?.sub_categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    dispatch(getSubCategories());
  }, []);
  const handleView = (id) => {
    navigate(`/test_view/${id}`);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [Name, setName] = useState([]);
  //   console.log(isOpen);
  const handleShow = (names) => {
    // console.log(names);
    setIsOpen(true);
    setName(names);
  };
  return (
    <section className="py-10">
      <div className="w-container_width mx-auto grid grid-cols-3  shadow p-3 gap-3 ">
        <div className="relative h-[400px] overflow-auto">
          <div>
            <h2 className="text-xl bg-orange p-2 text-white">Categories</h2>
            <div>
              {allCategories.map((ctgry) => {
                const { name, _id } = ctgry;
                // console.log(ctgry);
                let items = subCategories.filter(
                  (itm) => itm?.category?._id === _id
                );

                return (
                  <>
                    <ul key={_id} className="flex flex-col space-y-2">
                      <li
                        // onMouseEnter={() => setIsOpen(true)}

                        onMouseEnter={() => handleShow(items)}
                        className="p-1.5 hover:bg-gray-100"
                      >
                        {name}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-2 relative">
          <div className="h-full bg-black flex ">
            <img
              src="https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png"
              alt=""
              className="object-contain"
            />
          </div>
          <div className="w-full h-full   absolute top-0 -left-3 ">
            <div
              onMouseLeave={() => setIsOpen(false)}
              className={
                isOpen
                  ? "bg-gray-200 p-2 text-black h-full w-1/2 space-y-2"
                  : "hidden"
              }
            >
              {Name &&
                Name.map((nm) => {
                  const { name, _id } = nm;

                  return (
                    <div key={name} className="  ">
                      <p onClick={(e) => handleView(_id)}> {name}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MegaMenu;

// const categories = [
//   { name: "Electronics" },
//   { name: "Health & beauty" },
//   { name: "Computing" },
//   { name: "Phones" },
//   { name: "Music" },
//   { name: "Home Appliances" },
//   { name: "Office" },
//   { name: "Furniture" },
//   { name: "Clothes" },
//   { name: "baby products" },
// ];
