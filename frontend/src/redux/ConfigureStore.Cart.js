import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    setState(state, action) {
        const index = itemIndex(state, action)

        if(index) state.items[index].cartQuantity += 1
        else state.items.push(action.payload)
    },
    increaseQuantity(state, action) {
        const index = itemIndex(state, action)
        state.items[index].cartQuantity +=1
    },
    decreaseQuantity(state, action) {
        const index = itemIndex(state, action)
        state.items[index].cartQuantity -=1
    }
  },
});

const itemIndex = (state, action) => {
  return state.items.findIndex((item) => item.id === action.payload.id);
};

export const cartActions = cartSlice.actions

export default cartSlice.reducer