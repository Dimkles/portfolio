import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'

import { Mutex } from 'async-mutex'
import { BACKEND_URL } from '../../constants'

export function isCustomError(
    error: unknown
): error is CustomErrorType {
    return typeof error === 'object' && error != null && 'status' in error
}
export interface CustomErrorType {
    status: number
    data: {
        message: string
    }
}

const mutex = new Mutex()
export const baseQuery = fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('token')
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
    credentials: 'include',
    mode: 'cors',
})

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError | CustomErrorType, any
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && (result.error.status === 401 || result.error.status === 403)) {
        if (localStorage.getItem('token')) {
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
    }
    return result
}