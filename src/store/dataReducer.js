import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   posts: [],
   loading: true,
   success: false,
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
         state.posts = action.payload;
         state.loading = false;
         state.success = true;
         state.error = null;
      },
      [fetchData.pending]: (state, action) => {
         state.loading = true;
         state.success = false;
      },
      [fetchData.rejected]: (state, action) => {
         state.error = "Fetch Error";
         state.success = false;
      },
   },
});

export const getData = (state) => state.data.posts;
export const getLoading = (state) => state.data.loading;
export const getSuccess = (state) => state.data.success;

export default dataReducer.reducer;
