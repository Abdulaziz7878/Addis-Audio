import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./store/AudiosReducer";
import AudiosSaga from "./store/AudiosSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: () => [saga],
});

saga.run(AudiosSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
