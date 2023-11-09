import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MainPageSchema } from '../types/mainPage';

export const fetchSettings = createAsyncThunk(
  'mainPageSettings/fetchSettings',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post<MainPageSchema>(`/admin/dashboard/main`);
      const data = response.data;
      console.log(data);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
