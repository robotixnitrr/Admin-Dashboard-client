import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

export const fetchStats = createAsyncThunk('stats/fetchStats', async () => {
    const response = await api('/admin/stats');
    return response.data;
});

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        users: 0,
        events: 0,
        blogs: 0,
        workshops: 0,
        projects: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStats.fulfilled, (state, action) => {
            return { ...state, ...action.payload };
        });
        builder.addCase(fetchStats.rejected, (state, action) => {
            console.error("Failed to fetch stats:", action.error);
        });
    },
});

export default statsSlice.reducer; 