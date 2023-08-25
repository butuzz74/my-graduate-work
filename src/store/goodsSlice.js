import { createSlice } from "@reduxjs/toolkit";
import goodsService from "../service/goods.service";

const initialState = {
    entities: [],
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
            state.entities = action.payload;
            state.isLoading = false;
        },
        create: (state, action) => {
            state.entities.push(action.payload);
            state.isLoading = false;
        },
        deleteGood: (state, action) => {
            state.isLoading = false;
            const a = state.entities.filter(
                (item) => item._id !== action.payload
            );
            state.entities = a;
        },
        update: (state, action) => {
            state.isLoading = false;
            state.entities.push(action.payload);
        }
    }
});

const { reducer: goodsReducer, actions } = goodsSlice;
const {
    goodsRequested,
    goodsReceived,
    goodsRequestFailed,
    create,
    deleteGood,
    update
} = actions;

// const transformationData = (data) => {
//   let resData;
//   let dataOne = [];
//   if (!Array.isArray(data)) {
//     resData = Object.values(data);
//     for (let el of resData) {
//       if (!Array.isArray(el)) {
//         dataOne = [...dataOne, ...Object.values(el)];
//       }
//     }
//   }
//   return dataOne;
// };

export const loadGoods = () => async(dispatch) => {
    dispatch(goodsRequested());
    try {
        const content = await goodsService.fetchAll();
        // const newContent = transformationData(content);
        dispatch(goodsReceived(content));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
    }
};
export const loadGoodsForAdmin = (path) => async(dispatch) => {
    dispatch(goodsRequested());
    try {
        const content = await goodsService.getAllGood(path);
        // const newContent = transformationData(content);
        dispatch(goodsReceived(content));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
    }
};
// export const createGood = (path, data) => async (dispatch) => {
//   dispatch(goodsRequested());
//   try {
//     const content = await goodsService.create(path, data);
//     dispatch(create(content));
//   } catch (error) {
//     dispatch(goodsRequestFailed(error.message));
//   }
// };
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
        // const content = await goodsService.delete(path, id);
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

export const getGoodsRedux = () => (state) => state.goods.entities;
export const getGoodsLoadingStatus = () => (state) => state.goods.isLoading;
export const getGoodsById = (userId) => (state) => {
    if (state.goods.entities) {
        return state.goods.entities.find((u) => u._id === userId);
    }
};

export default goodsReducer;
