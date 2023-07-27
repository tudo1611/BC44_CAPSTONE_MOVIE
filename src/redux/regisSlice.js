import { createSlice } from "@reduxjs/toolkit";
import { localServ } from "../service/localStoreService";

const initialState = {
  userRegis: localServ.getUser(),
};

const regisSlice = createSlice({
  name: "regisSlice",
  initialState,
  reducers: {
    setUserRegis: (state, action) => {
      state.userRegis = action.payload;
    },
  },
});

export const { setUserRegis } = regisSlice.actions;

export default regisSlice.reducer;
