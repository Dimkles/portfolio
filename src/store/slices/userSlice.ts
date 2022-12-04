import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"
import { userAPI, checkAuthAPI } from "../../service/RTK/UserService"
import { RootState } from "../store"

export interface UserState {
    isAuth?: boolean
    user: IUser
    token: string
}

const initialState: UserState = {
    user: {} as IUser,
    token: '',
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            userAPI.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.user = payload.user
                state.token = payload.token
                state.isAuth = true
            },
        ).addMatcher(
            userAPI.endpoints.logout.matchFulfilled,
            (state) => {
                state.user = {} as IUser
                state.token = ''
                state.isAuth = false
            },
        ).addMatcher(
            checkAuthAPI.endpoints.checkAuth.matchFulfilled,
            (state, { payload }) => {
                state.user = payload.user
                state.token = payload.token
                state.isAuth = true
            },
        )
    },
})

export default userSlice.reducer
export const selectCurrentUser = (state: RootState) => state.user.user
