import axios from "axios";
import * as types from "../types";
import { toast } from "react-toastify";

const PRODUCT_API = "https://api-v1.lufumart.com/api/v1";
// authentication using the stored token
const authToken = () => {
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
export const getProducts = () => (dispatch) => {
    try {
        axios.get(`${PRODUCT_API}/products`, authToken()).then((res) => {
            const products = res.data;
            // console.log(products);
            if (products) {
                dispatch({
                    type: types.GET_PRODUCTS,
                    payload: products,
                });
            }
        });
    } catch (error) {
        console.log(error.response);
    }
};
// get single product
export const getSingleProduct = (id) => async (dispatch) => {
    const response = await axios.get(
        `${PRODUCT_API}/products/${id}`,
        authToken()
    );
    const data = await response.data;
    // console.log(data);
    if (data) {
        dispatch({
            type: types.GET_SINGLE_PRODUCT,
            payload: data,
        });
    }
};
// token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbWVzQGdtYWlsLmNvbSIsImlkIjoiNjI1M2Y5NWExOTZkOTgwOGZjNmU3OTA2IiwiaWF0IjoxNjQ5NjcwNDkwLCJleHAiOjE2NTIwODk2OTB9.D89kJalYysagtuv1O4nCXyYE0ACruUp65kumGp4XCDY

// get all categories
export const getCategories = () => async (dispatch) => {
    const response = await axios.get(
        `${PRODUCT_API}/product-categories?_limit=4`,
        authToken()
    );
    const data = await response.data;
    // console.log(data);
    if (data) {
        dispatch({
            type: types.GET_CATEGORIES,
            payload: data,
        });
    }
};

// add to cart
export const addToCart = (prodId) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${PRODUCT_API}/products/add-product-to-cart?productId=${prodId}`,
            authToken()
        );
        const data = await response.data;
        // console.log(data);
        if (data) {
            dispatch({
                type: types.ADD_TO_CART,
                payload: data,
            });
            toast.success("Succesfully added to cart", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    } catch (error) {
        console.log(error.response.data);
    }
};
// get user cart products

export const getUserCartItems = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `${PRODUCT_API}/products/user-cart-products`,
            authToken()
        );
        const data = await response.data;
        // console.log(data);
        if (data) {
            dispatch({
                type: types.GET_USER_CART_ITEMS,
                payload: data,
            });
        }
    } catch (error) {}
};
