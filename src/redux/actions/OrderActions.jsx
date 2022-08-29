import * as types from "../types";
import axios from "axios";
import toast from "react-hot-toast";
import { authToken } from "./AuthActions";
const ORDER_API = "https://api-v1.lufumart.com/api/v1/orders";
// Authentication using the stored token
// export const authToken = () => {
//   // Get token from localStorage
//   const token = localStorage.getItem("loginToken");
//   // Headers
//   const config = {
//     headers: {
//       "content-Type": "application/json",
//     },
//   };
//   // if token exist ,add authorizarion

//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }

//   return config;
// };
// make payment for the order
export const orderPayment = (payload) => async (dispatch) => {
  const { paymentMethod, deliveryAddress, phone } = payload;

  try {
    //   body
    const body = JSON.stringify({
      paymentMethod,
      deliveryAddress,
      phone,
    });
    const response = await axios.post(`${ORDER_API}/create`, body, authToken());
    const data = await response.data;
    console.log("payment response", data);
    if (data) {
      dispatch({
        type: types.MAKE_ORDER_SUCCESS,
        payload: data,
      });
      toast.success("Succefuly made an order");
    }
  } catch (error) {
    console.log(error);
  }
};
