import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IProduct } from "../types/types";
import { ProductSchema } from "@/Features/Admin/AddProduct/model/types/product";

export const productApi = createApi({
    reducerPath: 'product/api',
    baseQuery: axiosBaseQuery({
        baseUrl: '/admin'
    }),
    endpoints: build => ({
        getProducts: build.query<IProduct[], number>({
            query: (limit?: number) => ({
                url: '/products',
                method: 'GET',
            })
        }),
        getProductById: build.query<IProduct, number>({
            query: (product_id: number) => ({
                url: `/product/${product_id}`,
                method: 'GET',
            })
        }),
        createProduct: build.mutation<IProduct, Partial<IProduct>>({
            query: (product: ProductSchema) => ({
                url: '/products/create',
                method: 'POST',
                data: product
            })
        }),
        deleteProductById: build.mutation<IProduct, number>({
            query: (product_id: number) => ({
                url: `/product/${product_id}`,
                method: 'DELETE',
            })
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useDeleteProductByIdMutation
} = productApi