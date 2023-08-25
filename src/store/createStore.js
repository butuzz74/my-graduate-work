import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectorsReducer from "./projectorsSlice";
import cartReducer from "./cartSlice";
import usersReducer from "./usersSlice";
import orderReducer from "./orderSlice";
import goodsReducer from "./goodsSlice";

const rootReducer = combineReducers({
    projectors: projectorsReducer,
    cart: cartReducer,
    users: usersReducer,
    order: orderReducer,
    goods: goodsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
