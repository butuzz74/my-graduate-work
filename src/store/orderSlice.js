import { createAction, createSlice } from "@reduxjs/toolkit";
import orderService from "../service/order.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        orderRequested: (state) => {
            state.isLoading = true;
        },
        orderRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        create: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        send: (state, action) => {
            if (state.entities) {
                const a = { ...state.entities, ...action.payload };
                state.entities = a;
            }
        },
        clear: (state) => {
            state.entities = null;
        }
    }
});
const { reducer: orderReducer, actions } = orderSlice;
const { orderRequested, orderRequestFailed, create, send } = actions;

export const clearListOrder = createAction("order/clear");

export const orderListCurrentUser = (id) => async (dispatch) => {
    dispatch(orderRequested);
    try {
        const content = await orderService.getById(id);
        dispatch(create(content));
    } catch (error) {
        dispatch(orderRequestFailed(error.message));
    }
};
export const sendOrder = (data) => async (dispatch) => {
    dispatch(orderRequested);
    try {
        const content = await orderService.create(data);
        dispatch(send(content));
    } catch (error) {
        dispatch(orderRequestFailed(error.message));
    }
};
export const getOrderListCurrentUser = () => (state) => state.order.entities;
// export const getOrderItemById = (id) => (state) => state.order.entities[id]
export const getOrderItemById = (id) => (state) => {
    if (state.order.entities) {
        return state.order.entities.find((u) => u._id === id);
    }
};
export const getOrderLoadingStatus = () => (state) => state.goods.isLoading;

export default orderReducer;
