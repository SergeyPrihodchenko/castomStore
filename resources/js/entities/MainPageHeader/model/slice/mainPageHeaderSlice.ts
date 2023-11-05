import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchMainPageHeaderParams } from '../services/fetchMainPageHeaderParams/fetchMainPageHeaderParams';
import { MainPage, MainPageHeaderSchema } from '../types/mainPageHeaderSchema';

const initialState: MainPageHeaderSchema = {
  // isLoading: false,
  // error: undefined,
  data: [
    { title: 'initialTitle' },
    { header: '' },
    { title: '' },
    { img_path: '' },
    { all_title: [] },
    { all_header: [] },
    { all_subheader: [] },
    { all_img_path: [] },
  ],
};

export const mainPageHeaderSlice = createSlice({
  name: 'MainPage',
  initialState,
  reducers: {
    // setMainTitle: (state, action: PayloadAction<string>) => {
    //   state.title = action.payload;
    // },
    // setMainHeader: (state, action: PayloadAction<string>) => {
    //   state.header = action.payload;
    // },
    // setMainSubheader: (state, action: PayloadAction<string>) => {
    //   state.subheader = action.payload;
    // },
    // setMainImage: (state, action: PayloadAction<string>) => {
    //   state.image = action.payload;
    // },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchMainPageHeaderParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = action.payload;
      })
      .addCase(fetchMainPageHeaderParams.pending, (state, action) => {
        // state.isLoading = true;
        // state.error = undefined;
      })
      .addCase(fetchMainPageHeaderParams.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

// Action creators are generated for each case reducer function
export const { actions: mainPageHeaderActions } = mainPageHeaderSlice;

export const { reducer: mainPageHeaderReducer } = mainPageHeaderSlice;
