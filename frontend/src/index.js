import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

axios.defaults.baseURL = 'https://best-tech-api.onrender.com/'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
