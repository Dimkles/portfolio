import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../../models/IUser'
import { RootState } from '../../store/store'
import { baseQueryWithReauth } from './service'

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        getAllUsers: build.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            })
        }),

    }),
})

export const { useGetAllUsersQuery } = usersAPI