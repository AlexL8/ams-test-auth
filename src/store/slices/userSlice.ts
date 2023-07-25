import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
}
interface InitialState {
	user: User;
	isLoading: boolean;
}
const initialState: InitialState = {
		user: {
			id: 0,
			username: '',
			email: '',
			firstName: '',
			lastName: '',
			gender: '',
			image: '',
			token: '',
		},
		isLoading: false
	}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>){
			return {
				...state,
				user: action.payload
			}
		},
		setLoading(state, action: PayloadAction<boolean>) {
			return {
				...state,
				isLoading: action.payload
			}
		}
	},
})

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;