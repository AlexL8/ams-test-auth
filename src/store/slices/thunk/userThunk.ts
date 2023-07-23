import {createAsyncThunk} from "@reduxjs/toolkit";
import {axios}from '../../../libs/axios';
import {UserResponse} from "./interfaces";
import { LoginValues } from "../../../pages/auth-page/interface";
import { NavigateFunction } from "react-router-dom";

interface Payload {
    values: LoginValues;
    navigate: NavigateFunction;
}

export const thunkLogin = createAsyncThunk('THUNK_LOGIN', async (payload: Payload, thunkAPI) => {
    try {
        const data = {
            username: payload.values.username,
            password: payload.values.password,
        }
        const loginResponse = await axios<UserResponse>({
            method: 'POST',
            url: '/auth/login',
            data,
        })
        localStorage.setItem('token', loginResponse.data.token)
        payload.navigate('/profile')
    } catch (err) {
        console.warn(err)
    }
})