import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      Cookies.set("access-token", action.payload.token, {
        expires: new Date(new Date().getTime() + 120 * 60 * 1000),
      });
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("access-token");
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
