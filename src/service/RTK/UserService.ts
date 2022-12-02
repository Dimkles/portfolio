import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQueryWithReauth } from './service'
interface loginBody {
    email: string,
    password: string
}

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        login: build.mutation<any, loginBody>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,

            }),
        }),
        logout: build.query({
            query: () => '/auth/logout',
        }),
    }),
})

export const { useLoginMutation, useLogoutQuery } = userAPI