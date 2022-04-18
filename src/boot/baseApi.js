import axios from "axios";
import config from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosConfig = {
    baseURL: config.HOST,
    timeout: 30000,
};

AsyncStorage.getItem("@access_token").then(data => {
    api.interceptors.request.use(
        async config => {
            config.headers = {
                'Authorization': `${data}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            return config;
        },
        error => {
            Promise.reject(error)
        });
})

export const api = axios.create(axiosConfig)
export const apiPublic = axios.create(axiosConfig)

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export default api;