import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Catalog } from "../types/tapes";

export const queryCatalogs = createApi({
    reducerPath: 'query/catalogs',
    baseQuery: axiosBaseQuery({baseUrl: '/admin/catalogs'}),
    tagTypes: ['Catalogs'],
    endpoints: (build) => ({

        getCatalogs: build.query<Catalog[], string>({
            query: (arg) => ({
                url: '/json',
                method: 'GET',
                params: arg
            }),
            providesTags: result => ['Catalogs']
        }),

        setCatalog: build.mutation<Catalog, Partial<Catalog>>({
            query: (data) => ({
                url: '/setCatalog',
                method: 'POST',
                data: data,
            }),
            invalidatesTags: ['Catalogs']
        }),

        updateCatalog: build.mutation<Catalog, Partial<Catalog>>({
            query: (data) => ({
                url: '/updateCatalog',
                method: 'POST',
                data: data
            }),
            invalidatesTags: ['Catalogs']
        }),

        deleteCatalog: build.mutation<number, Partial<number>>({
            query: (id) => ({
                url: `/deleteCatalog/${id}`,
                method: 'GET'
            }),
            invalidatesTags: ['Catalogs']
        }),
    })
})

export const {  

    useSetCatalogMutation, 
    useUpdateCatalogMutation,
    useDeleteCatalogMutation,
    useGetCatalogsQuery    
    
} = queryCatalogs