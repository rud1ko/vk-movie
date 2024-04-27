import {configureStore} from "@reduxjs/toolkit";
import {MovieAPI} from "./api/MovieAPI";




export const store = configureStore({
    reducer: {
        [MovieAPI.reducerPath]: MovieAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(MovieAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>