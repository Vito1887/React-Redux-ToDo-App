import { configureStore } from "@reduxjs/toolkit";
import posts from "src/redux/reducers/posts";

export const store = configureStore({
  reducer: {
    posts,
  },
});
