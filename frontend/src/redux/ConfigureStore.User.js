import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { user: {userData : {} , token : ""} };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setState(state, action) {
      state.user = action.payload
    },
  },
});


export const userActions = userSlice.actions

export default userSlice.reducer