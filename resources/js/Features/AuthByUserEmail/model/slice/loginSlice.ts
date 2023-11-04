import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/login';
import { loginByUserEmail } from '../services/loginByUserEmail/loginByUserEmail';

const initialState: LoginSchema = {
  isLoading: false,
  email: '',
  password: '',
  error: undefined,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginByUserEmail.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginByUserEmail.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUserEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
