import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRegis: {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    hoTen: "",
  },
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
