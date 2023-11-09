import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchSettings } from './fetchSettings';

export const addSettings = createAsyncThunk(
  'mainPageSettings/addSettings',
  async (item: { title: string }, thunkAPI) => {
    try {
      const response = await axios.post(`/setAttribute`, item);
      console.log(response);
      if (response.status !== 200) {
        throw new Error('Cant add title');
      }
      thunkAPI.dispatch(fetchSettings());
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
