import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieArr: [],
};

const showingSlice = createSlice({
  name: "showingSlice",
  initialState,
  reducers: {
    setShowing: (state, action) => {
      const { dangChieu } = action.payload;
    },
  },
});

export const { setShowing } = showingSlice.actions;

export default showingSlice.reducer;
