import { createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import authReducer from "./reducers/AuthReducer";


const initialState = {};
const Middleware = applyMiddleware(thunk);
const rootReudcer = combineReducers({getUser: authReducer })


const store = createStore( rootReudcer , initialState, Middleware)

export default store;