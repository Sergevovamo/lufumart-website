import * as types from "../types";
const initialState = {
    isAuthenticated: false,
    loading: true,
    customer: {},
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
        case types.GET_CUSTOMER:
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
        default:
            return state;
    }
};
