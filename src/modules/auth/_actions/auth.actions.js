import { createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn } from "../_services/auth.service";
import { setTitle, setAuthState } from '../auth.slicer';

export const login = createAsyncThunk(
    "auth/sign",
    async (payload, { dispatch }) => {
        let result = await signIn(payload);
        console.log('token', result.accessToken);
        await AsyncStorage.setItem('@access_token', result.accessToken);
        dispatch(setTitle("Amjilt v3"));
        dispatch(setAuthState(true));
        return result;
    },
);

export const logout = createAsyncThunk(
    "auth/signout",
    async (payload, { dispatch }) => {
        await signIn(payload);
        dispatch(setTitle("Amjilt v3"));
        return result;
    },
);

export const getUser = createAsyncThunk(
    "auth/user",
    async () => {
        return await getMe();
    },
);