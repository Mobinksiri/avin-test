import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   posts: [],
   loading: false,
   error: null,
};

export const fetchData = createAsyncThunk("posts/fetchPosts", async () => {
   const response = await axios("data.json");
   const data = await response.data;
   return data;
});

const dataReducer = createSlice({
   name: "posts",
   initialState,
   extraReducers: {
      [fetchData.fulfilled]: (state, action) => {
         console.log(action.payload);
         state.posts = action.payload;
         state.loading = false;
         state.error = null;
      },
      [fetchData.pending]: (state, action) => {
         state.loading = true;
      },
      [fetchData.rejected]: (state, action) => {
         state.error = "Fetch Error";
      },
   },
});

export const getData = (state) => state.posts.posts;

export default dataReducer.reducer;
