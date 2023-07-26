import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectorsReducer from "./projectorsSlice";
import cartReducer from "./cartSlice";
import usersReducer from "./usersSlice";

const rootReducer = combineReducers({
    projectors: projectorsReducer,
    cart: cartReducer,
    users: usersReducer
});

export function createStore (){
    return configureStore({
        reducer: rootReducer
    })
}