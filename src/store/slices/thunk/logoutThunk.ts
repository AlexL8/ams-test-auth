import { createAsyncThunk } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

interface Payload {
	navigate: NavigateFunction;
}

export const logoutThunk = createAsyncThunk('THUNK_LOGOUT', async (payload: Payload, thunkAPI) => {
	localStorage.clear()
	payload.navigate('/login')
})