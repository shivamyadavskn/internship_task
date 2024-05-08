// states/store.js
import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from "./reducers/index";

export default configureStore({
  reducer: {
    number: incdecReducer,
  },
});
