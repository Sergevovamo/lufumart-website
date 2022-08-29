import * as types from "../types";
const initialState = {
  loading: true,
  orderMsg: null,
};
export const orderReducer = (state = initialState, action) => {
  switch (action) {
    case types.MAKE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orderMsg: action.payload,
      };

    default:
      return state;
  }
};
