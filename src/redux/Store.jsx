import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import { errorReducer } from "./reducers/ErrorRducer";

import { productsReducer } from "./reducers/ProductsReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  Products: productsReducer,
  error: errorReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
