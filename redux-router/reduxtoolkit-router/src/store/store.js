import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/slice";
export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
