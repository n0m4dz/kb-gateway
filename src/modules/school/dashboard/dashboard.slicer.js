import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUserService } from "./_services/dashboard.service";

export const getUser = createAsyncThunk(
    "school/user",
    async () => await getUserService()
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        loading: true,
        error: '',
        user: null,
    },
    reducers: {}
})

export const { setTitle, setAuthState } = dashboardSlice.actions
export default dashboardSlice.reducer