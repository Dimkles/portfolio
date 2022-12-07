import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IProject } from "../../models/IProject";
import { baseQueryWithReauth } from "./service";


export const projectAPI = createApi({
    reducerPath: 'projectAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Project'],
    endpoints: (build) => ({
        fechAllProjects: build.query<IProject[], any>({
            query: () => ({
                url: '/projects',
                method: 'GET'
            }),
            providesTags: resul => ['Project']
        }),
        deleteProject: build.mutation<any, number>({
            query: (id) => ({
                url: `/projects/${id}`,
                method: 'DELETE',

            }),
            invalidatesTags: ['Project'],
        }),
        createProject: build.mutation<IProject, FormData>({
            query: (body) => ({
                url: '/projects',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Project']
        })
    }),
})

export const { useFechAllProjectsQuery, useCreateProjectMutation, useDeleteProjectMutation } = projectAPI