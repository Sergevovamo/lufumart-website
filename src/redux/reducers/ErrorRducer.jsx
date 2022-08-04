import * as types from "../types";
const initialState = {
  msg: null,
  typeId: null,
};
export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return {
        ...state,
        msg: action.payload.msg,
        typeId: action.payload.typeId,
      };
    default:
      return state;
  }
};
