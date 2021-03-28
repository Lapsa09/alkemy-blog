import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    charged: false,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.charged = true;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export const getPosts = (state) => state.posts.posts;

export const isCharged = (state) => state.posts.charged;

export default postsSlice.reducer;
