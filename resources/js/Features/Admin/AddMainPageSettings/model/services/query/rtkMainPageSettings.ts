import { axiosBaseQuery } from '@/App/providers/StoreProvider/config/axiosConfigQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { CurrentSettings, IHeader, ISubheader, ITitle, MainPageSchema } from '../../types/mainPage';

export const queryMainPageSettings = createApi({
  reducerPath: 'query/MainPageSettings',
  baseQuery: axiosBaseQuery({ baseUrl: '/' }),
  tagTypes: ['settings'], // 1
  endpoints: (build) => ({
    getMainPageSettingsLists: build.query<MainPageSchema, void>({
      query: () => ({
        url: 'admin/dashboard/main',
        method: 'GET',
      }),
      providesTags: (result) => ['settings'], // 2
    }),
    addMainPageSettings: build.mutation<
      { title: string; header: string; subheader: string; image_path: string },
      Partial<{ title: string; header: string; subheader: string; image_path: string }>
    >({
      query: (data) => ({
        url: 'setAttribute',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['settings'], // 3
    }),
    updateHeader: build.mutation<IHeader, number>({
      query: (id: number) => ({
        url: `updateHeader/${id} `,
        method: 'POST',
        data: id,
      }),
      invalidatesTags: ['settings'],
    }),
    updateTitle: build.mutation<ITitle, number>({
      query: (id: number) => ({
        url: `updateTitle/${id} `,
        method: 'POST',
        data: id,
      }),
      invalidatesTags: ['settings'],
    }),
    updateSubheader: build.mutation<ISubheader, number>({
      query: (id: number) => ({
        url: `updateSubheader/${id} `,
        method: 'POST',
      }),
      invalidatesTags: ['settings'],
    }),
    deleteTitleById: build.mutation<ITitle, number>({
      query: (id: number) => ({
        url: `deleteTitle/${id} `,
        method: 'DELETE',
      }),
      invalidatesTags: ['settings'],
    }),
    deleteHeaderById: build.mutation<IHeader, number>({
      query: (id: number) => ({
        url: `deleteHeader/${id} `,
        method: 'DELETE',
      }),
      invalidatesTags: ['settings'],
    }),
    deleteSubheaderById: build.mutation<ISubheader, number>({
      query: (id: number) => ({
        url: `deleteSubheader/${id} `,
        method: 'DELETE',
      }),
      invalidatesTags: ['settings'],
    }),
  }),
});

export const {
  useAddMainPageSettingsMutation,
  useGetMainPageSettingsListsQuery,
  useUpdateHeaderMutation,
  useUpdateTitleMutation,
  useUpdateSubheaderMutation,
  useDeleteTitleByIdMutation,
  useDeleteHeaderByIdMutation,
  useDeleteSubheaderByIdMutation,
} = queryMainPageSettings;
