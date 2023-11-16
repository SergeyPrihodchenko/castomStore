import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types/mainPage';
import { fetchSettings } from '../services/fetchSettings';

const initialState: MainPageSchema = {
  current_settings: {
    title: '',
    header: '',
    subheader: '',
    img_path: '',
  },
  list_settings: {
    all_title: [],
    all_header: [],
    all_subheader: [],
    all_img_path: [],
  },
};

export const addSettingsSlice = createSlice({
  name: 'MainPageSettingsFields',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.current_settings.title = action.payload;
    },
    setHeader: (state, action: PayloadAction<string>) => {
      state.current_settings.header = action.payload;
    },
    setSubheader: (state, action: PayloadAction<string>) => {
      state.current_settings.subheader = action.payload;
    },
    setImg: (state, action) => {},
    setTitleList: (state, action) => {
      // let list = state.data[4].all_title;
      // console.log(action.payload);
      // state.data[4].all_title = [...list, action.payload];
      // state.data[4].all_title = action.payload;
    },
  },
  // extraReducers: (builder) =>
  //   builder.addCase(fetchSettings.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.error = undefined;
  //     state.data = action.payload;
  //   }),
});

export const { actions: addMainPageSettingsActions } = addSettingsSlice;
export const { reducer: addMainPageSettingsReducer } = addSettingsSlice;
