import { LoggedInState } from "@/types/redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LoggedInState = {
	isLoggedIn: localStorage.accessToken && JSON.parse(localStorage.accessToken) ? true : false,
};

const UserLoggedInSlice = createSlice({
	name: "userLoggedIn",
	initialState,
	reducers: {
		setLoggedIn: (state, action: PayloadAction) => {
			state.isLoggedIn = true;
		},
		unSetLoggedIn: (state, action: PayloadAction) => {
			state.isLoggedIn = false;
		},
	},
});

export const { setLoggedIn, unSetLoggedIn } = UserLoggedInSlice.actions;

export default UserLoggedInSlice.reducer;
