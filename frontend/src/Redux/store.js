import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import tokenRefreshMiddleware from "./middleware/tokenRefreshMiddleware";
import radioReducer from "./reducers/radioReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  radio: radioReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, tokenRefreshMiddleware)
);

export default store;
