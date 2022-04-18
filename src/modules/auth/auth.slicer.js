import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import reducers from "./_reducers/reducers"
import asyncReducers from "./_reducers/asyncRecuders"
import { getMe } from "./_services/auth.service";

export const getUser = createAsyncThunk(
    "auth/user",
    async () => await getMe()
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: true,
        isAuth: false,
        error: '',
        user: null,
        title: "Amjilt"
    },
    //non async
    reducers: {
        ...reducers
    },
    //async
    extraReducers: {
        ...asyncReducers,
        [getUser.fulfilled]: (state, action) => {
            if (action.payload.status) {
                state.user = action.payload;
                state.isAuth = true;
                state.loading = false;
            } else {
                state.isAuth = false;
                state.loading = false;
            }
        },

        [getUser.rejected]: (state, action) => {
            state.isAuth = false;
            state.loading = false;
        },
    }
})

export const { setTitle, setAuthState } = authSlice.actions
export default authSlice.reducer