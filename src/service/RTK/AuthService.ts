import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../../models/IUser'
import { RootState } from '../../store/store'
import { baseQueryWithReauth } from './service'
interface loginBody {
    email: string,
    password: string
}

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        login: build.mutation<any, loginBody>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body
            })
        }),
        protected: build.mutation<{ message: string }, void>({
            query: () => 'protected',
        }),
    }),
})

export const { useLoginMutation, useProtectedMutation } = authAPI