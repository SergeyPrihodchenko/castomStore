import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/entities/User';
interface loginByUserEmailProps {
  email: string;
  password: string;
}
export const loginByUserEmail = createAsyncThunk<
  User,
  loginByUserEmailProps,
  { rejectValue: string }
>('login/loginByUserEmail', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(`login`, authData);
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('error');
  }
});
