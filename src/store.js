/** @format */

import thunk from "redux-thunk";

const { configureStore } = require("@reduxjs/toolkit");
const { MainReducer } = require("./MainReducer");

export const store = configureStore({
  reducer: MainReducer,
  ...MainReducer,
  middleware: [thunk],
});
