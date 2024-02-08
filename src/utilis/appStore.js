import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import GptReducer from "./GptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    Gpt: GptReducer,
    config: configReducer,
  },
});

export default appStore;
