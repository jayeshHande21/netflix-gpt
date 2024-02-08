import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",
  initialState: {
    displayGptBtn: false,
  },
  reducers: {
    toggle: (state) => {
      state.displayGptBtn = !state.displayGptBtn;
    },
  },
});

export const { toggle } = GptSlice.actions;

export default GptSlice.reducer;
