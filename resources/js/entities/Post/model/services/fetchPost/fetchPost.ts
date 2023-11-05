import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../../types/post';

export const fetchPost = createAsyncThunk<Post, undefined, { rejectValue: string }>(
  'postDetail/fetchPost',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/3`);
      const data = response.data;
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
