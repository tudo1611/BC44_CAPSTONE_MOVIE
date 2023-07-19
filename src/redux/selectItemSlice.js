import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSeat: [],
};

const selectItemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.selectedSeat.push(action.payload);
    },
    deselectItem: (state, action) => {
      state.selectedSeat = state.selectedSeat.filter(
        (item) => item == action.payload
      );
    },
  },
});

export const { selectItem, deselectItem } = selectItemSlice.actions;

export default selectItemSlice.reducer;
