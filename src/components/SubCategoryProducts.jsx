import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  // getMoreProductsByCategory,
  getProductBySubCategory,
  getSingleProduct,
} from "../redux/actions/ProductsActions";
import { useNavigate } from "react-router-dom";

const SubCategoryProducts = () => {
  const { id, sub_name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get products by subcategories
  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      loadProductsBySubcategory();
    }
    return () => (subscribed = false);
  }, [id]);
  // prevent re-renders
  const loadProductsBySubcategory = useCallback(() => {
    dispatch(getProductBySubCategory(id));
  });
  const productBySubCategories = useSelector(
    (state) =>
      state?.Products?.sub_category_products?.subCategories[0]?.products
  );
  // load more products by subcategory
  // const moreSubcategoryProducts = useSelector((state) => state?.Products);
  // console.log("moreSubcategoryProducts are", moreSubcategoryProducts);
  // useEffect(() => {
  //   dispatch(getMoreProductsByCategory("627f3510dfa8780fea3c8736", 2));
  // }, []);
  // get total products
  const totalProducts = productBySubCategories?.length;
  // navigate to product details
  const handleProductView = (id) => {
    dispatch(getSingleProduct(id));
    navigate(`/product_view/${id}`);
  };
  return (
    <section className=" py-5 md:py-16 bg-uniform_grey">
      <div className=" space-y-2 pb-5 w-mobile md:w-container_width mx-auto">
        <h2 className="text-xl font-bold border-b-[2px] border-dashed border-black py-1">
          {sub_name}
        </h2>
        <p>
          Available products: <span>{totalProducts || 0}</span>
        </p>
      </div>
      <div className=" grid  grid-cols-2 md:grid-cols-6 gap-3 w-mobile md:w-container_width mx-auto">
        {productBySubCategories?.length > 0 ? (
          productBySubCategories?.map((filteredPrd) => {
            const { name, imageUrl, _id, salePrice } = filteredPrd;
            return (
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
                  <p className="text-lg font-bold text-green">$ {salePrice}</p>
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

export default SubCategoryProducts;
