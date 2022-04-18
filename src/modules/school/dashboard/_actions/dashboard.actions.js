import { createAsyncThunk } from '@reduxjs/toolkit'
import {getUserService} from "../_services/dashboard.service";

export const getUser = createAsyncThunk(
    "school/user",
    async () => {
        return await getUserService();
    },
);