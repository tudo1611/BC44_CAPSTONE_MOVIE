import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
};

const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setDetail } = detailSlice.actions;

export default detailSlice.reducer;
