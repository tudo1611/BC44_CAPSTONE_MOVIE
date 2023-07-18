import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticketDetail: [],
};

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.ticketDetail = action.payload;
    },
  },
});

export const { setBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
