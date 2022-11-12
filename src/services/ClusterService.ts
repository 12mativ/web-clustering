import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postAPI = createApi({
    reducerPath: 'clusterAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<string, File>({
            query: () => ({
                url: '/cluster/createClusters',

            }),
            providesTags: result => ['Post']
        })
    })
})