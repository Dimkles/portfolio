import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQueryWithReauth } from "./service";

export const projectAPI = createApi({
    reducerPath: 'projectAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        fechAllProjects: build.query({
            query: () => ({
                url: '/projects',
                method: 'GET'
            })
        }),
    }),
})

export const { useFechAllProjectsQuery } = projectAPI