import { login, logout, getUser } from "../_actions/auth.actions";

const asyncReducers = {
    [login.pending]: (state) => {
        console.log('login pending')
        state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
        console.log("login fulfill");
        state.loading = false;
        state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
        console.log("login rejected");
        state.loading = action.payload;
        state.error = 'error occured'
    },

    // Check auth reducer
    [getUser.fulfilled]: (state, action) => {
        state.isAuth = true;
    },

    [getUser.rejected]: (state, action) => {
        state.isAuth = false;
    },
};


export default asyncReducers;