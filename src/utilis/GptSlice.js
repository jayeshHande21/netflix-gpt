import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",
  initialState: {
    displayGptBtn: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggle: (state) => {
      state.displayGptBtn = !state.displayGptBtn;
    },

    addMovieSuggesations: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggle, addMovieSuggesations } = GptSlice.actions;

export default GptSlice.reducer;
