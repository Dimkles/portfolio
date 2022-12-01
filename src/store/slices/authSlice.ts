import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"
import { authAPI } from "../../service/RTK/AuthService"
import { RootState } from "../store"

interface UserState {
    user: IUser
    token: string
}

const initialState: UserState = {
    user: {} as IUser,
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            authAPI.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.user = payload.user
                state.token = payload.token
            }
        )
    },
})

export default authSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user
