import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostDetailSchema } from '../types/postDetailSchema';
import { Post } from '../../model/types/post';
import { fetchPost } from '../services/fetchPost/fetchPost';

const initialState: PostDetailSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const postDetailSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Post>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: postDetailActions } = postDetailSlice;

export const { reducer: postDetailReducer } = postDetailSlice;
