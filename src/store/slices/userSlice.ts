import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
}

const initialState: User = {
		id: 0,
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		gender: '',
		image: '',
		token: '',
	}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setId(state, action: PayloadAction<number>) {
			state.id = action.payload;
		},
		setUserName(state,action: PayloadAction<string>) {
			state.username = action.payload;
		},
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		setFirstName(state, action: PayloadAction<string>) {
			state.firstName = action.payload;
		},
		setLastName(state, action: PayloadAction<string>) {
			state.lastName = action.payload;
		},
		setGender(state, action: PayloadAction<string>) {
			state.gender = action.payload;
		},
		setImage(state, action: PayloadAction<string>) {
			state.image = action.payload;
		},
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
	}
})

export const { setId, setUserName, setEmail, setFirstName, setLastName, setGender, setImage, setToken } = userSlice.actions;
export default userSlice.reducer;