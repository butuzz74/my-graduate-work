import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectorsReducer from "./projectorsSlice";

const rootReducer = combineReducers({
    projectors: projectorsReducer
});

export function createStore (){
    return configureStore({
        reducer: rootReducer
    })
}