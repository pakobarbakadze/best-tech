import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], shippingAddress: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const index = itemIndex(state, action);

      if (index !== -1)
        state.items[index].cartQuantity += action.payload.cartQuantity;
      else state.items.push(action.payload);
    },
    increaseQuantity(state, action) {
      const index = itemIndex(state, action);
      state.items[index].cartQuantity += 1;
    },
    decreaseQuantity(state, action) {
      const index = itemIndex(state, action);
      if (state.items[index].cartQuantity > 1)
        state.items[index].cartQuantity -= 1;
      else state.items.splice(index, 1);
    },
    emptyCart(state, action) {
      state.items = [];
    },
    saveShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    },
  },
});

const itemIndex = (state, action) => {
  return state.items.findIndex((item) => item._id === action.payload._id);
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
