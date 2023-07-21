import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrHTR: [],
};

const setArrHTRSlice = createSlice({
  name: "setArrHTR",
  initialState,
  reducers: {
    setHTR: (state, action) => {
      state.arrHTR = action.payload;
    },
  },
});

export const { setHTR } = setArrHTRSlice.actions;

export default setArrHTRSlice.reducer;
