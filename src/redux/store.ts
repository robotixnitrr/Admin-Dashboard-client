import { configureStore } from "@reduxjs/toolkit";
// import { loaderSlice } from "./loader/loaderSlice";
import loaderReducer from './loader/loaderSlice'

export const store = configureStore({
    reducer:{
        loader:loaderReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch