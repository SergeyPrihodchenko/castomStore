import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainPageSettingsFields } from '../types/addMainPageSettings';

const initialState: MainPageSettingsFields = {
  title: '',
  header: '',
  subheader: '',
  image: '',
};

export const addMainPageSettingsSlice = createSlice({
  name: 'addMainPageSettings',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setHeader: (state, action: PayloadAction<string>) => {
      state.header = action.payload;
    },
    setSubheader: (state, action: PayloadAction<string>) => {
      state.subheader = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: addMainPageSettingsActions } = addMainPageSettingsSlice;

export const { reducer: addMainPageSettingsReducer } = addMainPageSettingsSlice;
