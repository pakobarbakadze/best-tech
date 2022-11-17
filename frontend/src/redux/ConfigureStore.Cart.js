import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  itemsPrice: 0.0,
  shippingAddress: {},
  paymentMethod: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const index = itemIndex(state, action);

      state.itemsPrice += action.payload.price * action.payload.cartQuantity;

      if (index !== -1) {
        state.items[index].cartQuantity += action.payload.cartQuantity;
      } else {
        state.items.push(action.payload);
      }
    },
    increaseQuantity(state, action) {
      const index = itemIndex(state, action);
      state.items[index].cartQuantity += 1;
      state.itemsPrice += action.payload.price;
    },
    decreaseQuantity(state, action) {
      const index = itemIndex(state, action);
      if (state.items[index].cartQuantity > 1) {
        state.items[index].cartQuantity -= 1;
        state.itemsPrice -= action.payload.price;
      } else {
        state.items.splice(index, 1);
        state.itemsPrice -= action.payload.price;
      }
    },
    emptyCart(state, action) {
      state.items = initialCartState.items;
      state.paymentMethod = initialCartState.paymentMethod;
      state.shippingAddress = initialCartState.shippingAddress;
      state.itemsPrice = 0.0;
    },
    saveShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    },
    savePaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },
  },
});

const itemIndex = (state, action) => {
  return state.items.findIndex((item) => item._id === action.payload._id);
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
