import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historyBooking: {},
  tabsActive: "1",
};

const historyBookingSlice = createSlice({
  name: "historyBookingSlice",
  initialState,
  reducers: {
    setHistoryBooking: (state, action) => {
      state.historyBooking = action.payload;
    },
    setTabsActive: (state, action) => {
      state.tabsActive = action.payload;
    },
  },
});

export const { setHistoryBooking, setTabsActive } = historyBookingSlice.actions;

export default historyBookingSlice.reducer;
