import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banner: [],
};

const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState,
  reducers: {
    addBanner: (state, action) => {
      state.banner = action.payload;
    },
  },
});

export const { addBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
