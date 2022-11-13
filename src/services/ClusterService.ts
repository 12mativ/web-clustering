import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const clusterAPI = createApi({
    reducerPath: 'clusterAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3434/'
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        loadImage: builder.mutation<File, FormData>({
            query: (file) => ({
                url: '/index',
                method: 'POST',
                body: file
            }),
            invalidatesTags: ['Post']
        }),

        amountClusters: builder.query<File, string>({
            query: (clusterNumber) => ({
                url: '/cluster/createClusters',
                params: {
                    _clusterNumber: clusterNumber
                }
            }),
            providesTags: result => ['Post']
        })
    })
})

export const { useLoadImageMutation, useAmountClustersQuery } = clusterAPI