import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticketDetail: { thongTinPhim: {}, danhSachGhe: [] },
  danhSachGheDangDat: [],
};

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.ticketDetail = action.payload;
    },
    setDatGhe: (state, action) => {
      state.danhSachGheDangDat = action.payload;
    },
  },
});

export const { setBooking, setDatGhe } = bookingSlice.actions;

export default bookingSlice.reducer;
