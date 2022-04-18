const authReducers = {
    setTitle: (state, action) => {
        state.title = action.payload
    },
    setAuthState: (state, action) => {
        state.isAuth = action.payload
    }
}

export default authReducers