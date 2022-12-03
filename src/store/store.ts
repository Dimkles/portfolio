import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userAPI, checkAuthAPI } from '../service/RTK/UserService'
import userReducer from './slices/userSlice'
export const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [checkAuthAPI.reducerPath]: checkAuthAPI.reducer,
    user: userReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userAPI.middleware).concat(checkAuthAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']