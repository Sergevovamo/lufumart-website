import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getProductBySubCategory } from "../redux/actions/ProductsActions";
const SubCategoryView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductBySubCategory(id));
  }, []);
  //  getting all  products in sub-categories from the state
  const allSubCategories = useSelector(
    (state) => state?.Products?.products?.subCategories
  );
  // sub category names
  const subCategories = useSelector((state) => state?.Products?.sub_categories);
  // console.log("subCategories", subCategories);
  const specific = subCategories.find((subCat) => subCat._id === id);

  // console.log("Specific sub category is", specific?.name);

  //   filtering products from their respective sub-categories
  const productsBySubCategories = allSubCategories?.find(
    (product) => product._id === id
  );
  const total = productsBySubCategories?.products?.length;
  // console.log("total", total);
  //   function to naviate specific product
  const handleViewProduct = (id) => {
    console.log("product id is", id);
    // navigate(`/product_view/${id}`);
  };
  return (
    <section className="py-10 bg-uniform_grey">
      <div className="w-mobile md:w-container_width mx-auto pb-5">
        <p>
          {specific?.name} ({total || 0})
        </p>
      </div>
      <div className="w-mobile md:w-container_width mx-auto grid sm:grid-cols-5 gap-3">
        {/* <h className="text2xl">ID IS- {id}</h> */}
        {productsBySubCategories?.products?.map((prd) => {
          const { name, price, imageUrl, _id } = prd;
          //   function to trucate the product names
          let text = name;
          const truncateProductName = (str, num) => {
            if (str.length > num) {
              let subStr = str.substring(0, num);
              return subStr + "........";
            } else {
              return str;
            }
          };
          return (
            <div
              onClick={() => handleViewProduct(_id)}
              key={_id}
              className="flex flex-col  bg-white p-2 rounded cursor-pointer "
            >
              <div className="space-y-2">
                <div className="h-56  flex justify-center">
                  <img
                    src={imageUrl[0]}
                    alt={name}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="">{truncateProductName(text, 35)}</h2>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <s className="text-sm">Ksh {price}</s>
                  </div>
                  <div>
                    <p className="text-lg text-green"> Ksh {price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SubCategoryView;
