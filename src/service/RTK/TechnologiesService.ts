import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { ITechnology } from "../../models/ITechnology";
import { baseQueryWithReauth, CustomErrorType } from "./service";

export const technologiesAPI = createApi({
    reducerPath: 'technologiesAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Tecnologies'],
    endpoints: (build) => ({
        fechAllTechnologies: build.query<ITechnology[], ''>({
            query: () => ({
                url: '/technologies',
                method: 'GET'
            }),
            providesTags: result => ['Tecnologies']
        }),
        deleteTechnology: build.mutation<any, number>({
            query: (id) => ({
                url: `/technologies/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tecnologies']
        }),
        createTechnology: build.mutation<any, string>({
            query: (name) => ({
                url: '/technologies',
                method: 'POST',
                body: { name: name }
            }),
            invalidatesTags: ['Tecnologies']
        })
    }),
})

export const { useFechAllTechnologiesQuery, useCreateTechnologyMutation, useDeleteTechnologyMutation } = technologiesAPI