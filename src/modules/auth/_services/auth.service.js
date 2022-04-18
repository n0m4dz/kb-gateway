import { apiPublic, api } from "../../../boot/baseApi";

export const signIn = (payload) => {
    return apiPublic.post('/core/auth/login', payload)
        .then(response => response.data)
        .catch(err => {
            console.log(err);
        })
}

export const signOut = (payload) => {
    api.get("/core/auth/logout")
        .then(({ data }) => {
            console.log(data);
            return data;
        })
}

export const getMe = () => {
    return api.get('/core/auth/me')
        .then(response => response.data)
        .catch(err => err)
}