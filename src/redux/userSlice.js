//rxslice
import { createSlice } from "@reduxjs/toolkit";
import { localServ } from "../service/localStoreService";

const initialState = {
  //userInfo:null
  //sẽ được chạy khi user load trang
  userInfo: localServ.getUser(),
  userSignUp: localServ.setUserSignUp(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userInfo = action.payload;
    },
    setSignUp: (state, action) => {
      state.userSignUp = action.payload;
    },
  },
});

export const { setLogin, setSignUp } = userSlice.actions;

export default userSlice.reducer;
