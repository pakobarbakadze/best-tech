import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import  { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";


import userReducer from "./ConfigureStore.User.js";

const reducers = combineReducers({
  userReducer
})

const persistConfig = {
  key : 'root',
  storage
}

const presistedUserReducer = persistReducer(persistConfig, reducers)

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})


const store = configureStore({
  reducer: {
    presistedUser : presistedUserReducer
  },
  middleware: customizedMiddleware,
});

export default store;
