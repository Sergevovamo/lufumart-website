import * as types from "../types";
const initialState = {
    loading: true,
    products: [],
    product: {},
    categories: [],
    cart: [],
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case types.GET_SINGLE_PRODUCT:
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        case types.GET_CATEGORIES:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        case types.ADD_TO_CART:
        case types.GET_USER_CART_ITEMS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
            };

        default:
            return state;
    }
};
