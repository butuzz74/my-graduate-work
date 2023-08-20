import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    countCart: 0,
    selectedGood: [],
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clear: (state) => {
      state.entities.countCart = 0;
      state.entities.selectedGood = [];
    },
    add: (state, action) => {
      const containsGood = state.entities.selectedGood.find(
        (elem) => elem._id === action.payload._id
      );
      if (!containsGood) {
        state.entities.countCart += 1;
        state.entities.selectedGood.push({ ...action.payload, amount: 1 });
      }
    },
    deleteGood: (state, action) => {
      const filteredGoods = state.entities.selectedGood.filter(
        (item) => item._id !== action.payload
      );
      state.entities.selectedGood = filteredGoods;
      state.entities.countCart = filteredGoods.length;
    },
    increment: (state, action) => {
      const newSelectedGood = state.entities.selectedGood.map((item) => {
        if (item._id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      state.entities.selectedGood = newSelectedGood;
    },
    dicrement: (state, action) => {
      const newSelectedGood = state.entities.selectedGood.map((item) => {
        if (item._id === action.payload && item.amount > 0) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      state.entities.selectedGood = newSelectedGood;
    },
  },
});

const { reducer: cartReducer } = cartSlice;
export const dicrementGood = createAction("cart/dicrement");
export const incrementGood = createAction("cart/increment");
export const clearCart = createAction("cart/clear");
export const addGood = createAction("cart/add");
export const deleteGood = createAction("cart/deleteGood");

export const getCountCart = () => (state) => state.cart.entities.countCart;
export const getSelectedGood = () => (state) =>
  state.cart.entities.selectedGood;
export default cartReducer;
