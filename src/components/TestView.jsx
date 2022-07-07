import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductBySubCategory } from "../redux/actions/ProductsActions";
const TestView = () => {
  let dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductBySubCategory(id));
  }, []);
  const allProducts = useSelector(
    (state) => state?.Products?.products?.subCategories
  );
  const product = allProducts?.find((ele) => ele._id === id);
  console.log(product);
  return (
    <section className="py-10 bg-gray-100">
      <div className="mx-auto w-container_width">
        <h2 className="text-orange text-2xl my-5">Skin care</h2>
        <div className="grid sm:grid-cols-5 gap-3">
          {product?.products?.map((prd) => {
            const { name, price, imageUrl } = prd;
            
            return (
              <div className="bg-white p-3 space-y-3 rounded">
                <div className="h-52 flex justify-center">
                  <img src={imageUrl[0]} alt="" />
                </div>
                <div>
                  <p>{name}</p>
                </div>
                <div className="flex justify-between item-center">
                  <div>
                    <s className="text-sm">Ksh {price}</s>
                  </div>
                  <div>
                    <p className="text-xl text-green">Ksh {price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestView;
