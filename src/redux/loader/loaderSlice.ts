import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface LoaderSliceInterface{
    loading: boolean;
}

const initialState: LoaderSliceInterface = {
    loading:false,
}

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers:{
        setLoading: (state,action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = loaderSlice.actions
export default loaderSlice.reducer