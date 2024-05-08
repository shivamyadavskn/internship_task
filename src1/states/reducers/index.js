// reducers/index.js
import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
  name: "incdec",
  initialState: 10,
  reducers: {
    increment: (state, action) => {
      return state + 1; // Increment the state by 1
    },
    decrement: (state, action) => {
      return state - 1; // Decrement the state by 1
    },
  },
});

export const { increment, decrement } = incdecSlice.actions;

export default incdecSlice.reducer;
