import { createSlice } from "@reduxjs/toolkit";
import goodsService from "../service/goods.service";
import { toast } from "react-toastify";
const initialState = {
    entities: {
        goods: [],
        goodById: null
    },
    isLoading: true,
    error: null
};

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        goodsRequested: (state) => {
            state.isLoading = true;
        },
        goodsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        goodsReceived: (state, action) => {
            state.entities.goods = action.payload;
            state.isLoading = false;
        },
        goodByIdReceived: (state, action) => {
            state.entities.goodById = action.payload;
            state.isLoading = false;
        },
        create: (state, action) => {
            state.entities.goods.push(action.payload);
            state.isLoading = false;
        },
        deleteGood: (state, action) => {
            state.isLoading = false;
            const a = state.entities.goods.filter(
                (item) => item._id !== action.payload
            );
            state.entities.goods = a;
        },
        update: (state, action) => {
            state.isLoading = false;
            state.entities.goods.push(action.payload);
        }
    }
});

const { reducer: goodsReducer, actions } = goodsSlice;
const {
    goodsRequested,
    goodsReceived,
    goodByIdReceived,
    goodsRequestFailed,
    create,
    deleteGood,
    update
} = actions;

export const loadGoods = () => async(dispatch) => {
    dispatch(goodsRequested());
    try {
        const content = await goodsService.fetchAll();
        dispatch(goodsReceived(content));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
    }
};
export const loadGoodsForAdmin = (path) => async(dispatch) => {
    dispatch(goodsRequested());
    try {
        const content = await goodsService.getAllGood(path);
        dispatch(goodsReceived(content));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
    }
};
export const loadGoodById = (id) => async(dispatch) => {
    dispatch(goodsRequested());
    try {
        const content = await goodsService.get(id);
        dispatch(goodByIdReceived(content));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
        const { code, message } = error.response.data.error;
        if (code === 400) {
            if (message === "GOOD_NOT_FOUND") {
                const errorObject = {
                    email: "Товар не найден!"
                };
                toast(errorObject.email);
                throw errorObject;
            }
        }
    }
};
export const createGood = (data) => async(dispatch) => {
    dispatch(goodsRequested());
    try {
        const content = await goodsService.create(data);
        dispatch(create(content));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
    }
};
export const deleteGoods = (id) => async(dispatch) => {
    dispatch(goodsRequested());
    try {
        const content = await goodsService.delete(id);
        console.log(content);
        dispatch(deleteGood(id));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
    }
};
export const updatedGoods = (id, data) => async(dispatch) => {
    dispatch(goodsRequested());
    try {
        const content = await goodsService.update(id, data);
        dispatch(deleteGood(id));
        dispatch(update(content));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
    }
};

export const getGoodsRedux = () => (state) => state.goods.entities.goods;
export const getGoodsLoadingStatus = () => (state) => state.goods.isLoading;
export const getGoodsById = (userId) => (state) => {
    if (state.goods.entities.goods) {
        return state.goods.entities.goods.find((u) => u._id === userId);
    }
};
export const getGoodsById1 = () => (state) => state.goods.entities.goodById;

export default goodsReducer;
