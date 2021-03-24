import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/PostsSlice";

export default configureStore({
  reducer: {
    posts: PostReducer,
  },
});
