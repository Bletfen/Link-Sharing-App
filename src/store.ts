import { configureStore } from "@reduxjs/toolkit";
import authModeReducer from "./features/loginSlice";

export const store = configureStore({
  reducer: {
    authMode: authModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
