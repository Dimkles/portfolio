import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../../models/IUser'
import { RootState } from '../../store/store'

interface loginBody {
    email: string,
    password: string
}

export const authAPI = createApi({
    reducerPath: 'authAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7000/auth',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token || localStorage.getItem('token')
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),

    endpoints: (build) => ({
        login: build.mutation<any, loginBody>({
            query: (body) => ({
                url: '/login',
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