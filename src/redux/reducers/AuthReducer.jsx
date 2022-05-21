import * as types from "../types";
const initialState = {
    isAuthenticated: false,
    loading: true,
    customer: {},
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
