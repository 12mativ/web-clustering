import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const clusterAPI = createApi({
    reducerPath: 'clusterAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        loadImage: builder.mutation<File, File>({
            query: (file) => ({
                url: '/cluster/createClusters',
                method: 'POST',
                body: file
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const { useLoadImageMutation } = clusterAPI