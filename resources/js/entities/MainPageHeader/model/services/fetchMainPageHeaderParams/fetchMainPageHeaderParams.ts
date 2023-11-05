import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MainPage } from '../../types/mainPageHeaderSchema';

export const fetchMainPageHeaderParams = createAsyncThunk<
  MainPage,
  undefined,
  { rejectValue: string }
>('fetchMainPage/fetchMainPageHeaderParams', async (_, thunkAPI) => {
  try {
    const response = await axios.post<MainPage>(`/admin/dashboard/main`, {});
    const data = response.data;

    // if (data instanceof Array) {
    //   data.map((item) => console.log(item));
    // }

    console.log('data', data);

    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('error');
  }
});
