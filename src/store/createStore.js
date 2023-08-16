import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectorsReducer from "./projectorsSlice";
import cartReducer from "./cartSlice";
import usersReducer from "./usersSlice";
import orderReducer from "./orderSlice";

const rootReducer = combineReducers({
    projectors: projectorsReducer,
    cart: cartReducer,
    users: usersReducer,
    order: orderReducer,
});

export function createStore (){
    return configureStore({
        reducer: rootReducer
    })
}