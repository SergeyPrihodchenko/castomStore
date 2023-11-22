import { axiosBaseQuery } from '@/App/providers/StoreProvider/config/axiosConfigQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import { Catalog, Category } from '../../types/types'

export const queryCatalogs = createApi({
    reducerPath: 'query/catalogs',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/catalogs'}),
    tagTypes: ['Catalogs', 'Categories'],
    endpoints: (build) => ({
        getCatalogs: build.query<Catalog[], string>({
            query: (arg) => ({
                url: '/acardion',
                method: 'GET',
                params: arg
            }),
            providesTags: result => ['Catalogs']
        }),
        getCategories: build.query<Category[], number>({
            query: (id) => ({
                url: `/categoriesForCatalog/${id}`,
                method: 'GET'
            }),
            providesTags: result => ['Categories']
        }),
        setCatalog: build.mutation<Catalog, Partial<Catalog>>({
            query: (data) => ({
                url: '/addCatalog',
                method: 'POST',
                data: data,
            }),
            invalidatesTags: ['Catalogs']
        }),
        setCategory: build.mutation<Category, Partial<Category>>({
            query: (data) => ({
                url: '/addCategory',
                method: 'POST',
                data: data
            }),
            invalidatesTags: ['Categories']
        }),
        updateCatalog: build.mutation<Catalog, Partial<Catalog>>({
            query: (data) => ({
                url: '/updateCatalog',
                method: 'POST',
                data: data
            }),
            invalidatesTags: ['Catalogs']
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
        deleteCatalog: build.mutation<number, Partial<number>>({
            query: (id) => ({
                url: `/deleteCatalog/${id}`,
                method: 'GET'
            }),
            invalidatesTags: ['Catalogs']
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

    useSetCatalogMutation, 
    useSetCategoryMutation, 
    useUpdateCatalogForCategoryMutation,
    useUpdateCatalogMutation,
    useUpdateCategoryMutation,
    useDeleteCatalogMutation,
    useDeleteCategoryMutation,
    useGetCategoriesQuery,
    useGetCatalogsQuery
    
} = queryCatalogs