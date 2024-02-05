import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

console.log("Before configureStore");
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
console.log("After configureStore");

export default appStore;
