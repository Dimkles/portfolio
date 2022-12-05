import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { ITechnology } from "../../models/ITechnology";
import { baseQueryWithReauth } from "./service";

export const technologiesAPI = createApi({
    reducerPath: 'technologiesAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        fechAllTechnologies: build.query<ITechnology[], ''>({
            query: () => ({
                url: '/technologies',
                method: 'GET'
            })
        }),
        deleteTechnology: build.mutation<any, number>({
            query: (id) => ({
                url: `/technologies/${id}`,
                method: 'DELETE'
            })
        }),
        createTechnology: build.mutation<any, string>({
            query: (name) => ({
                url: '/technologies',
                method: 'POST',
                body: { name: name }
            })
        })
    }),
})

export const { useFechAllTechnologiesQuery, useCreateTechnologyMutation, useDeleteTechnologyMutation } = technologiesAPI