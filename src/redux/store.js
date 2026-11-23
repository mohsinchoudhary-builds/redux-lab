import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postsReducer from "./postsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  }
});

export default store;