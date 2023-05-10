import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    value: {
      text: "",
      author: ""
    }
  },
  reducers: {
    getRandomQuote: (state) => {
      const quotes = [
        {
          text: "Why does it have to be easy?", 
          author: "Facts"
        }, 
        {
          text: "Stay Hard!", 
          author: "David Goggins"
        }, 
        {
          text: "A business is money in, nothing else!", 
          author: "Millionare"
        }, 
        {
          text: "...You're Broke!!", 
          author: "Rather not say"
        }, 
        {
          text: "Always drink and drive.", 
          author: "Troll"
        }, 
        {
          text: "my unmatched perspicacity coupled with sheer indefatigability",
          author: "I'm getting cancelled"
        }
      ];

      const randomIndex = Math.floor(Math.random() * 6);

      state.value = quotes[randomIndex];
    }
  }
})

export const { getRandomQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
