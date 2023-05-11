import { AccessTokenState } from "@/Types/Redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AccessTokenState = {
	accessToken: (localStorage.accessToken && JSON.parse(localStorage.accessToken)) || "",
};

const AccessTokenSlice = createSlice({
	name: "accessToken",
	initialState,
	reducers: {
		addToken: (state, action: PayloadAction<string>) => {
			localStorage.setItem(
				"accessToken",
				JSON.stringify(action.payload),
			);
		
			state.accessToken = action.payload;
		},
	},
});

export const { addToken } = AccessTokenSlice.actions;

export default AccessTokenSlice.reducer;
