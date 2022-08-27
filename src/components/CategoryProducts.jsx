import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getMoreProductsByCategory,
  getProductsByCategory,
} from "../redux/actions/ProductsActions";
import { useParams, useNavigate } from "react-router-dom";
const CategoryProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, category_name } = useParams();
  const handleProductView = (id) => {
    navigate(`/product_view/${id}`);
  };
  // get products by category
  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      loadProductsByCategory();
    }
    return () => (subscribed = false);
  }, []);
  const loadProductsByCategory = useCallback(() => {
    dispatch(getProductsByCategory(id));
  });
  const categoryProducts = useSelector(
    (state) => state?.Products?.category_products?.products
  );
  // const moreCategoryProducts = useSelector((state) => state?.Products);
  // console.log("moreCategoryProducts are", moreCategoryProducts);
  // useEffect(() => {
  //   dispatch(getMoreProductsByCategory("627eaa45dfa8780fea3c8044", 5));
  // }, []);

  return (
    <section className="bg-uniform_grey py-10">
      <div className=" space-y-2 pb-5 w-mobile md:w-container_width mx-auto">
        <h2 className="text-xl font-bold border-b-[2px] border-dashed border-black py-1">
          {category_name}
        </h2>
      </div>
      <div className="w-mobile md:w-container_width mx-auto grid grid-cols-2 md:grid-cols-6 gap-3">
        {categoryProducts?.length > 0 ? (
          categoryProducts?.map((categoryProduct) => {
            const { name, imageUrl, _id, salePrice } = categoryProduct;
            return (
              <>
                <div key={_id} className="bg-white p-2.5 rounded space-y-3">
                  <div
                    onClick={() => handleProductView(_id)}
                    className="h-36 flex justify-center cursor-pointer"
                  >
                    <img src={imageUrl[0]} alt={name} />
                  </div>
                  <div>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {name}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-green">
                      $ {salePrice}
                    </p>
                    <svg
                      // onClick={() => alert("Clicked")}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="font-bold text-xl text-orange">
            <h2>Comming soon..</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryProducts;
