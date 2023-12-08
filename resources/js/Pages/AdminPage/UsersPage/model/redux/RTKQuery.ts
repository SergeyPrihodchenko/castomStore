import { axiosBaseQuery } from "@/App/providers/StoreProvider/config/axiosConfigQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const queryUsers = createApi({
    reducerPath: 'query/users',
    baseQuery: axiosBaseQuery({baseUrl: 'users/'}),
    tagTypes: ['Users'],
    endpoints: (build) => ({
        getAdmins: build.mutation({
            query: () => ({
                url: 'admins',
                method: 'POST',
            })
        })
    })
});

export const {
    useGetAdminsMutation
} = queryUsers;