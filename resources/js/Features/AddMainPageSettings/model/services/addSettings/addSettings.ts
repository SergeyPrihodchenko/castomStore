import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/entities/User';
import { MainPageSettingsFields } from '../../types/addMainPageSettings';
interface loginByUserEmailProps {
  email: string;
  password: string;
}
export const addSettings = createAsyncThunk<
  undefined,
  MainPageSettingsFields,
  { rejectValue: string }
>('MainPageSettings/addSettings', async (settingsData, thunkAPI) => {
  try {
    const response = await axios.post(`/setAttribute`, settingsData);
    const data = response.data;
    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('error');
  }
});
