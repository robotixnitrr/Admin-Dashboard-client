import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { loaderSlice } from "./loader/loaderSlice";
import loaderReducer from './loader/loaderSlice'
import statsReducer from './statsSlice';
// import {LoaderSliceInterface}
// Correcting the reducer configuration to avoid naming conflicts
export const store = configureStore({
    reducer: combineReducers({
        loaderState: loaderReducer,
        statsState: statsReducer,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch