import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authAPI } from '../service/RTK/AuthService'
import { usersAPI } from '../service/RTK/usersService'
import authReducer from './slices/authSlice'
export const rootReducer = combineReducers({
    [authAPI.reducerPath]: authAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    auth: authReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authAPI.middleware).concat(usersAPI.middleware),

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']