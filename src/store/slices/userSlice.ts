import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"
import { userAPI } from "../../service/RTK/UserService"
import { RootState } from "../store"

interface UserState {
    isAuth: boolean
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
                state = initialState
            },
        )
    },
})

export default userSlice.reducer
export const selectCurrentUser = (state: RootState) => state.user.user
