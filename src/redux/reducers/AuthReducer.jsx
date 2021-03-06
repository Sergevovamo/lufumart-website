import * as types from "../types";
const initialState = {
  isAuthenticated: !!localStorage.getItem("loginToken"),
  loading: true,
  customer: {},
  errorMsg: null,
  // address: {
  //     username: "Steve",
  //     deliveryAddress: "Mombasa,Umoja house eldoret",
  //     country: "Congo",
  //     zipCode: "34-43423",
  //     phoneNo: "0756324589",
  //     alternativePhone: "07544678656",
  // },
  // address: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_REGISTER:
    case types.CUSTOMER_LOGIN:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        customer: action.payload,
      };
    case types.CUSTOMER_REGISTER_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
      };

    case types.USER_AUTH:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        customer: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        customer: {},
      };
    case types.GET_CUSTOMER_ADDRESS:
      return {
        ...state,
        loading: false,
        address: action.payload,
      };
    default:
      return state;
  }
};
