import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITitle, MainPageSchema } from '../types/mainPage';
import { fetchSettings } from '../services/fetchSettings';

const initialState: MainPageSchema = {
  isLoading: false,
  error: '',
  data: [
    { title: '' },
    { header: '' },
    { title: '' },
    { img_path: '' },
    { all_title: [] },
    { all_header: [] },
    { all_subheader: [] },
    { all_img_path: [] },
  ],
};

export const addSettingsSlice = createSlice({
  name: 'addMainPageSettings',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.data[0].title = action.payload;
    },
    setHeader: (state, action) => {},
    setSubheader: (state, action) => {},
    setImg: (state, action) => {},
    setTitleList: (state, action) => {
      // let list = state.data[4].all_title;
      // console.log(action.payload);

      // state.data[4].all_title = [...list, action.payload];
      state.data[4].all_title = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchSettings.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = action.payload;
    }),
});

export const { actions: addMainPageSettingsActions } = addSettingsSlice;
export const { reducer: addMainPageSettingsReducer } = addSettingsSlice;
