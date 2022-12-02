import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'
import { RootState } from '../../store/store'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:7000',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).user.token || localStorage.getItem('token')
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
    credentials: 'include'
})

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError, any
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                const refreshResult: any = await baseQuery('/auth/refresh', api, extraOptions)
                if (refreshResult.data.token) {
                    localStorage.setItem('token', refreshResult.data.token)
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    console.log('logout')
                }
            } finally {
                release()
            }
        } else {
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result
}