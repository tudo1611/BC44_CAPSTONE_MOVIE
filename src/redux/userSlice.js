//rxslice
import { createSlice } from "@reduxjs/toolkit";
import { localServ } from "../service/localStoreService";

const initialState = {
  //userInfo:null
  //sẽ được chạy khi user load trang
  userInfo: localServ.getUser(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
