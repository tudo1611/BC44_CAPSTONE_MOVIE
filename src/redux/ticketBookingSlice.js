import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticketBooking: {
    maLichChieu: 0,
    danhSachVe: [
      {
        maGhe: 0,
        giaVe: 0,
      },
    ],
  },
};

const ticketBookingSlice = createSlice({
  name: "ticketBookingSlice",
  initialState,
  reducers: {
    setTicketBooking: (state, action) => {
      state.ticketBooking = action.payload;
    },
  },
});

export const { setTicketBooking } = ticketBookingSlice.actions;

export default ticketBookingSlice.reducer;
