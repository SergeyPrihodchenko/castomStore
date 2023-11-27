import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Category } from "../types/types";

export const queryCategory = createApi({
    reducerPath: 'query/category',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/categories'}),
    tagTypes: ['Catalogs', 'Categories'],
    endpoints: (build) => ({

        getCategories: build.query<Category[], number>({
            query: (id) => ({
                url: `/categoriesForCatalog/${id}`,
                method: 'GET',
            }),
            providesTags: result => ['Categories']
        }),

        setCategory: build.mutation<Category, Partial<Category>>({
            query: (data) => ({
                url: '/setCategory',
                method: 'POST',
                data: data
            }),
            invalidatesTags: ['Categories']
        }),

        updateCategory: build.mutation<Category, Partial<Category>>({
            query: (data) => ({
                url: '/updateCategory',
                method: 'POST',
                data: data
            }),
            invalidatesTags: ['Categories']
        }),

        updateCatalogForCategory: build.mutation<{category_id: number, catalog_id: number}, Partial<{category_id: number, catalog_id: number}>>({
            query: (data) => ({
                url: '/updateCategory',
                method: 'POST',
                data: data
            }),
            invalidatesTags: ['Categories']
        }),

        deleteCategory: build.mutation<number, Partial<number>>({
            query: (id) => ({
                url: `/deleteCategory/${id}`,
                method: 'GET'
            }),
            invalidatesTags: ['Categories']
        }),
    })
})

export const {

   useGetCategoriesQuery,
   useDeleteCategoryMutation,
   useUpdateCatalogForCategoryMutation,
   useSetCategoryMutation,
   useUpdateCategoryMutation,

} = queryCategory