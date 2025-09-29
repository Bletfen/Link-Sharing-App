import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    authMode: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
