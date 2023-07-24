import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { thunkLogin } from "./thunk/userThunk";

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
		setUser(state, action: PayloadAction<User>){
			state = action.payload
			console.log('state',state);
		}
	},
	// extraReducers: (builder) => {
	// 	// Add reducers for additional action types here, and handle loading state as needed
	// 	builder.addCase(thunkLogin.fulfilled, (state, action) => {
	// 		console.log(state);
			
	// 	})
	//   },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;