import * as types from "../types";
const initialState = {
  loading: true,
  products: [],
  more_products: [],
  product: {},
  categories: [],
  sub_categories: [],
  cart: [],
  orderPaid: null,
  orders: [],
  sub_category_products: null,
  more_sub_category_products: [],
  category_products: [],
  more_category_products: null,
  language: localStorage.getItem("lang"),

  // language: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case types.GET_MORE_PRODUCTS:
      return {
        ...state,
        loading: false,
        more_products: [...state.more_products, ...action.payload],
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
    // case types.GET_SUB_CATEGORIES:
    //   return {
    //     ...state,
    //     loading: false,
    //     sub_categories: action.payload,
    //   };
    case types.GET_SUB_CATEGORIES_BY_CATEGORY:
      return {
        ...state,
        loading: false,
        sub_categories: action.payload,
      };
    case types.GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        loading: false,
        category_products: action.payload,
      };
    case types.GET_PRODUCTS_BY_SUB_CATEGORY:
      return {
        ...state,
        loading: false,
        sub_category_products: action.payload,
      };
    case types.GET_MORE_PRODUCTS_BY_SUB_CATEGORY:
      return {
        ...state,
        more_sub_category_products: [
          ...state?.more_sub_category_products,
          ...action?.payload,
        ],
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
    case types.GET_ORDERS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case types.GET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
