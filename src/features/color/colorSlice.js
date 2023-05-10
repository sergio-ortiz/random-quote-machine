import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "dark",
  },
  reducers: {
    getRandomColor: (state) => {
      const colors = ["primary", "success", "info", "danger", "warning", "dark"]

      const randomIndex = Math.floor(Math.random() * 6);

      state.value = colors[randomIndex];
    },
  },
})

export const { getRandomColor } = colorSlice.actions;

export default colorSlice.reducer;
