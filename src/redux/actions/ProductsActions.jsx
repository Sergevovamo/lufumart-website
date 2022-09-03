import axios from "axios";
import * as types from "../types";
import toast from "react-hot-toast";

const PRODUCT_API = "https://api-v1.lufumart.com/api/v1/products";

// authentication using the stored token
export const authToken = () => {
  // getting the token from the local storage
  const token = localStorage.getItem("loginToken");
  // header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //  if token exist ,add authorizarion
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
// get products
export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${PRODUCT_API}`);
    const data = await response.data;
    if (data) {
      dispatch({
        type: types.GET_PRODUCTS,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
// get more products
export const getMoreProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${PRODUCT_API}/lufumart-app?limit=10`);
    const data = await response.data;
    if (data) {
      dispatch({
        type: types.GET_MORE_PRODUCTS,
        payload: data?.products,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
// get single product
export const getSingleProduct = (id) => async (dispatch) => {
  const response = await axios.get(`${PRODUCT_API}/${id}`, authToken());
  const data = await response.data;
  // console.log(data);
  if (data) {
    dispatch({
      type: types.GET_SINGLE_PRODUCT,
      payload: data,
    });
  }
};
// get all categories
export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api-v1.lufumart.com/api/v1/product-categories`
    );
    const data = await response.data;
    // console.log(data);
    if (data) {
      dispatch({
        type: types.GET_CATEGORIES,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
// get all sub-categories
// export const getSubCategories = () => async (dispatch) => {
//   const response = await axios.get(`${PRODUCT_API}/product-sub-categories`);
//   const data = await response.data;
//   // console.log("sub category id", data);
//   if (data) {
//     dispatch({
//       type: types.GET_SUB_CATEGORIES,
//       payload: data,
//     });
//   }
// };

// get sub-category by category
export const getSubCategoryByCategory = (categoryId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api-v1.lufumart.com/api/v1/product-sub-categories/get-sub-category-by-category?categoryId=${categoryId}`
    );
    const data = await response.data;
    if (data) {
      dispatch({
        type: types.GET_SUB_CATEGORIES_BY_CATEGORY,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
// get  products with their respective categories
export const getProductsByCategory = (categoryId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${PRODUCT_API}/lufumart-app/products-by-category?&categoryId=${categoryId}`
    );
    const data = await response.data;
    // console.log("products by category are", data);
    if (data) {
      dispatch({
        type: types.GET_PRODUCTS_BY_CATEGORY,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// get  products with their respective sub-categories
export const getProductBySubCategory = (subCategoryId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${PRODUCT_API}/products-by-sub-category?subCategoryIds[0]=${subCategoryId}&type=array`
    );
    const data = await response.data;
    // console.log("action data", data);
    if (data) {
      dispatch({
        type: types.GET_PRODUCTS_BY_SUB_CATEGORY,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
// get more products by subCategory
export const getMoreProductsBySubCategory = (payload) => async (dispatch) => {
  const { subCategoryId, page } = payload;
  console.log("page is", page);
  try {
    const response = await axios.get(
      `${PRODUCT_API}/lufumart-app/sub-category-products?subCategoryId=${subCategoryId}&page=${page}`
    );
    const data = await response.data;
    if (data) {
      dispatch({
        type: types.GET_MORE_PRODUCTS_BY_SUB_CATEGORY,
        // payload: {
        //   products: data?.products,
        //   page: page,
        // },
        payload: data?.products,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// add to cart
export const addToCart = (prodId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${PRODUCT_API}/add-product-to-cart?productId=${prodId}`,
      authToken()
    );
    const data = await response.data;
    console.log(data);
    if (data) {
      dispatch({
        type: types.ADD_TO_CART,
        payload: data,
      });
    }
    dispatch(getUserCartItems());
  } catch (error) {
    console.log(error.response.data);
  }
};
// get user cart products
export const getUserCartItems = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${PRODUCT_API}/user-cart-products`,
      authToken()
    );
    const data = await response.data;
    if (data) {
      dispatch({
        type: types.GET_USER_CART_ITEMS,
        payload: data,
      });
    }
  } catch (error) {}
};
// decrease cart productquantity
export const decreaseProdQty = (prodId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${PRODUCT_API}/decrease-cart-product-quantity?productId=${prodId}`,
      authToken()
    );
    const data = await response.data;
    // console.log( data);
    if (data) {
      dispatch({
        type: types.DECREASE_CART_PRODUCT_QUANTITY,
        payload: data,
      });
      dispatch(getUserCartItems());
      toast.success("product quantity decreased");
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
// remove product from cart
export const removeProduct = (prodId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${PRODUCT_API}/remove-product-to-cart?productId=${prodId}`,
      authToken()
    );
    const data = await response.data;
    if (data) {
      dispatch({
        type: types.REMOVE_CART_PRODUCT,
        payload: data,
      });
      dispatch(getUserCartItems());
    }
  } catch (error) {
    console.log(error.response);
  }
};

// get orders
export const getOrders = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api-v1.lufumart.com/api/v1/orders/customer-orders`,
      authToken()
    );
    const data = await response.data;
    if (data) {
      dispatch({
        type: types.GET_ORDERS,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
// get language
export const getLanguage = (lang) => (dispatch) => {
  dispatch({
    type: types.GET_LANGUAGE,
    payload: lang,
  });
  localStorage.setItem("lang", lang);
  // toast.success("Language set succesfully");
};
