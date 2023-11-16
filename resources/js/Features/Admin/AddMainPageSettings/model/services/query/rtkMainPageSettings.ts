import { axiosBaseQuery } from '@/App/providers/StoreProvider/config/axiosConfigQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { CurrentSettings, IHeader, MainPageSchema } from '../../types/mainPage';

export const queryMainPageSettings = createApi({
  reducerPath: 'query/MainPageSettings',
  baseQuery: axiosBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Settings'], // 1
  endpoints: (build) => ({
    getMainPageSettingsLists: build.query<MainPageSchema, void>({
      query: () => ({
        url: 'admin/dashboard/main',
        method: 'GET',
      }),
      providesTags: (result) => ['Settings'], // 2
    }),
    addMainPageSettings: build.mutation<
      { title: string; header: 'string' },
      Partial<{ title: string; header: 'string' }>
    >({
      query: (data) => ({
        url: 'setAttribute',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['Settings'], // 3
    }),
    updateHeader: build.mutation<IHeader, Partial<IHeader>>({
      query: (body) => ({
        url: `updateHeader/${body.id} `,
        method: 'POST',
        data: body,
      }),
    }),
  }),
});

export const {
  useAddMainPageSettingsMutation,
  useGetMainPageSettingsListsQuery,
  useUpdateHeaderMutation,
} = queryMainPageSettings;
