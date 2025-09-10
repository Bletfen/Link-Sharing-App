import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginMode: true,
};

export const loginSlice = createSlice({
  name: "authMode",
  initialState,
  reducers: {
    showLogin(state) {
      state.isLoginMode = true;
    },
    showSignUp(state) {
      state.isLoginMode = false;
    },
  },
});

export const { showLogin, showSignUp } = loginSlice.actions;
export default loginSlice.reducer;
