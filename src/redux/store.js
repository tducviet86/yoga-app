import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
// import homeSlice from "./home/home.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
export default store;
