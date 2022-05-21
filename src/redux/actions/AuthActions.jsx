import * as types from "../types";
import axios from "axios";
import { toast } from "react-toastify";
const AUTH_API = "https://api-v1.lufumart.com/api/v1/auth";

// Authentication using the stored token

export const authToken = () => {
    // Get token from localStorage
    const token = localStorage.getItem("loginToken");

    // Headers
    const config = {
        headers: {
            "content-Type": "application/json",
        },
    };

    // if token exist ,add authorizarion

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
};

// customer register
export const customerRegister = (payload) => async (dispatch) => {
    let { name, email, password, password_confirmation, phone, gender } =
        payload;
    // config
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    // body
    const body = JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
        phone,
        gender,
    });
    try {
        const response = await axios.post(`${AUTH_API}/signup`, body, config);
        const data = await response.data;
        const token = data.token;
        console.log(data);
        if (data) {
            dispatch({
                type: types.CUSTOMER_REGISTER,
                payload: data,
            });
            localStorage.setItem("registerToken", token);
            toast.success("Successfully registered", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    } catch (error) {
        console.log(error.response);
    }
};

// customer login
export const customerLogin = (payload) => (dispatch) => {
    const { email, password } = payload;
    // config
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    // body
    const body = JSON.stringify({
        email: email,
        password: password,
    });
    try {
        axios.post(`${AUTH_API}/signin`, body, config).then((res) => {
            const data = res.data;
            console.log(data);
            const token = res.data.token;

            if (data) {
                dispatch({
                    type: types.CUSTOMER_LOGIN,
                    payload: data,
                });
                localStorage.setItem("loginToken", token);
                toast.success("Welcome!..successfully logged in", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
        });
    } catch (error) {
        console.log(error.response);
    }
};

//get customer profile
export const getCustomer = () => (dispatch) => {
    try {
        axios.get(`${AUTH_API}/profile`, authToken()).then((res) => {
            const user = res.data;
            dispatch({
                type: types.GET_CUSTOMER,
                payload: user,
            });
        });
    } catch (error) {
        console.log(error.response);
    }
};

// logout

export const logout = () => (dispatch) => {
    localStorage.removeItem("loginToken");
    toast.success("Successfully logged out", {
        position: toast.POSITION.TOP_CENTER,
    });
    dispatch({
        type: types.LOGOUT,
    });
};

// get customer address

export const getCustomerAddress = () => async (dispatch) => {
    const response = await axios.get(
        "http://localhost:7000/user_address",
        authToken()
    );
    const data = await response.data;
    if (data) {
        dispatch({
            type: types.GET_CUSTOMER_ADDRESS,
            payload: data,
        });
    }
};

// token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbWVzQGdtYWlsLmNvbSIsImlkIjoiNjI1M2Y5NWExOTZkOTgwOGZjNmU3OTA2IiwiaWF0IjoxNjQ5NjcwNDkwLCJleHAiOjE2NTIwODk2OTB9.D89kJalYysagtuv1O4nCXyYE0ACruUp65kumGp4XCDY

// token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbHZpbm1hdGlAZ21haWwuY29tIiwiaWQiOiI2MjUzZmY3NTE5NmQ5ODA4ZmM2ZTc5MWEiLCJpYXQiOjE2NDk2NzIwNTQsImV4cCI6MTY1MjA5MTI1NH0.5PPYZmy_ALMOAGCtLu__xqTNJYpOQiN9S2rgGGY5Eoo
// james@gmail.com
// jamesjames
