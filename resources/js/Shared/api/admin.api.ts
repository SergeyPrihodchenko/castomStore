import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getMainPageTitle: builder.query<MainPageSchema, void>({
      query: () => ({
        url: 'admin/dashboard/main',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetMainPageTitleQuery } = adminApi;
