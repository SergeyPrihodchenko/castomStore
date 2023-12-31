import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IProduct, IProductResponse } from "../types/types";
import { ProductSchema } from "@/Features/Admin/AddProduct/model/types/product";

export const productApi = createApi({
    reducerPath: 'product/api',
    baseQuery: axiosBaseQuery({
        baseUrl: '/admin'
    }),
    tagTypes: ['Product'],
    endpoints: build => ({
        getProducts: build.query<IProductResponse, number>({
            query: (limit?: number) => ({
                url: `/products/json/${limit}`,
                method: 'GET',
            }),
            providesTags: ['Product']
        }),
        getProductById: build.query<IProduct, number>({
            query: (product_id: number) => ({
                url: `/product/${product_id}`,
                method: 'GET',
            })
        }),
        createProduct: build.mutation<IProduct, any>({
            query: (product: ProductSchema) => ({
                url: '/products/save',
                method: 'POST',
                data: product,
                headers: {
                    'content-Type': 'multipart/form-data'
                }
            })
        }),
        deleteProductById: build.mutation<IProduct, number>({
            query: (product_id: number) => ({
                url: `/product/${product_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product']
        }),
        searchProduct: build.query<string, any>({
            query: (search: string) => ({
                url: `/products/${search}`,
                method: 'GET'
            }),
        })
    })
})

export const {
    useLazyGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useDeleteProductByIdMutation,
    useLazySearchProductQuery
} = productApi