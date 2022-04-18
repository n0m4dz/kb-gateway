import { api } from "../../../../boot/baseApi";

export const getUserService = () => {
    return api.get('/school/auth/user')
        .then(response => response.data)
        .catch(err => err)
}