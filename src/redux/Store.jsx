import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import { productsReducer } from "./reducers/ProductsReducer";
const rootReducer = combineReducers({
    auth: authReducer,
    Products: productsReducer,
});
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
