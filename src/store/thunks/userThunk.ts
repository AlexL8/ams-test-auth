import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../libs/axios";
import { UserResponse, defaultThunkPayload } from "./interfaces";
import { LoginValues } from "../../pages/AuthPage/interface";
import { setLoading, setUser } from "../slices/userSlice";


interface LoginPayload extends defaultThunkPayload {
    values: LoginValues;
}

export const thunkLogin = createAsyncThunk('THUNK_LOGIN', async (payload: LoginPayload, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true))
        const data = {
            username: payload.values.username,
            password: payload.values.password,
        }
        const loginResponse = await axios<UserResponse>({
            method: 'POST',
            url: '/auth/login',
            data,
        })

        thunkAPI.dispatch(
            setUser({
               id: loginResponse.data.id,
               username: loginResponse.data.username,
               email: loginResponse.data.email,
               firstName: loginResponse.data.firstName,
               lastName: loginResponse.data.lastName,
               gender: loginResponse.data.gender,
               image: loginResponse.data.image,
               token: loginResponse.data.token
            })
        )
        localStorage.setItem('token', loginResponse.data.token)
        payload.navigate('/profile')
        console.log(payload);
        
    } catch (err) {
        console.warn(err)
    } finally {
        thunkAPI.dispatch(setLoading(false))
    }
})


export const logoutThunk = createAsyncThunk('THUNK_LOGOUT', async (payload: defaultThunkPayload, thunkAPI) => {
	localStorage.clear()
	payload.navigate('/login')
})