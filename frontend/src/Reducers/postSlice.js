import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost } from "../api";
import { fetchPosts } from "../api";

export const fetchposts = createAsyncThunk("post/fetchposts", async () => {
  try {
    const { data } = await fetchPosts();
    // console.log("hello", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const createpost = createAsyncThunk(
  "post/createpost",
  async (newPost) => {
    try {
      // console.log("newpoast", newPost);
      const { data } = await createPost(newPost);
      // console.log("create", data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deletepost = createAsyncThunk("post/deletepost", async (id) => {
  try {
    await deletePost(id);
    return;
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,

  extraReducers: {
    [fetchposts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },

    [createpost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [deletepost.fulfilled]: (state, action) => {
      state.posts.filter((post) => post._id !== action.payload);
    },
  },
});

// export const { FETCH_ALL, CREATE } = postSlice.actions;

export default postSlice.reducer;
