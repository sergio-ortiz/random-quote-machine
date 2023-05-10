import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../features/color/colorSlice";
import quoteReducer from "../features/quote/quoteSlice";

export default configureStore({
  reducer: {
    color: colorReducer,
    quote: quoteReducer,
  },
})
