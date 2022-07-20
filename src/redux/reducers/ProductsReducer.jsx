import * as types from "../types";
const initialState = {
  loading: true,
  products: [],
  product: {},
  categories: [],
  sub_categories: [],
  cart: [],
  orderPaid: null,
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
    case types.GET_SUB_CATEGORIES:
      return {
        ...state,
        loading: false,
        sub_categories: action.payload,
      };
    case types.GET_PRODUCTS_BY_SUB_CATEGORY:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case types.GET_USER_CART_ITEMS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case types.ADD_TO_CART:
    case types.DECREASE_CART_PRODUCT_QUANTITY:
    case types.REMOVE_CART_PRODUCT:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case types.MAKE_ORDER:
      return {
        ...state,
        loading: false,
        orderPaid: action.payload,
      };

    default:
      return state;
  }
};
