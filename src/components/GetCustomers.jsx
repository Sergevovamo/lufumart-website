import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../redux/actions/AuthActions";
const GetCustomers = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    console.log(user);

    useEffect(() => {
        dispatch(getCustomer());
    }, []);

    return <div>GetCustomers</div>;
};

export default GetCustomers;
