import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementBy5: (state) => {
      state.value += 5;
    },
    decrementBy5: (state) => {
      state.value -= 5;
    },
  },
});

export const { incrementBy5, decrementBy5 } = counterSlice.actions;

export default counterSlice.reducer;
