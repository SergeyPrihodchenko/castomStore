import { axiosBaseQuery } from '@/App/providers/StoreProvider/config/axiosConfigQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import { Catalog, Category } from '../../types/types'

export const queryCatalogs = createApi({
    reducerPath: 'query/catalogs',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/catalogs'}),
    endpoints: (build) => ({
        setCatalog: build.mutation<Catalog, Partial<Catalog>>({
            query: (data) => ({
                url: '/addCatalog',
                method: 'POST',
                data: data
            })
        }),
        setCategory: build.mutation<Category, Partial<Category>>({
            query: (data) => ({
                url: '/addCategory',
                method: 'POST',
                data: data
            })
        }),
        updateCatalog: build.mutation<Catalog, Partial<Catalog>>({
            query: (data) => ({
                url: '/updateCatalog',
                method: 'POST',
                data: data
            })
        }),
        updateCategory: build.mutation<Category, Partial<Category>>({
            query: (data) => ({
                url: '/updateCategory',
                method: 'POST',
                data: data
            })
        }),
        updateCatalogForCategory: build.mutation<{category_id: number, catalog_id: number}, Partial<{category_id: number, catalog_id: number}>>({
            query: (data) => ({
                url: '/updateCategory',
                method: 'POST',
                data: data
            })
        }),
        deleteCatalog: build.mutation<number, Partial<number>>({
            query: (id) => ({
                url: `/deleteCatalog/${id}`,
                method: 'GET'
            })
        }),
        deleteCategory: build.mutation<number, Partial<number>>({
            query: (id) => ({
                url: `/deleteCategory/${id}`,
                method: 'GET'
            })
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
    useDeleteCategoryMutation
    
} = queryCatalogs